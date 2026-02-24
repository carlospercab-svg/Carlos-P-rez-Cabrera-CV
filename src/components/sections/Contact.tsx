import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { H2, Label, Button } from "@/components/ui/Typography";
import { Button as UIButton } from "@/components/ui/Button";
import { PROFILE } from "@/data/profile";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const Contact = () => {
  const { language } = useLanguage();
  const profile = PROFILE[language];

  return (
    <Section id="contact" className="bg-platinum min-h-[70vh] flex flex-col justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Label>07 — {language === 'en' ? 'Connect' : 'Conectar'}</Label>
          <H2 className="text-5xl md:text-7xl mb-12">{language === 'en' ? "Let's Work." : "Trabajemos."}</H2>
          <p className="text-lg md:text-xl text-grey-apple font-light mb-12 max-w-2xl mx-auto">
            {language === 'en' 
              ? `Open to opportunities in Operations, Business Analysis, and Digital Transformation. Based in ${profile.location}.`
              : `Abierto a oportunidades en Operaciones, Análisis de Negocio y Transformación Digital. Con base en ${profile.location}.`}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <UIButton href={`mailto:${profile.email}`} className="min-w-[200px]">
              <Mail className="mr-2 w-4 h-4" />
              {language === 'en' ? 'Email Me' : 'Envíame un Email'}
            </UIButton>
            <UIButton variant="secondary" href={profile.socials.linkedin} className="min-w-[200px]">
              <Linkedin className="mr-2 w-4 h-4" />
              LinkedIn
            </UIButton>
            <UIButton variant="link" href={profile.socials.github}>
              <Github className="mr-2 w-4 h-4" />
              GitHub
            </UIButton>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
