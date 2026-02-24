import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { H2, Label } from "@/components/ui/Typography";
import { SKILLS } from "@/data/skills";
import { Badge } from "@/components/ui/Badge";
import { useLanguage } from "@/context/LanguageContext";

export const Skills = () => {
  const { language } = useLanguage();
  const skills = SKILLS[language];

  return (
    <Section id="skills" className="bg-surface">
      <div className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Label>05 — {language === 'en' ? 'Toolkit' : 'Herramientas'}</Label>
          <H2>{language === 'en' ? 'Technical & Operational Stack' : 'Stack Técnico y Operativo'}</H2>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {skills.map((group, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <h3 className="text-sm font-bold uppercase tracking-widest text-asphalt mb-6 border-b border-border pb-2">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, i) => (
                <Badge 
                  key={i} 
                  variant="outline" 
                  className="py-2 px-4 text-sm border-border text-asphalt/80 hover:border-asphalt/50 transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
