import Reveal from "./Reveal";

const STEPS = [
  { title: "商品を選ぶ", desc: "商品一覧やコレクションからお選びください。" },
  { title: "在庫・仕様確認", desc: "在庫やサイズ・木材の希望を確認します。" },
  { title: "お見積り", desc: "送料やオーダー内容を含めてご案内します。" },
  { title: "お支払い", desc: "銀行振込などでお支払いいただきます。" },
  { title: "製作・発送準備", desc: "受注品は製作、在庫品は検品を行います。" },
  { title: "梱包", desc: "傷がつかないよう、一点ずつ丁寧に包みます。" },
  { title: "発送", desc: "宅配便・大型配送でお届けします。" },
  { title: "使い方案内", desc: "お手入れ方法を添えて、長く使うお手伝いを。" },
];

export default function OrderFlow() {
  return (
    <section className="section" id="flow">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Order Flow</p>
          <h2 className="section-title">購入・オーダーの流れ</h2>
          <p className="section-lead">
            ご注文からお届けまで、8つのステップで進めます。オーダーメイドも同じ流れでご相談いただけます。
          </p>
        </Reveal>

        <div className="steps">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} className="step" delay={(i % 4) * 70}>
              <span className="step__num">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="step__title">{s.title}</h3>
              <p className="step__desc">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
