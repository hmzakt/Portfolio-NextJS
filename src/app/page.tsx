import About from "@/components/About";
import FeaturedProjects from "@/components/featuredProjects";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return(
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-whote/[0.02]">
     <HeroSection />
     <About/>
     <FeaturedProjects/>
     
    </main>
  )
}