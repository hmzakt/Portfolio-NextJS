import About from "@/components/About";
import FeaturedProjects from "@/components/featuredProjects";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <About />
      <FeaturedProjects />
    </div>
  );
}


