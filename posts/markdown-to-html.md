---
title: Markdown의 HTML 변환 처리
description: Markdown이 Remark와 Rehype를 거쳐 HTML로 변환되기까지
date: '2024-01-17'
tags:
  - Markdown
published: true
---

## remark와 rehype

[unified](https://unifiedjs.com/)라 불리는 인터페이스의 일부로 `Unified.js` 규격에 따라 만들어진 파서.
Markdown → HTML 변환에 자주 사용된다.

- `remark` : Markdown 처리 담당
- `rehype` : HTML 처리 담당

unified는 다양한 plugin을 지원한다.
직접 코드를 작성하지 않아도 plugin을 도입해 여러 기능을 추가할 수 있다.

- [remark 플러그인](https://github.com/remarkjs/remark/blob/main/doc/plugins.md)
- [rehype 플러그인](https://github.com/rehypejs/rehype/blob/main/doc/plugins.md)

## 처리 흐름

전체적인 흐름은 다음과 같다.
프로그램이 다루기 쉬운 Abstract Syntax Tree(AST, 추상구문트리)를 경유함으로써
Markdown이나 HTML을 다양하게 조작할 수 있다.

1. `Parse` : 문자열을 AST로 변환
2. `Transform` : AST 조작
3. `Stringfy` : AST를 문자열로 변환

unified에서는 다음과 같이 Markdown과 HTML의 AST를 정의하고 있다.
변환 과정에 있어 이 둘은 상호호환이 가능하다.

- `mdast` : Markdown의 AST
- `hast` : HTML의 AST

## Markdown → HTML 변환 구현

전체적인 흐름은 다음과 같다.

1. Markdown을 `mdast`로 변환
2. `mdast`를 `hast`로 변환
3. `hast`를 HTML로 변환

다음과 같이 구현할 수 있다.

```bash
npm install unified remark-parse remark-rehype rehype-stringify
```

```javascript
import unified from 'unified';
import remarkParse from 'remark-parse';
import remark2rehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';

export default async function markdownToHtml(markdown) {
  const result = await unified()
    .use(remarkParse)      // markdown -> mdast
    .use(remark2rehype)    // mdast -> hast
    .use(rehypeStringify)  // hast -> html
    .process(markdown);    // 실행
  return result.toString();
}
```

위 코드는 다음과 같이 플러그인을 대체해 구현 할 수 있다.
`Next.js`의 [blog-starter](https://github.com/vercel/next.js/tree/master/examples/blog-starter)는 이 방식을 사용한다.

- `unified`, `remark-parse` -> `remark`
- `remark-rehype`, `remark-stringfy` -> `remark-html`

```bash
npm install remark remark-html
```

```javascript
import remark from 'remark';
import html from 'remark-html';

export default async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}
```

## 참고

- [Next.js のための Remark / Rehype 入門](https://qiita.com/sankentou/items/f8eadb5722f3b39bbbf8)
- [Remark・Rehype を使って Markdown から HTML に変換する](https://neos21.net/blog/2020/11/11-01.html)
- [Introduction to unified](https://unifiedjs.com/learn/guide/introduction-to-unified/)
