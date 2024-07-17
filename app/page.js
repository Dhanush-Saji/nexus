import CursorAnimation from "@/components/cursorAnimation/CursorAnimation";
import HeroSection from "@/components/section/HeroSection/HeroSection";
import FeatureSection from "@/components/section/FeatureSection/FeatureSection";
import Topbar from "@/components/topbar/Topbar";

export default function Home() {
  
  return (
    <>
     <Topbar />
     <CursorAnimation />
    <HeroSection />
    <FeatureSection />
    </>
  );
}
