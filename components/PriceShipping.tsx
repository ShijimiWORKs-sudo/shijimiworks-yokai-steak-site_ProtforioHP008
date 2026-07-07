import Reveal from "./Reveal";

function TruckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z" />
      <circle cx="7" cy="18" r="1.8" />
      <circle cx="17.5" cy="18" r="1.8" />
    </svg>
  );
}

function GiftIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="4" y="9" width="16" height="11" rx="1.5" />
      <path d="M12 9v11M4 13h16M12 9c-2 0-4-1-4-3a2 2 0 0 1 4 0M12 9c2 0 4-1 4-3a2 2 0 0 0-4 0" />
    </svg>
  );
}

export default function PriceShipping() {
  return (
    <section className="section section--deep" id="shipping">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Price / Shipping</p>
          <h2 className="section-title">価格と配送について</h2>
          <p className="section-lead">
            商品価格は各商品に記載しています。オーダーメイドは内容に応じた見積り制です。
          </p>
        </Reveal>

        <div className="shipping__grid">
          <Reveal className="shipping-card">
            <h3 className="shipping-card__title">
              <TruckIcon />
              配送料の目安
            </h3>
            <dl className="shipping-card__list">
              <div>
                <dt>小物配送（宅配便）</dt>
                <dd>¥800〜</dd>
              </div>
              <div>
                <dt>家具配送（大型便）</dt>
                <dd>¥3,000〜</dd>
              </div>
              <div>
                <dt>オーダーメイド相談</dt>
                <dd>無料</dd>
              </div>
            </dl>
            <p className="shipping-card__note">
              送料は地域・サイズにより変動します。小物は宅配便、家具は大型配送に対応しています。全国配送可。
            </p>
          </Reveal>

          <Reveal className="shipping-card" delay={100}>
            <h3 className="shipping-card__title">
              <GiftIcon />
              ギフト対応
            </h3>
            <dl className="shipping-card__list">
              <div>
                <dt>ギフト包装</dt>
                <dd>¥500〜</dd>
              </div>
              <div>
                <dt>のし・メッセージカード</dt>
                <dd>無料</dd>
              </div>
              <div>
                <dt>直送（贈り先への配送）</dt>
                <dd>対応可</dd>
              </div>
            </dl>
            <p className="shipping-card__note">
              新築祝い・結婚祝い・誕生日など、贈り物のご相談も承ります。用途に合わせた包装でお届けします。
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
