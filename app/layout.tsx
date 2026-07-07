import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://shijimiworks-woodcraft.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "ShijimiWORKs Woodcraft | 木工工芸と暮らしの道具",
  description:
    "ShijimiWORKs Woodcraftは、田舎の小さな工房で木の器、家具、生活道具を製作販売する木工工芸ブランドです。商品購入、オーダーメイド、店舗什器の相談を承ります。",
  keywords: [
    "木工",
    "木工工芸",
    "木の器",
    "カッティングボード",
    "オーダーメイド家具",
    "木製家具",
    "生活道具",
    "店舗什器",
    "ギフト",
    "ShijimiWORKs",
  ],
  authors: [{ name: "ShijimiWORKs" }],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    siteName: "ShijimiWORKs Woodcraft",
    title: "ShijimiWORKs Woodcraft | 木工工芸と暮らしの道具",
    description:
      "田舎の小さな工房から、木の器、家具、生活道具をひとつずつ製作しています。商品購入、オーダーメイド、店舗什器の相談を承ります。",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "ShijimiWORKs Woodcraft — 木工工芸と暮らしの道具",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ShijimiWORKs Woodcraft | 木工工芸と暮らしの道具",
    description:
      "田舎の小さな工房から、木の器、家具、生活道具をひとつずつ製作しています。",
    images: ["/og.svg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f8f5ee",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <a className="skip-link" href="#main">
          本文へスキップ
        </a>
        {children}
      </body>
    </html>
  );
}
