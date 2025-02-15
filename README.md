portfolio-site/
├── app/
│   ├── components/          # コンポーネント
│   │   ├── project-layouts/ # プロジェクト詳細ページのレイアウト
│   │   │   ├── StandardLayout.tsx  # 標準レイアウト
│   │   │   └── maitsuki.tsx       # カスタムレイアウト例
│   │   ├── Header.tsx      # ヘッダー
│   │   └── Modal.tsx       # メニューモーダル
│   ├── data/               # データ
│   │   ├── projectImages.ts # 画像の設定
│   │   └── projects.ts     # プロジェクトの情報
│   └── work/               # 作品ページ
├── public/                 # 画像ファイル
│   └── images/            
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

## 編集方法

1. プロジェクトの追加
   - `app/data/projects.ts` に新しいプロジェクトを追加
   - 画像は `public/images/` に配置

2. レイアウトの編集
   - 標準レイアウト: `app/components/project-layouts/StandardLayout.tsx`
   - カスタムレイアウト: `project-layouts/` に新しいファイルを作成

3. スタイルの編集
   - `app/globals.css` でグローバルスタイルを編集
   - コンポーネント内で直接スタイルを編集可能

## 開発の始め方

開発サーバーを起動するには:

```bash
npm run dev