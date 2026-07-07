const FOOTER_NAV = [
  { href: "#concept", label: "Concept" },
  { href: "#products", label: "Products" },
  { href: "#collection", label: "Collection" },
  { href: "#detail", label: "Product Detail" },
  { href: "#custom", label: "Custom Order" },
  { href: "#workshop", label: "Workshop" },
  { href: "#process", label: "Making Process" },
  { href: "#flow", label: "Order Flow" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <p className="footer__brand-name">ShijimiWORKs Woodcraft</p>
            <p className="footer__brand-tag">
              田舎の小さな木工工房。
              <br />
              暮らしのそばに、木の温度を。
            </p>
          </div>
          <nav className="footer__nav" aria-label="フッターナビゲーション">
            {FOOTER_NAV.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} ShijimiWORKs Woodcraft</span>
          <span>木工工芸と暮らしの道具 ・ Portfolio Sample</span>
        </div>
      </div>
    </footer>
  );
}
