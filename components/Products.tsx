"use client";

import { useState } from "react";
import Reveal from "./Reveal";

type Category =
  | "All"
  | "Tableware"
  | "Furniture"
  | "Interior"
  | "Gift"
  | "Order Made"
  | "Shop Display";

type Status = "In Stock" | "Made to Order" | "Sold Out" | "Limited";

type IconName =
  | "board"
  | "plate"
  | "stool"
  | "shelf"
  | "vase"
  | "tray"
  | "key"
  | "chair"
  | "clock"
  | "display";

function ProductIcon({ name }: { name: IconName }) {
  const common = {
    viewBox: "0 0 64 64",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (name) {
    case "board":
      return (
        <svg {...common}>
          <rect x="14" y="10" width="36" height="44" rx="6" />
          <circle cx="32" cy="18" r="2.6" />
          <path d="M22 30h20M22 38h20M22 46h14" opacity="0.6" />
        </svg>
      );
    case "plate":
      return (
        <svg {...common}>
          <ellipse cx="32" cy="34" rx="22" ry="10" />
          <ellipse cx="32" cy="32" rx="22" ry="10" />
          <ellipse cx="32" cy="32" rx="12" ry="5" opacity="0.6" />
        </svg>
      );
    case "stool":
      return (
        <svg {...common}>
          <ellipse cx="32" cy="18" rx="18" ry="6" />
          <path d="M18 20l-4 32M46 20l4 32M32 24v28" />
          <path d="M18 40h28" opacity="0.6" />
        </svg>
      );
    case "shelf":
      return (
        <svg {...common}>
          <rect x="12" y="10" width="40" height="44" rx="3" />
          <path d="M12 25h40M12 40h40" />
          <path d="M20 18v0M20 33v0M20 48v0" opacity="0.6" />
        </svg>
      );
    case "vase":
      return (
        <svg {...common}>
          <path d="M27 10h10M29 10c0 8-7 10-7 20 0 12 4 22 10 22s10-10 10-22c0-10-7-12-7-20" />
          <path d="M32 10V4M32 4c3 0 5-2 8-2M32 6c-2 0-4-2-7-2" opacity="0.7" />
        </svg>
      );
    case "tray":
      return (
        <svg {...common}>
          <rect x="10" y="24" width="44" height="18" rx="4" />
          <path d="M14 24v-4a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v4" opacity="0.6" />
          <path d="M20 33h24" opacity="0.5" />
        </svg>
      );
    case "key":
      return (
        <svg {...common}>
          <ellipse cx="32" cy="36" rx="20" ry="12" />
          <circle cx="26" cy="34" r="3.5" opacity="0.7" />
          <path d="M33 30l8 4-3 3-2-1-2 2-3-2" opacity="0.7" />
        </svg>
      );
    case "chair":
      return (
        <svg {...common}>
          <path d="M20 10v22M20 32h22M42 32V18M20 32l-2 22M42 32l2 22M26 40h12" />
          <path d="M20 14h22" opacity="0.6" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="32" cy="32" r="20" />
          <path d="M32 22v10l7 5" />
          <path d="M32 14v2M32 48v2M14 32h2M48 32h2" opacity="0.6" />
        </svg>
      );
    case "display":
      return (
        <svg {...common}>
          <path d="M12 52h40" />
          <path d="M16 52V30h14v22M34 52V20h14v32" />
          <path d="M20 36h6M38 26h6M38 36h6" opacity="0.6" />
        </svg>
      );
  }
}

type Product = {
  name: string;
  category: Exclude<Category, "All">;
  price: string;
  material: string;
  size: string;
  status: Status;
  desc: string;
  icon: IconName;
  wood: string;
};

const PRODUCTS: Product[] = [
  {
    name: "山桜のカッティングボード",
    category: "Tableware",
    price: "12,000",
    material: "山桜",
    size: "W320 × D180 × H20mm",
    status: "In Stock",
    desc: "毎日の台所仕事が楽しくなる、山桜の一枚板ボード。",
    icon: "board",
    wood: "wood--sakura",
  },
  {
    name: "胡桃の小皿",
    category: "Tableware",
    price: "3,800",
    material: "胡桃",
    size: "φ140 × H25mm",
    status: "In Stock",
    desc: "菓子や果物をのせたい、やわらかな木肌の小皿。",
    icon: "plate",
    wood: "wood--walnut",
  },
  {
    name: "楢のスツール",
    category: "Furniture",
    price: "28,000",
    material: "楢",
    size: "W360 × D280 × H440mm",
    status: "Made to Order",
    desc: "台所にも玄関にも。腰掛けにも踏み台にもなる相棒。",
    icon: "stool",
    wood: "wood--oak",
  },
  {
    name: "栗材の小さな棚",
    category: "Furniture",
    price: "34,000",
    material: "栗",
    size: "W600 × D200 × H700mm",
    status: "Made to Order",
    desc: "本と器と植物を。壁際にすっと収まる小棚。",
    icon: "shelf",
    wood: "wood--chestnut",
  },
  {
    name: "木の一輪挿し",
    category: "Interior",
    price: "4,500",
    material: "楓 / ガラス管",
    size: "φ60 × H160mm",
    status: "Limited",
    desc: "野の花一本がさまになる、小さな景色をつくる器。",
    icon: "vase",
    wood: "wood--maple",
  },
  {
    name: "机の上のペントレイ",
    category: "Interior",
    price: "5,200",
    material: "胡桃",
    size: "W220 × D80 × H20mm",
    status: "In Stock",
    desc: "散らかりがちな机の上に、定位置をひとつ。",
    icon: "tray",
    wood: "wood--walnut",
  },
  {
    name: "玄関用キートレイ",
    category: "Gift",
    price: "4,800",
    material: "山桜",
    size: "W180 × D120 × H30mm",
    status: "In Stock",
    desc: "鍵と時計の帰る場所。新居への贈り物にも。",
    icon: "key",
    wood: "wood--sakura",
  },
  {
    name: "子ども椅子",
    category: "Furniture",
    price: "22,000",
    material: "楢",
    size: "W300 × D280 × H480mm",
    status: "Made to Order",
    desc: "小さな手にも角が当たらない、まるく仕上げた椅子。",
    icon: "chair",
    wood: "wood--oak",
  },
  {
    name: "まるい木の時計",
    category: "Gift",
    price: "9,800",
    material: "楓",
    size: "φ240 × D35mm",
    status: "Sold Out",
    desc: "数字のない静かな文字盤。時間がゆっくり流れます。",
    icon: "clock",
    wood: "wood--maple",
  },
  {
    name: "店舗用ディスプレイ台",
    category: "Shop Display",
    price: "見積り",
    material: "楢 / 栗 ほか",
    size: "サイズオーダー",
    status: "Made to Order",
    desc: "商品が映える高さと奥行きで、店ごとに設計します。",
    icon: "display",
    wood: "wood--dark",
  },
];

const CATEGORIES: Category[] = [
  "All",
  "Tableware",
  "Furniture",
  "Interior",
  "Gift",
  "Shop Display",
];

const STATUS_CLASS: Record<Status, string> = {
  "In Stock": "status--stock",
  "Made to Order": "status--order",
  Limited: "status--limited",
  "Sold Out": "status--sold",
};

export default function Products() {
  const [active, setActive] = useState<Category>("All");

  const shown =
    active === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === active);

  return (
    <section className="section section--alt" id="products">
      <div className="container">
        <Reveal className="head-row">
          <div>
            <p className="eyebrow">Products</p>
            <h2 className="section-title">商品一覧</h2>
          </div>
          <p className="section-lead">
            ひとつずつ工房で製作している木工品です。在庫状況・受注製作の目安は各商品に記載しています。
          </p>
        </Reveal>

        <Reveal className="filter" delay={60}>
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              className={`filter__btn ${active === c ? "is-active" : ""}`}
              aria-pressed={active === c}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </Reveal>

        <div className="products__grid">
          {shown.map((p, i) => (
            <Reveal key={p.name} className="product-card" delay={(i % 4) * 70}>
              <div className="product-card__visual">
                <span
                  className={`product-card__status ${STATUS_CLASS[p.status]}`}
                >
                  {p.status}
                </span>
                <span className={`wood ${p.wood}`} aria-hidden="true" />
                <span className="product-card__icon">
                  <ProductIcon name={p.icon} />
                </span>
              </div>
              <div className="product-card__body">
                <span className="product-card__cat">{p.category}</span>
                <h3 className="product-card__name">{p.name}</h3>
                <p className="product-card__desc">{p.desc}</p>
                <p className="product-card__spec">
                  素材：{p.material}
                  <br />
                  サイズ：{p.size}
                </p>
                <div className="product-card__foot">
                  <span className="product-card__price">
                    {p.price === "見積り" ? (
                      "見積り"
                    ) : (
                      <>
                        ¥{p.price}
                        <em>（税込）</em>
                      </>
                    )}
                  </span>
                  <a
                    href="#contact"
                    className="product-card__link"
                    aria-label={`${p.name} の詳細・購入相談`}
                  >
                    詳細を見る
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
