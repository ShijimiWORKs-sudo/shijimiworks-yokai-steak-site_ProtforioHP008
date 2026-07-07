"use client";

import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 実送信は行いません（ポートフォリオ用のダミー完了表示）
    setSent(true);
  };

  return (
    <section className="section contact" id="contact">
      <div className="container contact__grid">
        <Reveal>
          <p className="eyebrow">Contact / Order</p>
          <h2 className="contact__title">ご相談ください</h2>
          <p className="contact__lead">
            商品の購入、在庫確認、オーダーメイド制作、店舗什器のご相談など、お気軽にお問い合わせください。用途やサイズ、設置場所に合わせて、暮らしに馴染む木工品をご提案します。
          </p>
          <div className="contact__info">
            <div>
              <span>Email</span>
              <p>hello@shijimiworks-woodcraft.example.com</p>
            </div>
            <div>
              <span>Hours</span>
              <p>平日 9:00 – 17:00（工房作業日は返信が遅れることがあります）</p>
            </div>
            <div>
              <span>Shipping</span>
              <p>全国配送 ・ ギフト包装対応</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          {sent ? (
            <div className="form__done" role="status">
              <strong>Thank you.</strong>
              <p>
                お問い合わせありがとうございます。在庫・仕様を確認のうえ、2〜3営業日以内にご返信します。
                <br />
                （こちらはポートフォリオ用のデモ表示です。実際の送信は行われません。）
              </p>
            </div>
          ) : (
            <form className="form" onSubmit={handleSubmit} noValidate>
              <div className="field">
                <label htmlFor="name">
                  お名前 <em>*</em>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="山田 花子"
                />
              </div>
              <div className="field">
                <label htmlFor="email">
                  メールアドレス <em>*</em>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                />
              </div>
              <div className="field">
                <label htmlFor="product">気になる商品名</label>
                <input
                  id="product"
                  name="product"
                  type="text"
                  placeholder="例：山桜のカッティングボード"
                />
              </div>
              <div className="field">
                <label htmlFor="type">相談種別</label>
                <select id="type" name="type" defaultValue="">
                  <option value="" disabled>
                    選択してください
                  </option>
                  <option>商品購入</option>
                  <option>在庫確認</option>
                  <option>オーダーメイド</option>
                  <option>店舗什器相談</option>
                  <option>ギフト相談</option>
                  <option>その他</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="size">希望サイズ</label>
                <input
                  id="size"
                  name="size"
                  type="text"
                  placeholder="例：W600 × D200 × H700mm"
                />
              </div>
              <div className="field">
                <label htmlFor="budget">予算感</label>
                <select id="budget" name="budget" defaultValue="">
                  <option value="" disabled>
                    選択してください
                  </option>
                  <option>〜1万円</option>
                  <option>1〜3万円</option>
                  <option>3〜5万円</option>
                  <option>5〜10万円</option>
                  <option>10万円以上</option>
                  <option>相談したい</option>
                </select>
              </div>
              <div className="field field--full">
                <label htmlFor="region">配送先地域</label>
                <select id="region" name="region" defaultValue="">
                  <option value="" disabled>
                    選択してください
                  </option>
                  <option>北海道・東北</option>
                  <option>関東</option>
                  <option>中部</option>
                  <option>近畿</option>
                  <option>中国・四国</option>
                  <option>九州・沖縄</option>
                </select>
              </div>
              <div className="field field--full">
                <label htmlFor="message">
                  相談内容 <em>*</em>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="ご希望の商品、用途、設置場所、贈り物の場合はお相手のことなど、お気軽にお書きください。"
                />
              </div>
              <div className="form__submit">
                <button type="submit" className="btn">
                  送信する <span className="btn__arrow">→</span>
                </button>
                <span className="form__note">
                  ※ デモ用フォームです。実際の送信は行われません。
                </span>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
