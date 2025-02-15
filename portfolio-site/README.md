
# ポートフォリオサイト

このプロジェクトは[Next.js](https://nextjs.org)を使用して作られたポートフォリオサイトです。

## プロジェクト構造

```
portfolio-site/
├── app/                      # メインアプリケーションディレクトリ
│   ├── components/           # 再利用可能なコンポーネント
│   │   ├── project-layouts/  # プロジェクト詳細ページのレイアウト
│   │   ├── Header.tsx       # サイトヘッダー
│   │   └── Modal.tsx        # ナビゲーションモーダル
│   ├── data/                # データ関連ファイル
│   │   ├── projectImages.ts # プロジェクト画像の管理
│   │   └── projects.ts      # プロジェクトデータの定義
│   ├── pages/               # ページコンポーネント
│   │   ├── HomepageContent  # ホームページ
│   │   ├── ProjectDetail    # プロジェクト詳細
│   │   └── ProjectsList     # プロジェクト一覧
│   └── work/                # 作品ページのルート
└── public/                  # 静的ファイル
    └── images/              # プロジェクト画像
```

## 開発の始め方

開発サーバーを起動するには:

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

## 主要コンポーネント

- `HomepageContent.tsx`: サイトのメインページ
- `ProjectDetail.tsx`: 個別のプロジェクト詳細ページ
- `ProjectsList.tsx`: プロジェクト一覧ページ
- `Header.tsx`: サイト共通のヘッダー
- `Modal.tsx`: ナビゲーションメニュー
- `StandardLayout.tsx`: 標準プロジェクトレイアウト
- `CustomLayout.tsx`: カスタムプロジェクトレイアウト
