import Reveal from "./Reveal";

const EXAMPLES = [
  "店舗用ディスプレイ什器",
  "カフェ用トレイ",
  "玄関用ベンチ",
  "オーダーサイズの棚",
  "記念品用木工小物",
  "ギフト用カッティングボード",
];

export default function CustomOrder() {
  return (
    <section className="section section--grain" id="custom">
      <div className="container custom__grid">
        <Reveal className="custom__body">
          <p className="eyebrow">Custom Order</p>
          <h2 className="section-title">
            「ちょうどいい」を、
            <br />
            いっしょに作る。
          </h2>
          <p>
            暮らしの中で「ちょうどいい」と思えるものは、家や使い方によって少しずつ違います。
          </p>
          <p>
            ShijimiWORKsでは、サイズ、素材、用途に合わせたオーダーメイド制作も承っています。店舗什器、小さな家具、贈り物、暮らしの道具など、お気軽にご相談ください。
          </p>
          <div className="hero__actions">
            <a href="#contact" className="btn">
              オーダーを相談する <span className="btn__arrow">→</span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <ul className="custom__list">
            {EXAMPLES.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
