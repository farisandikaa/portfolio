import dynamic from "next/dynamic";

const HeroContent = dynamic(() => import("./HeroContent"), { ssr: false });

export default function Hero() {
  return <HeroContent />;
}
