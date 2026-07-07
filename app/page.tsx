import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Concept from "@/components/Concept";
import Products from "@/components/Products";
import FeaturedCollection from "@/components/FeaturedCollection";
import ProductDetail from "@/components/ProductDetail";
import CustomOrder from "@/components/CustomOrder";
import Workshop from "@/components/Workshop";
import MakingProcess from "@/components/MakingProcess";
import OrderFlow from "@/components/OrderFlow";
import PriceShipping from "@/components/PriceShipping";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Concept />
        <Products />
        <FeaturedCollection />
        <ProductDetail />
        <CustomOrder />
        <Workshop />
        <MakingProcess />
        <OrderFlow />
        <PriceShipping />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
