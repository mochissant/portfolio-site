
# ポートフォリオサイト

## プロジェクト構成
```
portfolio-site/
├── app/
│   ├── components/          # コンポーネント
│   │   ├── project-layouts/ # プロジェクト詳細ページのレイアウト
│   │   │   ├── lightriddlefes.tsx  # ライトリドルフェスのレイアウト
│   │   │   ├── maitsuki.tsx       # 毎月謎コンのレイアウト
│   │   │   ├── nazosui.tsx        # ナゾスイのレイアウト
│   │   │   └── towerush.tsx       # TOWERUSHのレイアウト
│   │   ├── Header.tsx      # ヘッダー
│   │   └── Modal.tsx       # メニューモーダル
│   ├── data/               # データ
│   │   ├── projectImages.ts # 画像の設定
│   │   └── projects.ts     # プロジェクトの情報
│   └── work/               # 作品ページ
└── public/                 # 画像ファイル
    └── images/            
```

## 実装の特徴
1. クライアントコンポーネントとして実装
   - `use client` ディレクティブを使用
   - 動的なルーティングパラメータの取得に `useParams` を使用

2. プロジェクトごとのカスタムレイアウト
   - 各プロジェクトに独自のレイアウトファイルを用意
   - 背景色やレイアウトを自由にカスタマイズ可能

3. 画像の取り扱い
   - `projectImages.ts` で一元管理
   - Next.jsの `Image` コンポーネントを使用

## プロジェクトの追加方法
1. 画像の追加
   - `public/images/` に画像ファイルを配置
   - `projectImages.ts` に画像の設定を追加

2. プロジェクト情報の追加
   - `projects.ts` に新しいプロジェクトを追加
   ```typescript
   {
     slug: "project-name",
     title: "プロジェクト名",
     description: "説明",
     tag: ["タグ1", "タグ2"],
     image: projectImages['project-name'],
     layout: "custom",  // または "standard"
     year: 2024,
     month: 1,
     url: "https://project-url.com",
     client: "クライアント名"
   }
   ```

3. カスタムレイアウトの作成（オプション）
   - `components/project-layouts/` に新しいレイアウトファイルを作成
   - 既存のレイアウトファイルを参考に実装

## 注意点
1. StandardLayoutの再実装について
   - 現在の実装では各プロジェクトが独自のレイアウトを持つ
   - StandardLayoutを復活させる場合の課題:
     - 型の問題: Project型とのマッチング
     - 画像の取り扱い: fill propertyとposition指定
     - クライアントコンポーネントの整合性

2. 画像の最適化
   - Next.jsのImage componentを使用する際は、親要素に `position: relative` を設定
   - `fill` プロパティを使用する場合は特に注意

3. パフォーマンス
   - 画像の優先度設定（priority）は適切に使用
   - クライアントサイドのナビゲーションを活用
