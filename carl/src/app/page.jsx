import HeroSection from "./components/Hero";
import AboutSection from "./components/About"
//import TechnicalSkillsSection from "./components/Skills"
export default function Home() {
  return (
    <>
      <section className="">
        <HeroSection />
        <AboutSection/>        
      </section>
    </>
  );
}
