import Image from "next/image";
import Reveal from "./Reveal";

const SPECS = [
  { dt: "価格", dd: "12,000円（税込）" },
  { dt: "素材", dd: "山桜（国産材）" },
  { dt: "サイズ", dd: "W320 × D180 × H20mm" },
  { dt: "仕上げ", dd: "食品にも安心なオイル仕上げ" },
  { dt: "納期", dd: "在庫品は5営業日以内に発送、受注製作は3〜4週間" },
  {
    dt: "お手入れ",
    dd: "使用後は水気を拭き取り、風通しの良い場所で乾かしてください。月に一度ほど食用オイルを薄く塗ると、木肌の艶が長持ちします。",
  },
  {
    dt: "配送",
    dd: "全国配送（宅配便）。ギフト包装・のし対応も承ります。",
  },
  {
    dt: "注意事項",
    dd: "天然木のため、木目・色味は一点ずつ異なります。食洗機・電子レンジはご使用いただけません。",
  },
];

export default function ProductDetail() {
  return (
    <section className="section section--alt" id="detail">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Product Detail</p>
          <h2 className="section-title">代表作のご紹介</h2>
        </Reveal>

        <Reveal className="detail" delay={100}>
          <div className="detail__media">
            <span className="detail__label">In Stock</span>
            <Image
              src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=900&q=70"
              alt="野菜がのった木のカッティングボード。日々の台所で使われる一枚板。"
              fill
              sizes="(max-width: 800px) 92vw, 42vw"
            />
          </div>

          <div>
            <span className="detail__cat">Tableware / Kitchen</span>
            <h3 className="detail__name">山桜のカッティングボード</h3>
            <p className="detail__price">
              ¥12,000 <em>（税込）</em>
            </p>
            <p className="detail__desc">
              山桜の一枚板から削り出したカッティングボードです。ほどよい硬さで刃当たりがやさしく、パンや果物をそのまま食卓に出すサービングボードとしても使えます。使い込むほどに色が深まり、台所の景色になじんでいきます。
            </p>

            <dl className="detail__specs">
              {SPECS.map((s) => (
                <div key={s.dt}>
                  <dt>{s.dt}</dt>
                  <dd>{s.dd}</dd>
                </div>
              ))}
            </dl>

            <div className="detail__actions">
              <a href="#contact" className="btn">
                購入を相談する <span className="btn__arrow">→</span>
              </a>
              <a href="#products" className="btn btn--ghost">
                他の商品を見る
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
