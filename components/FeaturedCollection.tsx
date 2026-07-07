import Image from "next/image";
import Reveal from "./Reveal";

const COLLECTIONS = [
  {
    title: "Kitchen Tools",
    jp: "台所で使える木の道具",
    desc: "カッティングボード、小皿、トレイなど。毎日の台所仕事にそっと寄り添う道具たち。",
    range: "¥3,800 – ¥15,000",
    img: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=900&q=70",
    alt: "木のボードや道具が並ぶ、あたたかい雰囲気の台所の作業台。",
  },
  {
    title: "Small Furniture",
    jp: "暮らしに置ける小さな家具",
    desc: "スツール、小棚、サイドテーブルなど。部屋の景色になじむ、ちいさな家具。",
    range: "¥22,000 – ¥60,000",
    img: "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=900&q=70",
    alt: "木の家具が置かれた、自然光の入る明るいリビング。",
  },
  {
    title: "Gift Selection",
    jp: "贈り物にえらぶ木工品",
    desc: "新築祝い、結婚祝い、誕生日に。名入れやギフト包装にも対応します。",
    range: "¥3,800 – ¥12,000",
    img: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=900&q=70",
    alt: "クラフト紙で包まれた贈り物の箱。あたたかみのあるギフトのイメージ。",
  },
];

export default function FeaturedCollection() {
  return (
    <section className="section" id="collection">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Featured Collection</p>
          <h2 className="section-title">えらびかたで、えらぶ。</h2>
          <p className="section-lead">
            使う場所、贈る相手に合わせて。3つのコレクションからお選びいただけます。
          </p>
        </Reveal>

        <div className="collections__grid">
          {COLLECTIONS.map((c, i) => (
            <Reveal key={c.title} className="collection-card" delay={i * 100}>
              <div className="collection-card__media">
                <Image
                  src={c.img}
                  alt={c.alt}
                  fill
                  sizes="(max-width: 860px) 92vw, 30vw"
                />
              </div>
              <div className="collection-card__body">
                <h3 className="collection-card__title">{c.title}</h3>
                <p className="collection-card__jp">{c.jp}</p>
                <p className="collection-card__desc">{c.desc}</p>
                <p className="collection-card__range">価格帯：{c.range}</p>
                <div className="collection-card__actions">
                  <a href="#products" className="btn">
                    この商品を見る
                  </a>
                  <a href="#contact" className="btn btn--ghost">
                    相談する
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
