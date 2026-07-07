"use client";

import { useEffect, useState } from "react";

const NAV = [
  { href: "#concept", label: "Concept" },
  { href: "#products", label: "Products" },
  { href: "#collection", label: "Collection" },
  { href: "#custom", label: "Custom Order" },
  { href: "#workshop", label: "Workshop" },
  { href: "#flow", label: "Flow" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container header__inner">
        <a href="#top" className="brand" aria-label="ShijimiWORKs Woodcraft ホームへ">
          <span className="brand__name">ShijimiWORKs</span>
          <span className="brand__tag">Woodcraft</span>
        </a>

        <div className="header__right">
          <nav
            className={`nav ${open ? "is-open" : ""}`}
            aria-label="グローバルナビゲーション"
          >
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav__link"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="cart-link"
            aria-label="購入・オーダーの相談へ"
            onClick={() => setOpen(false)}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M6 7h12l-1.2 12.2a1.5 1.5 0 0 1-1.5 1.3H8.7a1.5 1.5 0 0 1-1.5-1.3L6 7Z" />
              <path d="M9 10V6a3 3 0 0 1 6 0v4" />
            </svg>
            Order
          </a>

          <button
            type="button"
            className={`nav__toggle ${open ? "is-open" : ""}`}
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
