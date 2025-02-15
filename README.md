
# ポートフォリオサイト

このプロジェクトは[Next.js](https://nextjs.org)を使用して作られたポートフォリオサイトです。

## プロジェクト構造

```
portfolio-site/
├── app/                      # メインアプリケーションディレクトリ
│   ├── components/          # 再利用可能なコンポーネント
│   │   ├── project-layouts/ # プロジェクト詳細ページのレイアウト
│   │   │   ├── CustomLayout.tsx
│   │   │   ├── StandardLayout.tsx
│   │   │   └── maitsuki.tsx
│   │   ├── Header.tsx      # サイトヘッダー
│   │   └── Modal.tsx       # ナビゲーションモーダル
│   ├── data/               # データ関連ファイル
│   │   ├── projectImages.ts # プロジェクト画像の管理
│   │   └── projects.ts     # プロジェクトデータの定義
│   ├── pages/              # ページコンポーネント
│   │   ├── HomepageContent.tsx
│   │   ├── ProjectDetail.tsx
│   │   └── ProjectsList.tsx
│   ├── work/               # 作品ページのルート
│   │   ├── [projectId]/
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── favicon.ico
│   ├── globals.css         # グローバルスタイル
│   ├── layout.tsx          # ルートレイアウト
│   └── page.tsx           # ホームページ
├── public/                 # 静的ファイル
│   └── images/            # プロジェクト画像
│       ├── IMG_3895.jpeg
│       ├── K2-10th.jpg
│       ├── TOWERUSH.jpg
│       ├── lightriddlefes.jpg
│       ├── maitsuki.jpg
│       └── nazosui.jpg
└── system/                # システムファイル（編集禁止）
    ├── .gitignore
    ├── .replit
    ├── eslint.config.mjs
    ├── next-env.d.ts
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.mjs
    ├── tailwind.config.ts
    └── tsconfig.json
```

## 開発の始め方

開発サーバーを起動するには:

```bash
npm run dev
```

ブラウザで [http://0.0.0.0:3000](http://0.0.0.0:3000) を開いてください。
