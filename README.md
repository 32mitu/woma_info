# WOMA ウェブ紹介ページ

> がんばらなくても、つづくよ。

りすのあもう（amow）と一緒に、自分のペースでゆるく運動を記録するアプリ「WOMA」の紹介ページ。

## セットアップ

```bash
cd C:\dev\woma_info
npm install
npm run dev
```

ブラウザで `http://localhost:5173` を開く。

## ビルド（本番用）

```bash
npm run build
```

`dist/` フォルダに静的ファイルが出力されます。

## プロジェクト構成

```
woma_info/
├── index.html              # エントリーHTML（OGP・meta設定済み）
├── package.json
├── vite.config.js
├── public/
│   └── favicon.svg         # ファビコン
└── src/
    ├── main.jsx            # Reactエントリー
    ├── App.jsx             # ランディングページ全体
    ├── components/
    │   └── ui.jsx          # 共通UIコンポーネント
    ├── styles/
    │   └── global.css      # CSS変数・アニメーション・グローバルスタイル
    └── assets/             # ★ デザイナー作成の画像をここに配置
        └── (amow.png, app-screenshot.png など)
```

## デザイナー向け：画像差し替え手順

プレースホルダー（点線の丸・四角）になっている箇所を実画像に差し替えてください。

### 1. amowイラスト

`src/components/ui.jsx` の `AmowPlaceholder` を以下のように差し替え：

```jsx
// Before
export function AmowPlaceholder({ size = 120 }) {
  return <div style={{ ... }}>🐿️</div>
}

// After
import amowImg from '../assets/amow.png'
export function AmowPlaceholder({ size = 120 }) {
  return <img src={amowImg} width={size} height={size} alt="あもう" style={{ borderRadius: '50%' }} />
}
```

### 2. アプリ画面モックアップ

同ファイルの `PhoneMockup` を差し替え：

```jsx
import appScreenshot from '../assets/app-screenshot.png'
export function PhoneMockup() {
  return <img src={appScreenshot} width={260} alt="WOMAアプリ画面" style={{ borderRadius: 36 }} />
}
```

## カラーパレット（ガイドライン準拠）

| 名前 | HEX | 用途 |
|------|---------|------|
| Pink | `#f3a8bb` | メインアクセント |
| Light Pink | `#fae1e7` | 背景・カードアクセント |
| Blue | `#93c2e8` | セカンドアクセント（補色） |
| Cream | `#fdfbf0` | ベース背景 |
| Navy | `#30324f` | テキスト・ストアバッジ |

CSS変数として `var(--pink)`, `var(--blue)` 等で参照可能。
