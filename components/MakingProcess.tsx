import Reveal from "./Reveal";

const STEPS = [
  { title: "木材選び", desc: "木目・節・反りを見て、用途に合う板を選びます。" },
  { title: "荒取り", desc: "大まかな形に切り出し、木を落ち着かせます。" },
  { title: "形づくり", desc: "鉋や刃物で、少しずつ形を整えていきます。" },
  { title: "研磨", desc: "番手を変えながら、手触りよく磨き上げます。" },
  { title: "オイル仕上げ", desc: "食品にも安心なオイルで木肌を保護します。" },
  { title: "乾燥", desc: "風通しの良い場所でゆっくり乾かします。" },
  { title: "検品", desc: "手触り・がたつき・仕上がりを一点ずつ確認します。" },
  { title: "梱包・発送", desc: "緩衝材で丁寧に包み、お手元へ届けます。" },
];

export default function MakingProcess() {
  return (
    <section className="section section--alt" id="process">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Making Process</p>
          <h2 className="section-title">製作の工程</h2>
          <p className="section-lead">
            一枚の板が暮らしの道具になるまで。8つの工程を、ひとつの工房の中で行っています。
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
