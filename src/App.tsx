import { HelmetProvider } from "react-helmet-async";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Athletics } from "@/components/sections/Athletics";
import { Contact } from "@/components/sections/Contact";
import { SEO } from "@/components/ui/SEO";
import { LanguageProvider } from "@/context/LanguageContext";

function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-platinum selection:bg-asphalt selection:text-platinum">
          <SEO />
          <Navbar />
          
          <main>
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Skills />
            <Athletics />
            <Contact />
          </main>

          <Footer />
        </div>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;
