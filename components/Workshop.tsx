import Image from "next/image";
import Reveal from "./Reveal";

const FACTS = [
  { dt: "工房の場所", dd: "山と田んぼに囲まれた小さな町（架空の所在地です）" },
  { dt: "使用素材", dd: "山桜・胡桃・楢・栗・楓などの国産広葉樹" },
  {
    dt: "製作の考え方",
    dd: "木目や節、反りを見ながら、ひとつずつ削り、磨き、仕上げる",
  },
  {
    dt: "木材への姿勢",
    dd: "地元の製材所の端材や間伐材も活用し、木を無駄なく使い切る",
  },
];

export default function Workshop() {
  return (
    <section className="section" id="workshop">
      <div className="container workshop__grid">
        <Reveal className="workshop__figures">
          <figure className="workshop__fig--tall">
            <Image
              src="https://images.unsplash.com/photo-1611486212557-88be5ff6f941?auto=format&fit=crop&w=700&q=70"
              alt="工房で製作した木のサイドテーブル。本と道具が並ぶ暮らしの風景。"
              fill
              sizes="(max-width: 840px) 46vw, 22vw"
            />
          </figure>
          <figure className="workshop__fig--sq">
            <Image
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=700&q=70"
              alt="木材や素材のサンプルが並ぶ様子。"
              fill
              sizes="(max-width: 840px) 46vw, 22vw"
            />
          </figure>
          <figure className="workshop__fig--sq">
            <Image
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=700&q=70"
              alt="木の家具が置かれた、落ち着いた室内の一角。"
              fill
              sizes="(max-width: 840px) 46vw, 22vw"
            />
          </figure>
        </Reveal>

        <Reveal className="workshop__body" delay={100}>
          <p className="eyebrow">Workshop</p>
          <h2 className="section-title">
            小さな町の、
            <br />
            小さな工房から。
          </h2>
          <p>ShijimiWORKsの工房は、山と田んぼに囲まれた小さな町にあります。</p>
          <p>
            大きな機械で一気に作るのではなく、木目や節、反りを見ながら、ひとつずつ削り、磨き、仕上げています。
          </p>
          <p>
            素材の癖も、手仕事の跡も、暮らしに馴染む表情として大切にしています。
          </p>

          <dl className="workshop__facts">
            {FACTS.map((f) => (
              <div key={f.dt}>
                <dt>{f.dt}</dt>
                <dd>{f.dd}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
