import CursorAnimation from "@/components/cursorAnimation/CursorAnimation";
import HeroSection from "@/components/section/HeroSection/HeroSection";
import FeatureSection from "@/components/section/FeatureSection/FeatureSection";
import Topbar from "@/components/topbar/Topbar";
import SmoothScroll from "@/components/smoothScroll/SmoothScroll";

export default function Home() {
  
  return (
    <>
    <SmoothScroll />
     <Topbar />
     <CursorAnimation />
    <HeroSection />
    <FeatureSection />
    </>
  );
}
