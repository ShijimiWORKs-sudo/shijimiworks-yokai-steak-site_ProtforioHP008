"use client";

import { useRef, useState } from "react";
import Reveal from "./Reveal";

const FAQS = [
  {
    q: "商品は購入できますか？",
    a: "はい。お問い合わせフォームからご希望の商品をお知らせください。在庫・送料を確認のうえ、お支払い方法とあわせてご案内します。（本サイトはポートフォリオ用のサンプルのため、実際の販売は行っていません。）",
  },
  {
    q: "オーダーメイドはできますか？",
    a: "はい。サイズ・素材・用途に合わせたオーダーメイド制作を承っています。設置場所の写真や寸法をお知らせいただけると、より具体的なご提案ができます。",
  },
  {
    q: "木材の種類は選べますか？",
    a: "はい。山桜・胡桃・楢・栗・楓など、在庫のある木材からお選びいただけます。木目や色味のご希望もお聞かせください。",
  },
  {
    q: "サイズ変更はできますか？",
    a: "はい。定番商品も、幅・奥行き・高さの変更が可能です。内容により価格と納期が変わりますので、お見積りでご確認ください。",
  },
  {
    q: "ギフト包装はできますか？",
    a: "はい。ギフト包装（500円〜）、のし・メッセージカード（無料）に対応しています。贈り先への直送も可能です。",
  },
  {
    q: "配送は全国対応ですか？",
    a: "はい、全国に配送しています。小物は宅配便、家具などの大きなものは大型配送でお届けします。送料は地域とサイズにより変動します。",
  },
  {
    q: "木製品のお手入れ方法を教えてもらえますか？",
    a: "はい。商品お届け時にお手入れ方法の案内を同封しています。基本は、使用後に水気を拭き取り、風通しの良い場所で乾燥。定期的に食用オイルを塗ると長持ちします。",
  },
  {
    q: "店舗什器の相談もできますか？",
    a: "はい。カフェ・雑貨店・ギャラリーなどのディスプレイ台や什器の製作も承っています。店舗の雰囲気や商品に合わせてご提案します。",
  },
  {
    q: "返品・交換はできますか？",
    a: "商品到着後7日以内で、未使用の場合に限りご相談ください。破損・不良があった場合は、送料当方負担で交換いたします。オーダーメイド品の返品はご容赦ください。",
  },
];

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  const answerRef = useRef<HTMLDivElement | null>(null);
  const panelId = `faq-panel-${index}`;
  const btnId = `faq-btn-${index}`;

  return (
    <div className={`faq-item ${open ? "is-open" : ""}`}>
      <button
        type="button"
        id={btnId}
        className="faq-item__q"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        {q}
        <span className="faq-item__icon" aria-hidden="true" />
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        className="faq-item__a"
        ref={answerRef}
        style={{
          maxHeight: open ? `${answerRef.current?.scrollHeight ?? 400}px` : 0,
        }}
      >
        <p>{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="section" id="faq">
      <div className="container">
        <Reveal>
          <p className="eyebrow">FAQ</p>
          <h2 className="section-title">よくあるご質問</h2>
        </Reveal>

        <Reveal className="faq__list" delay={80}>
          {FAQS.map((item, i) => (
            <FaqItem key={item.q} q={item.q} a={item.a} index={i} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
