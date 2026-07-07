import Image from "next/image";
import Reveal from "./Reveal";

export default function Concept() {
  return (
    <section className="section section--grain" id="concept">
      <div className="container concept__grid">
        <Reveal className="concept__body">
          <p className="eyebrow">Concept</p>
          <h2 className="section-title">
            使うほどに、
            <br />
            暮らしの記録になる。
          </h2>
          <p className="concept__lead">木は、使うほどに表情が変わります。</p>
          <p>
            手に触れるたび、少しずつ色が深まり、傷も跡も、その人の暮らしの記録になります。
          </p>
          <p>
            ShijimiWORKs
            Woodcraftは、田舎の小さな工房で、木の器、家具、生活道具を製作しています。大量生産ではなく、暮らしの中で長く使えるものを、素材の表情を見ながらひとつずつ形にします。
          </p>
        </Reveal>

        <Reveal className="concept__figure" delay={120}>
          <Image
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=70"
            alt="木目の美しいデスクと椅子。暮らしに馴染む木の家具のある室内。"
            fill
            sizes="(max-width: 840px) 92vw, 44vw"
          />
        </Reveal>
      </div>
    </section>
  );
}
