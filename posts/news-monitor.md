---
title: 저녁뉴스 보고서 생성 서비스 개발 기록
description: SvelteKit과 FastAPI로 서비스 구축하고 AWS, Cloudflare Pages에 배포하기
date: '2024-01-23'
tags:
  - SvelteKit
  - FastAPI
  - AWS
  - Github Actions
  - Cloudflare Pages
published: true
---

## 개발환경

- SvelteKit (SSR)
- Cloudflare Pages
- FastAPI
- Docker
- GitHub Actions
- AWS (EC2)

## 배포환경

**프론트엔드**

- Cloudflare Pages를 사용해 배포한다.
- main 브랜치가 push 되면 자동으로 빌드 및 배포가 이뤄진다.

**백엔드**

- AWS EC2를 이용해 배포한다.
- Github Actions를 통해  main 브랜치에 push하면 Docker 이미지가 빌드되고 자동으로 배포된다.

## EC2 인스턴스 생성 및 Docker 설치

백엔드 서버는 80번 포트로 실행할 예정이기 때문에 인바운드 규칙은 `HTTP:80`과 `HTTPS:443`을 허용한다.
ssh로 연결할 경우 추가로 22번 포트도 열어준다.

1. EC2 인스턴스 생성
    - Ubuntu, HTTPs, HTTP 트래픽 허가 체크
    - 개인 pem 키는 `C:\Users\user\.ssh\`에 저장

2. remote ssh로 연결
    `ssh -i "~/.ssh/news-tool.pem" ubuntu@ec2-**-***-***-**.us-east-2.compute.amazonaws.com`

3. Docker 설치
    [공식 문서](https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository)에서 소개하는 대로 설치 진행

4. Docker 설정 변경 (선택)
    linux 환경에서 Docker를 조작하려면 `sudo`를 사용해야 한다. 사용자를 Docker그룹에 추가해 `sudo`를 생략할 수 있다.

```bash
sudo usermod -aG docker ubuntu
sudo service docker restart
```

- `usermod` : 사용자 속성 변경
- `-G (--group)` : 새로운 그룹
- `-a (--append)` : 다른 그룹에서 삭제 없이 G 옵션에 따른 그룹에 사용자 추가

## workflow 작성

github action에서 사용할 workflow yml을 작성한다.
workflow는 리포지토리에 등록된 secret 토큰을 사용할 수 있다.
코드 작성에 앞서 workflow에서 사용할 토큰을 미리 발급받고 등록을 한다.

### Token 발급

workflow에서 사용할 secret 토큰을 발급한다.

**docker access token**

- docker.com 접속
- account Settings > Security > new access token
- `dckr_pat_**************_**=*********`

**EC2 pem key, user name, host name**

- user명: `user`
- host명: `ec2-00-000-000-00.us-east-2.compute.amazonaws.com`

### secret 토큰 리포지토리 등록

위에서 발급 받은 토큰을 Github 리포지토리에 등록한다
리포지토리 settings → security → actions → new repository secret

key값은 workflow 코드에서 사용할 이름과 같아야 한다.

### workflow 코드

main 브랜치에 push하면 `backend/` 파일을 Docker 이미지로 만들어 EC2로 배포하는 내용이다.
Docker 실행시 8000번 포트를 80번(HTTP)으로 포트 포워딩하도록 설정했다.

```yml title=".github/workflows/deploy.yml"
name: Deploy with Docker

// trigger 조건
on:
  push:
    branches: ['main']

// 실행할 내용
jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Login to Docker Hub
        uses: docker/login-action@v3
        with:
          username: ${{ secrets.DOCKER_HUB_USERNAME }}
          password: ${{ secrets.DOCKER_HUB_ACCESS_TOKEN }}

      - name: Build and push Docker image
        uses: docker/build-push-action@v5
        with:
          context: ./backend
          push: true
          tags: ${{ secrets.DOCKER_HUB_USERNAME }}/news-tool:latest

      - name: Deploy via SSH
        uses: appleboy/ssh-action@v1.0.0
        with:
          host: ${{ secrets.EC2_SSH_HOST }}
          username: ${{ secrets.EC2_SSH_USER }}
          key: ${{ secrets.EC2_SSH_PRIVATE_KEY }}
          script: |
            if docker ps -a | grep -q news-tool; then
              docker stop news-tool
              docker rm news-tool
            fi

            cd /home/ubuntu
            docker pull ${{ secrets.DOCKER_HUB_USERNAME }}/news-tool:latest
            docker run -d --name news-tool -p 80:8000 ${{ secrets.DOCKER_HUB_USERNAME }}/news-tool:latest
            echo "Deployed news-tool"

```

## AWS HTTPS 적용

HTTPS 페이지에서 HTTP 리소스를 로드하면 Mixed Content 에러가 발생한다.
브라우저의 보안 정책으로 HTTPS로 로드된 페이지에서는 HTTP 리소스를 로드하는 것이 차단되기 때문이다.
이를 해결하기 위해 EC2 서버에 HTTPS를 적용해야 한다.
대략적인 흐름은 다음과 같다.

1. Route53에서 DNS 도메인 구매
2. AWS Certificate Manager에서 SSL 인증서 발급 및 호스팅 영역에 레코드 등록
3. AWS Load Balancer 적용할 대상 그룹 생성
4. AWS Load Balancer 생성 및 적용
5. domain A 레코드 등록
6. 리스너 규칙 추가


### Route53에서 DNS 도메인 구매

도메인 등록에서 원하는 도메인 검색 후 구매한다.
구매가 승인되면 이메일로 도메인을 인증한다.

이후 호스팅 영역을 생성한다.

- 도메인 이름 입력 : 구매한 도메인 주소 입력
- 유형 : 퍼블릭 호스팅 영역

### AWS Certificate Manager에서 SSL 인증서 발급 및 호스팅 영역에 레코드 등록

#### SSL 인증서 발급

- acm에서 발급 받은 ssl은 내보내기 불가
- aws 로드밸런싱 서비스로 적용해야 함 ([참고](https://jindevelopetravel0919.tistory.com/192))

ACM → 인증서 요청

- 퍼블릭 인증서 요청
- 구매한 도메인 주소 입력
- DNS 검증
- RSA 2048

#### CNAME 레코드 등록

Route53 → 도메인 주소 클릭 → 레코드 생성

> 발급까지 짧으면 20~30분, 길면 2시간 정도 걸린다고 한다.
> 그 이상 걸릴 경우 과정을 점검하거나 다시 요청할 필요가 있다.

### AWS Load Balancer 적용할 대상 그룹 생성

> 대상 그룹 : 로드밸런서가 연결할 인스턴스 그룹들

EC2 → 대상 그룹 → 대상 그룹 생성

- 대상 유형 : 인스턴스
- VPC : 인스턴스 EC2와 동일하게 설정
- 상태검사 : 유효한 URI Path 입력
  - 정기적으로 AWS가 요청을 보내 유효한지 확인

### AWS Load Balancer 생성 및 적용

EC2 → 로드밸런서 → ALB 생성

- 네트워크 매핑 :  모두 선택
  - EC2가 사용하는 VPC, 서브넷과 매핑돼야 한다.
- 보안 그룹 : EC2 인스턴스와 동일
- 리스너
  - `HTTP:80` Forward to  : 생성한 대상그룹 선택
  - `HTTPS:443` Forward to  : 생성한 대상그룹 선택
- 인증서 : ACM으로 생성한 인증서 선택

### domain A 레코드 등록

Route53 → 도메인 주소 클릭 → 레코드 생성 → 별칭

- 트래픽 라우팅 대상 : Application/Classic Load Balancer에 대한 별칭
- 리전 : 로드밸런서와 동일한 리전 선택
- 생성한 로드밸런서 선택

총 4개의 레코드가 있으면 된다. (A, NS, SOA, CNAME)

### 리스너 규칙 추가

80번 포트 리스너를 443번 포트로 리다이렉트하도록 설정한 뒤
로드밸런서 정보로 들어가 아래 리스너탭을 확인한다.

#### `HTTPS:80` 조건 추가

1단계 : 규칙 추가 (선택)
2단계 : 규칙 조건 정의

- 호스트 헤더
- 구매한 도메인 주소 입력
3단계 : 규칙 작업 정의
- 대상 그룹으로 전달
- 대상 그룹 : 생성한 대상 그룹 선택
- 기본값보다 우선이 되도록 조정

로드밸런싱 > 대상 그룹에서 생성한 대상 그룹을 선택했을 때 표시했을 때
정상 표시가 뜨면 HTTPS  적용이 완료된 것이다.

## 프론트엔드 배포

통신할 API 엔드포인트를 `https://<도메인 주소>`로 변경한다.

### 스벨테킷 어댑터 추가

sveltekit은 빌드시 적절한 adaptor가 필요하다.
Cloudflare Pages에 배포하기 위해 `adapter-cloudflare`를 설치하고 svelte.config.js를 수정한다.
[공식문서](https://kit.svelte.dev/docs/adapter-cloudflare) 안내 대로 진행하면 된다.

```bash
npm i -D @sveltejs/adapter-cloudflare
```

```js title='svelte.config.js'
import adapter from '@sveltejs/adapter-cloudflare';

export default {
  kit: {
    adapter: adapter({
      // See below for an explanation of these options
      routes: {
        include: ['/*'],
        exclude: ['<all>']
      }
    })
  }
};
```

### Cloudflare Pages 배포

main 브랜치에 push 되면 `frontend/` 파일을 build하고 deploy하도록 설정

- Framework preset : Sveltekit
- Build command : `npm run build`
- Build output directory : `/.svelte-kit/cloudflare`
- Root directory : `/frontend`

이후 [https://news-monitor.pages.dev](https://news-monitor.pages.dev) 가 문제없이 표시되며
통신도 정상적으로 이뤄지는 것을 확인할 수 있다.

## 참고

### Github Actions

- [project000-backend-recommend](https://github.com/dev-artisee/project000-backend-recommend)
- [SSH for GitHub Actions](https://github.com/appleboy/ssh-action)
- [GitHub Actions을 이용한 Docker 이미지 빌드 및 AWS EC2 배포 자동화](https://yein-lee.tistory.com/50)

### AWS

- [[Github Actions CI/CD] AWS EC2 + Docker 배포하기](https://velog.io/@sysy123/Github-Actions-CICD)
- [EC2 HTTPS로 연결하기](https://woojin.tistory.com/94)
- [[AWS] EC2 HTTPS 및 로드밸런서 적용](https://jindevelopetravel0919.tistory.com/192)
- [[AWS] ACM 인증서 발급 후 적용 방법.](https://support.bespinglobal.com/ko/support/solutions/articles/73000544834--aws-acm-%EC%9D%B8%EC%A6%9D%EC%84%9C-%EB%B0%9C%EA%B8%89-%ED%9B%84-%EC%A0%81%EC%9A%A9-%EB%B0%A9%EB%B2%95-)
