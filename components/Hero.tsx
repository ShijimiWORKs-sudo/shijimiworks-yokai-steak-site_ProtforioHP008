import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__grid">
        <div>
          <p className="hero__eyebrow">ShijimiWORKs Woodcraft</p>
          <h1 className="hero__title">
            暮らしのそばに、
            <br />
            木の温度を。
          </h1>
          <p className="hero__sub">
            田舎の小さな工房から、木の器、家具、生活道具をひとつずつ製作しています。日々の暮らしに静かに馴染む、長く使える木工品をお届けします。
          </p>
          <div className="hero__actions">
            <a href="#products" className="btn">
              商品を見る <span className="btn__arrow">→</span>
            </a>
            <a href="#contact" className="btn btn--ghost">
              オーダー相談する
            </a>
          </div>
          <div className="hero__badges">
            <span>一点ずつ手仕事</span>
            <span>オーダーメイド対応</span>
            <span>ギフト包装可</span>
            <span>全国配送</span>
          </div>
        </div>

        <div className="hero__photo">
          <Image
            src="https://images.unsplash.com/photo-1584589167171-541ce45f1eea?auto=format&fit=crop&w=1000&q=70"
            alt="白い空間に置かれた、木の一輪挿しとみどりの葉。工房でつくる木の生活道具。"
            fill
            sizes="(max-width: 880px) 92vw, 46vw"
            priority
          />
          <div className="hero__card">
            <p>木の器・家具・生活道具</p>
            <span>Handmade in Japan</span>
          </div>
        </div>
      </div>
    </section>
  );
}
