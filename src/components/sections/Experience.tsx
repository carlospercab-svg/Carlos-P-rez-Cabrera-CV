import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { H2, Label, Body } from "@/components/ui/Typography";
import { EXPERIENCE, EDUCATION } from "@/data/experience";
import { cn } from "@/lib/utils";

export const Experience = () => {
  return (
    <Section id="experience" className="bg-platinum">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        
        {/* Experience Column */}
        <div className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Label>03 — Experience</Label>
            <H2>Professional History</H2>
          </motion.div>

          <div className="space-y-12">
            {EXPERIENCE.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group border-l-2 border-border pl-6 hover:border-asphalt transition-colors duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                  <h3 className="text-xl font-medium text-asphalt">{exp.company}</h3>
                  <span className="text-sm font-mono text-grey-apple">{exp.period}</span>
                </div>
                <p className="text-sm font-medium text-asphalt/80 mb-4">{exp.role} — {exp.location}</p>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-sm text-grey-apple leading-relaxed flex items-start">
                      <span className="mr-2 mt-1.5 w-1 h-1 bg-grey-apple rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Column */}
        <div className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <Label>04 — Education</Label>
            <H2>Global Perspective</H2>
          </motion.div>

          <div className="space-y-8">
            {EDUCATION.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
                className="flex flex-col border-b border-border pb-6 last:border-0"
              >
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-lg font-medium text-asphalt">{edu.institution}</h3>
                  <span className="text-xs font-mono text-grey-apple">{edu.period}</span>
                </div>
                <p className="text-sm text-asphalt/80 mb-1">{edu.degree}</p>
                <p className="text-xs text-grey-apple uppercase tracking-wider">{edu.location}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 p-6 bg-surface rounded-2xl border border-border/50"
          >
            <p className="text-sm text-grey-apple italic text-center">
              "Adaptability is my baseline. Studying across three countries has sharpened my ability to navigate new cultures, languages, and systems."
            </p>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};
