---
title: Event Loop
description: Task를 순차적으로 처리하는 순환적 JS 런타임 모델
date: '2022-11-07'
tags:
  - JavaScript
published: true
---

## 개요

JS는 '단일 스레드' 기반의 언어입니다. 스레드가 하나라는 말은 곧 동시에 하나의 작업만을 처리할 수 있다는 걸 말합니다. 그러나 실제 JS가 사용되는 환경을 생각해보면 여러 작업이 동시에 처리됩니다. JS는 event loop를 이용해 비동기 방식으로 '동시성'을 지원합니다.

Event Loop는 JS 프로그램 실행의 바탕이 되는 런타임 모델입니다.
task가 생성되길 기다렸다가, task가 생성되면 순차적으로 이를 처리, 처리할 task가 없는 경우 sleep하는 순환적인 JS 루프를 가리킵니다.

## Task와 Microtask

event loop는 '현재 실행중인 task가 없는지', 'task queue에 task가 있는지'를 반복적으로 확인합니다.

### Task

대부분의 JS프로그램은 task로 실행됩니다.
script, handler, active event 등이 이에 해당합니다.
이들은 task로 queue에 추가돼, 가장 오래된 task부터 순차적으로 실행됩니다.

### Microtask

일부 JS프로그램은 microtask로 실행됩니다.
`Promise.prototype.then(onFulfilled, onRejected)` 내 함수 등이 해당합니다.
이들은 microtask로 queue와는 다른 microqueue에 추가돼, 각 task가 끝날 때마다 가장 오래된 micortask부터 순차적으로 실행됩니다.

### 화면묘사까지의 과정

각 task가 완료될 때마다 microtask가 실행됩니다. 이후 바뀐 내용이 있는 경우 화면이 그려집니다.
모든 microtask 실행이 끝나고 화면이 그려진 뒤 task queue 내 다음 요소가 실행됩니다.

## 블로킹 회피

task와 microtask 모두 하나의 스레드에서 실행되기 때문에, 한 task/microtask 실행에 시간이 걸릴 과하게 경우, 다른 task 실행이 멈추게 됩니다.
Web 브라우저 런타임에서는 화면이 멈추고 유저가 조작할 수 없는 상태가 됩니다.

이런 병목현상의 일반적인 원인으로 I/O가 있습니다.
만약 WebAPI나 파일시스템, DB 측 처리에 문제가 없더라도 JS런타임 내부에서 완결되는 처리에 비하면 비교적 많은 시간을 필요로 합니다.
> I/O
>
> - 네트워크를 경유한 데이터 교환
> - 파일시스템의 파일 읽고쓰기
> - DB와의 정보교환

따라서 Ajax나 HTTP 클라이언트 등은 비동기로 실행되도록 만들어졌습니다. 이같은 API에서는 I/O를 동반하는 처리는 event loop의 바깥(다른 프로세스)에서 이뤄집니다.
예를들어 Ajax Request(`XMLHttpRequest`)의 경우, 해당 처리 상태를 task에서 주기적으로 확인하도록 하거나 event listener(처리 완료 = event 발화시 task queue에 추가)로 확인할 수 있습니다.

## 참고

- [자바스크립트와 이벤트 루프](https://meetup.toast.com/posts/89)
- [イベントループとは何なのか？](https://qiita.com/mizukyf/items/17cff97493b4b8f27c68)
- [Help, I’m stuck in an event-loop.](https://vimeo.com/96425312)
