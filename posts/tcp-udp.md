---
title: TCP와 UDP
description: 네트워크 계층 중 전송계층에서 사용하는 프로토콜
date: '2022-11-20'
tags:
  - Web
published: true
---


TCP와 UDP 모두 네트워크 계층 중 전송계층에서 사용하는 프로토콜입니다.

## TCP - Transmission Control Protocol

연결형 서비스로 Three Way Handshake 방식으로 연결을 설정합니다.

- 높은 신뢰성, 순서 보장
- 속도 비교적 느림
- 신뢰도 중요한 파일교환(HTTP 통신, 이메일 등)에 사용

- Three Way Handshake
  1. 상대에게 통신을 하고 싶다는 메시지 전송 (SYN)
  2. 상대는 그 메시지에 대한 응답 + 통신 준비 완료 메시지 전송 (SYN-ACN)
  3. 2번에서 받은 메시지에 응답 전송(ACN)

## UDP - User Datagram Protocol

Three Way Handshake를 사용하지 않는 비연결형 서비스입니다.

- 순서 보장하지 않으며 신뢰성 떨어짐
- 수신여부을 확인하지 않아 비교적 속도가 빠름
- 실시간성이 중요한 스트리밍 서비스 등에 사용
