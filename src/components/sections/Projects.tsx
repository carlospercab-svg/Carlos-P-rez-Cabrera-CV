import { Section } from "@/components/ui/Section";
import { H2, Label, Body } from "@/components/ui/Typography";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { PROJECTS } from "@/data/projects";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export const Projects = () => {
  const { language } = useLanguage();
  const projects = PROJECTS[language];

  return (
    <Section id="projects" className="bg-platinum">
      <div className="max-w-3xl mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Label>02 — {language === 'en' ? 'Impact' : 'Impacto'}</Label>
          <H2>{language === 'en' ? 'Operational Reality.' : 'Realidad Operativa.'}</H2>
          <Body>
            {language === 'en' 
              ? "Real-world solutions designed, built, and implemented to solve actual business problems. I don't just build apps; I build efficiency."
              : "Soluciones reales diseñadas, construidas e implementadas para resolver problemas de negocio reales. No solo creo aplicaciones; creo eficiencia."}
          </Body>
        </motion.div>
      </div>

      <div className="flex flex-col">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
};
