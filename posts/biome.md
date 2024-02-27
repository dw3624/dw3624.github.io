---
title: Biome
description: Eslint와 Prettier 대신 Biome 사용해보기
date: '2024-01-18'
tags:
  - Biome
published: true
---

`eslint`와 `prettier`를 하나로 합친 듯한 툴 체인.
[공식문서](https://biomejs.dev/)에서는 다음과 같이 소개하고 있다.

> **Biome is a [fast formatter](https://github.com/biomejs/biome/tree/main/benchmark#formatting)** for _JavaScript_, _TypeScript_, _JSX_, and _JSON_ that scores **[97% compatibility with _Prettier_](https://console.algora.io/challenges/prettier)**, **saving CI and developer time**.
>
> Biome can even **format malformed code** as you write it in [your favorite editor](https://biomejs.dev/guides/integrate-in-editor/).

## 설치

프로젝트 디렉토리에 `Biome` 설치

```bash
npm install --save-dev --save-exact @biomejs/biome
```

아래 명령어로 root 디렉토리에 `biome.json` 생성한다.
일반적으로 `package.json`이 있는 디렉토리에 생성한다.

```bash
npx @biomejs/biome init
```

기본값은 다음과 같으며, `linter`와 `formatter`가 적용된다.
`formatter`의 경우 기본적으로 적용이 돼 생략 가능하다.

```json title="biome.json"
{
    "$schema": "https://biomejs.dev/schemas/1.5.2/schema.json",
    "organizeImports": {
        "enabled": false
    },
    "linter": {
        "enabled": true,
        "rules": {
            "recommended": true
        }
    }
}
```

## package.json 수정

`Biome`의 `linter` 및 `formatter`는  CLI로 실행 가능하다.
다음과 같이 `scripts`를 추가한다.
`package.json`에서 실행된 Biome은 해당 디렉토리에서 가장 가까운 `biome.json`를 찾아 적용한다.

```json title="package.json"
"lint": "biome lint -- apply .",
"format": "biome format . --write",
"check": "biome check --apply ."
```

- `format` : `--write` 옵션으로 파일 및 디렉토리를 포매팅
- `lint` : `--apply` 옵션으로 파일 및 디렉토리에 Lint 적용 및 수정 (eslint fix와 동일)
- `check` : `format`, `lint`, `import 정리` 실행

## 적용

`vscode`에서 `Biome`을 사용하려면 `defaultFormatter` 설정을 바꿔야 한다.

1. vscode 확장기능 설치
2. `settings.json` 수정
    - 설정 -> 설정(JSON) 열기

```json title="settings.json"
...
"editor.formatOnSave": true,
"editor.codeActionsOnSave": {
    "quickfix.biome": true,
    "source.organizeImports.biome": true
},
"editor.defaultFormatter": "biomejs.biome",
"[javascript]": {
    "editor.defaultFormatter": "biomejs.biome"
},
...
```

`editor.codeActionsOnSave`에 `quickfix.biome`을 설정해 저장 시 자동수정이 적용된다.
`source.organizeImports.biome`으로 import 정렬이 적용된다.

## Biome 설정 수정

설정 파일을 편집해 적용할 `formatter`와 `linter`를 선택할 수 있다.
`override`로 특정 파일에만 `Biome`을 적용하도록 할 수 있다.
`Next.js`의 경우 `export default`가 필요한 파일이 있기 때문에 해당 파일에 대해서 `noDefaultExport`를 `off`로 설정한다.

```json title="biome.json"
{
  "$schema": "https://biomejs.dev/schemas/1.5.2/schema.json",
  "files": {
    "ignore": ["public"]
  },
  "organizeImports": {
    "enabled": true
  },
  "javascript": {
    "formatter": {
      "quoteStyle": "single",
      "semicolons": "asNeeded"
    }
  },
  "linter": {
    "enabled": true,
    "rules": {
      "all": true,
      "nursery": {
        "noNodejsModules": "off"
      }
    }
  },
  "overrides": [
    {
      "include": [
        "next.config.js",
        "layout.tsx",
        "page.tsx",
        "loading.tsx",
        "error.tsx",
        "not-found.tsx"
      ],
      "linter": {
        "rules": {
          "style": {
            "noDefaultExport": "off"
          }
        }
      }
    }
  ]
}
```

## 내부 구조

### Analyzer

`organizeImports` 기능을 제공한다.
[Biome Analyzer](https://biomejs.dev/analyzer/)

Biome은 기본적으로 거리를 기준으로 정렬한다.

#### Group Import

다음과 같이 import 문에 개행을 넣어 그룹 정렬이 가능하다.

```javascript
// group 1, only these two files will be sorted
import "../styles/reset.css";
import "../styles/layout.css";

// group 2, only this one is sorted
import { Grid } from "../components/Grid.jsx";
```

### Formatter

`formatter` 기능을 제공한다.
[Biome Formatter](https://biomejs.dev/formatter/)

다음과 같은 기본값을 가지며 생략 가능하다.

```json title="biome.json"
{
  "formatter": {
    "enabled": true,
    "formatWithErrors": false,
    "indentStyle": "tab",
    "indentWidth": 2,
    "lineWidth": 80,
    "lineEnding": "lf",
    "ignore": []
  }
}
```

언어별로 설정할 수도 있다. 다음은 JavaScript의 기본 설정.

```json title="biome.json"
{
  "javascript": {
    "formatter": {
      "arrowParentheses":"always",
      "jsxQuoteStyle": "double",
      "semicolons": "always",
      "trailingComma": "all",
      "quoteProperties": "asNeeded",
      "bracketSpacing": true,
      "bracketSameLine": false
    }
  }
}
```

다음과 같이 주석을 추가해 `format`을 무시할 수 있다.

```javascript
// biome-ignore format: <설명>
```

### Linter

`linter` 기능을 제공한다.
[Biome Linter](https://biomejs.dev/linter/)

Biome이 권장하는 기본값이 설정돼 있다.
`error`, `warn`, `off`를 설정해 규칙 적용 방식을 변경할 수 있다.

```json title="biome.json"
{
  "linter": {
    "enabled": true,
    "rules": {
      "style": {
        "useBlockStatements": "error",
        "useShorthandArrayType": "warn",
        "noShoutyConstants": "off"
      }
    }
  }
}
```

다음과 같이 주석을 추가해 `lint`을 무시할 수 있다.

```javascript
// biome-ignore lint: <설명>
// biome-ignore lint/suspicious/noDebugger: <설명>
```

- `biome-ignore`: 무효 주석 시작
- `lint`: `linter` 무효화
- `/suspicious/noDebugger`: 무효화할 규칙의 그룹과 이름 (선택)
- `<explantation>`: 규칙을 무효화하는 이유

### overrides

특정 파일에 대한 Biome 적용 여부를 설정할 수 있다.
[Biome overrides](https://biomejs.dev/reference/configuration/#overrides)

다음은 `overrides`로 설정을 적용한 예시다.
아래에서 `include`로 지정한 패턴에 맞는 파일에 대해서만 해당 `overrides` 규칙을 적용한다.

```json title="biome.json"
"overrides": [
  {
    "include": [
      "next.config.js",
      "layout.tsx",
      "page.tsx",
      "loading.tsx",
      "error.tsx",
      "not-found.tsx"
    ],
    "linter": {
      "rules": {
        "style": {
          "noDefaultExport": "off"
        }
      }
    }
  }
]
```

## 참고

- [Biome](https://biomejs.dev/)
- [Next.js】eslint + pretteirをやめてBiomeにした話](https://zenn.dev/sc30gsw/articles/770144a4aa6797)
