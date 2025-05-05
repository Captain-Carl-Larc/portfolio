import HeroSection from "./components/Hero";
import AboutSection from "./components/About"
import FooterSection from "./components/Footer";
import Skills from "./components/Skills";
import ProjectStatsSection from "./components/statSection";
import ProjectsSection from "./components/projects";
import ContactSection from "./components/contact";
//import TechnicalSkillsSection from "./components/Skills"
export default function Home() {
  return (
    <>
      <section className="">
        <HeroSection />
        <AboutSection/>
        <Skills/>
        <ProjectStatsSection/>
        <ProjectsSection/>
        <ContactSection/>            
      </section>
    </>
  );
}
