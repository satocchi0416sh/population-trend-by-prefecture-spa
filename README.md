# CensusFlow
~ 都道府県別の総人口推移グラフを表示するSPA ~

<div id="top"></div>

## 使用技術一覧

<p align="center">
  <img src="https://img.shields.io/badge/-Next.js-000000.svg?logo=next.js&style=for-the-badge">
  <img src="https://img.shields.io/badge/-TailwindCSS-000000.svg?logo=tailwindcss&style=for-the-badge">
  <img src="https://img.shields.io/badge/-React-61DAFB.svg?logo=react&style=for-the-badge">
  <img src="https://img.shields.io/badge/-TypeScript-007ACC.svg?logo=typescript&style=for-the-badge">
</p>

## 目次

1. [プロジェクトについて](#プロジェクトについて)
2. [環境](#環境)
3. [ディレクトリ構成](#ディレクトリ構成)
4. [開発環境構築](#開発環境構築)
5. [環境変数の一覧](#環境変数の一覧)
6. [公開リンク](#公開リンク)
7. [使用ツール](#使用ツール)
8. [参考記事・リポジトリ](#参考記事・リポジトリ)

## プロジェクトについて

CensusFlowは、React、Next.js、TailwindCSS、TypeScriptを使用して構築された、都道府県別の総人口推移グラフを表示するシングルページアプリケーション（SPA）です。このプロジェクトは、主にフロントエンドの技術習得を目的としています。

<p align="center">
  <a href="https://population-trend-by-prefecture-spa.vercel.app/"><strong>デモを見る »</strong></a>
  <br />
  <br />
  <a href="https://yumemi.notion.site/0e9ef27b55704d7882aab55cc86c999d"><strong>プロジェクト詳細 »</strong></a>
</p>

<p align="right">(<a href="#top">トップへ</a>)</p>

## 環境

| 言語・フレームワーク  | バージョン     |
| --------------------- | ------------- |
| Node.js               | 20.0.0 (推定) |
| Next.js               | 14.2.5        |
| React                 | ^18           |
| React DOM             | ^18           |
| TypeScript            | ^5            |

<p align="right">(<a href="#top">トップへ</a>)</p>

## ディレクトリ構成

```plaintext
├── .env.local
├── .env.test
├── .eslintrc.json
├── .gitignore
├── README.md
├── __mocks__
│   └── fileMock.js
├── app
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── AppBar.tsx
│   ├── BottomDrawer.tsx
│   ├── BottomDrawerButton.tsx
│   ├── Sidebar.tsx
│   ├── SkeletonLoader.tsx
│   └── index.ts
├── constants
│   └── index.ts
├── feature
│   ├── populations
│   └── prefectures
├── hooks
│   ├── __tests__
│   ├── index.ts
│   ├── useApi.ts
│   └── useBottomDrawer.ts
├── jest.config.js
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public
│   ├── chart.jpg
│   ├── chevron-left.svg
│   ├── index.ts
│   ├── next.svg
│   └── vercel.svg
├── tailwind.config.ts
├── tsconfig.json
├── types
│   ├── Api.ts
│   ├── Population.ts
│   ├── Prefecture.ts
│   └── index.ts
├── utils
│   └── apiClient.ts
└── yarn.lock
```

<p align="right">(<a href="#top">トップへ</a>)</p>

## 開発環境構築

まず、`.env` ファイルを以下の環境変数例をもとに作成します。

.env
```
NEXT_PUBLIC_RESAS_API_KEY=your_api_key
NEXT_PUBLIC_RESAS_API_BASE_URL=https://api.resas-portal.go.jp/
```

その後、以下のコマンドを使用して開発サーバーを起動します。

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

<p align="right">(<a href="#top">トップへ</a>)</p>

## 環境変数の一覧

- `NEXT_PUBLIC_RESAS_API_KEY`: RESAS APIのアクセスキー
- `NEXT_PUBLIC_RESAS_API_BASE_URL`: RESAS APIのベースURL

<p align="right">(<a href="#top">トップへ</a>)</p>

## 公開リンク

Vercel上にデプロイされています。以下のリンクからご覧ください。
[CensusFlow](https://population-trend-by-prefecture-spa.vercel.app/)

<p align="right">(<a href="#top">トップへ</a>)</p>

Here are the reformatted sections with enhanced styling and clarity:

---

## 使用ツール

### UI/UX デザイン

- **Figma**  
  Figmaを使用してUI/UXデザインを作成しています。詳細は以下のリンクからご覧ください。  
  [Figmaデザインリンク](https://www.figma.com/design/gVQa57almh9tiGDt1HICfB/%E3%82%86%E3%82%81%E3%81%BF%E3%83%91%E3%82%B9%E3%83%9D%E3%83%BC%E3%83%88%E3%82%B3%E3%83%BC%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0%E3%83%86%E3%82%B9%E3%83%88?node-id=0-1&t=vcOhJvpMv6d0U7F7-1)

### プロジェクト管理

- **Linear**  
  プロジェクト管理にはLinearを使用しています。

### AIツール

- **ChatGPT**  
  コード生成、テストコード生成、README.mdの修正に利用しています。

- **GitHub Copilot**  
  コード生成を支援するツールとして使用しています。

- **Cursol**  
  コード生成とテストコード生成のために使用しています。

<p align="right">(<a href="#top">トップへ</a>)</p>

## 参考記事・リポジトリ

以下のリンクは、プロジェクト開発に役立った参考資料やリポジトリです。

- [React 18 Upgrade Guide](https://react.dev/blog/2022/03/08/react-18-upgrade-guide#updates-to-client-rendering-apis)
- [記事: React 18の導入](https://qiita.com/masakiwakabayashi/items/204ed2b32254bbc9a5c1)
- [記事: フロントエンドのベストプラクティス](https://qiita.com/cheez921/items/a5168e4e5057c8faa897)
- [記事: TypeScriptの高度な型定義](https://qiita.com/cheez921/items/cd7d1d47287a35aa6723)
- [Zenn記事: Reactのモダンなパターン](https://zenn.dev/yuyan/articles/9091fb1549c295)
- [Zenn記事: Next.jsの最新機能](https://zenn.dev/k_kazukiiiiii/articles/9f48bdd20435d2)
- [記事: テスト戦略の考察](https://qiita.com/mamimami0709/items/603c6ea9f9bfa68461f9)
- [リポジトリ: Bulletproof React](https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md)

<p align="right">(<a href="#top">トップへ</a>)</p>
