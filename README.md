# ShijimiWORKs Woodcraft — Portfolio HP 008

田舎の小さな木工工房「ShijimiWORKs Woodcraft」の製作販売用EC系ブランドサイト（架空）です。
木の器・家具・生活道具の紹介・販売導線と、オーダーメイド制作・店舗什器の相談導線を
あわせ持つ、手仕事の温かみが伝わるサイトを目的としています。

- **サイト名**: ShijimiWORKs Woodcraft
- **管理番号**: 008
- **サイト種別**: 製作会社用HP（木工工芸のEC系・集客サイト）
- **GitHubリポジトリ**: https://github.com/ShijimiWORKs-sudo/shijimiworks-yokai-steak-site_ProtforioHP008

---

## サイト概要

1ページ完結型のEC系ブランドサイトです。実際の決済機能・カート機能は持たず、
EC風のUI（商品一覧カード・カテゴリフィルター・在庫ステータス・商品詳細・配送/ギフト情報）で
「EC系サイトを制作できること」を示すポートフォリオとして構成しています。
商品購入・在庫確認・オーダーメイド・店舗什器の相談は、Contactフォームへ導線を集約しています。

## 使用技術

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**（strict モード）
- **CSS**: `app/globals.css`（木の質感を意識したデザインシステムをCSS変数で管理）
- カテゴリフィルター: Reactクライアントコンポーネント（`components/Products.tsx`）
- スクロール演出: `IntersectionObserver`（`components/Reveal.tsx`、`prefers-reduced-motion` に配慮）
- レスポンシブ対応（PC / タブレット / スマホ 375px）
- 画像最適化: `next/image`
- 商品ビジュアル: **CSS木目グラデーション + 自作SVGラインイラスト**（実在ブランド商品写真は不使用）

## セクション構成

| # | セクション | 内容 |
|---|-----------|------|
| 1 | Hero | キャッチコピー・CTA（商品を見る / オーダー相談する）・対応バッジ |
| 2 | Concept | 工房の考え方 |
| 3 | Products | 商品10点のEC風一覧（カテゴリフィルター・価格・素材・サイズ・在庫ステータス・詳細ボタン） |
| 4 | Featured Collection | 3コレクション（Kitchen Tools / Small Furniture / Gift Selection）画像・価格帯・CTA |
| 5 | Product Detail | 代表商品「山桜のカッティングボード」の商品詳細風表示（仕上げ・納期・お手入れ・配送・注意事項） |
| 6 | Custom Order | オーダーメイド相談導線とオーダー例6種 |
| 7 | Workshop | 工房紹介（写真・使用素材・製作の考え方・木材利用の姿勢） |
| 8 | Making Process | 製作工程8ステップ |
| 9 | Order Flow | 購入・オーダーの流れ8ステップ |
| 10 | Price / Shipping | 配送料の目安・ギフト対応 |
| 11 | FAQ | よくあるご質問9件（アコーディオン） |
| 12 | Contact / Order | 問い合わせフォームUI（相談種別・配送先地域など。ダミー完了表示、実送信なし） |

グローバルナビはページ内アンカーリンク（Concept / Products / Collection / Custom Order / Workshop / Flow / FAQ / Contact）。
ヘッダー右には**カート風の「Order」ボタン**（問い合わせ導線）を配置。

## コンポーネント構成

```
app/
  layout.tsx      … メタデータ・OGP・全体レイアウト
  page.tsx        … 各セクションの組み立て
  globals.css     … デザインシステム / 全スタイル
  icon.svg        … ファビコン（自作SVG）
components/
  Header / Hero / Concept / Products / FeaturedCollection /
  ProductDetail / CustomOrder / Workshop / MakingProcess /
  OrderFlow / PriceShipping / FAQ / Contact / Footer / Reveal
public/
  og.svg          … OGP画像（自作SVG）
```

---

## 画像・イラスト素材の出典と商用利用可否

### 写真素材（Unsplash）

Hero・Concept・Featured Collection・Product Detail・Workshop の写真は **Unsplash** の素材を使用しています。

- **出典サイト**: https://unsplash.com/
- **ライセンス**: Unsplash License
- **ライセンス確認先URL**: https://unsplash.com/license
- **商用利用**: ✅ 可（無料・商用利用可・帰属表示は任意）

使用画像URL一覧：

| 用途 | 画像URL |
|------|---------|
| Hero（木の一輪挿し） | https://images.unsplash.com/photo-1584589167171-541ce45f1eea |
| Concept（木のデスクのある室内） | https://images.unsplash.com/photo-1524758631624-e2822e304c36 |
| Collection: Kitchen Tools / Product Detail（木のカッティングボード） | https://images.unsplash.com/photo-1466637574441-749b8f19452f |
| Collection: Small Furniture | https://images.unsplash.com/photo-1567016432779-094069958ea5 |
| Collection: Gift Selection | https://images.unsplash.com/photo-1513201099705-a9746e1e201f |
| Workshop（木のサイドテーブル） | https://images.unsplash.com/photo-1611486212557-88be5ff6f941 |
| Workshop（素材サンプル） | https://images.unsplash.com/photo-1513694203232-719a280e022f |
| Workshop（木の家具のある室内） | https://images.unsplash.com/photo-1616486338812-3dadae4b4ace |

> Unsplash License は商用・非商用ともに無料で利用でき、帰属表示は任意です。
> 人物・実在ブランド商品・商標が主題となる写真は避け、台所・室内・道具などの
> 風景写真を選定しています。

### 自作素材（第三者素材なし）

以下は第三者素材を使わず、CSS・SVGで自作しているため **商用利用可**（著作権・商標上の懸念なし）です。

- **Products の商品ビジュアル10点**: CSS木目グラデーション + 自作SVGラインイラスト（ボード・皿・スツール・棚・一輪挿し・トレイ・キートレイ・椅子・時計・什器）
- ヘッダーのカート風アイコン、配送/ギフトアイコン（自作インラインSVG）
- OGP画像 `public/og.svg`（自作SVG）
- ファビコン `app/icon.svg`（自作SVG）
- 背景の木目風テクスチャ（CSS repeating-linear-gradient）

### 素材利用に関する確認結果

- 参考サイト（mimasakuseisaku.com）の画像・写真・文章・ロゴ・会社情報は一切使用していません。
- 掲載している商品名・価格・工房情報・実績はすべて架空の新規作成です。
- 実在ブランドの商品写真は使用していません。
- 使用素材はすべて商用利用可能な無料素材、または自作素材です。
- ライセンスが曖昧な素材は使用していません。

---

## セットアップ

### 必要環境
- Node.js 18.17 以上（推奨: 20 以上）

### インストール
```bash
npm install
```

### 起動方法（開発サーバー）
```bash
npm run dev
# http://localhost:3000
```

### 型チェック
```bash
npm run typecheck
```

### ビルド方法
```bash
npm run build
npm run start   # 本番サーバー起動
```

Windows で `npm` が使えない場合は `npm.cmd` に読み替えてください。

---

## アクセシビリティ / SEO

- 適切な見出し階層（h1 → h2 → h3）
- 画像の `alt` 属性、装飾的な木目ビジュアル・アイコンは `aria-hidden`
- 在庫ステータスは色だけでなくテキストラベル（In Stock / Made to Order / Limited / Sold Out）で区別
- カテゴリフィルターは `aria-pressed` で状態を明示
- フォームは `label` と入力を紐付け、必須項目を明示
- キーボード操作対応、`:focus-visible` のフォーカスリング、本文スキップリンク
- `prefers-reduced-motion` でアニメーションを無効化
- `title` / `description` / OGP / Twitter Card を `app/layout.tsx` に設定

---

## ライセンス / 注意

本サイトはポートフォリオ掲載用に制作した架空のサンプルです。
掲載している工房・商品・価格・連絡先はすべて架空のもので、実際の販売は行っていません。
