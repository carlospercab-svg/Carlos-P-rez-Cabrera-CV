import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { H2, Body, Label } from "@/components/ui/Typography";
import { PROFILE } from "@/data/profile";

export const About = () => {
  return (
    <Section id="about" className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        
        {/* Left Column: Title & Stats */}
        <div className="lg:col-span-4 lg:sticky lg:top-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Label>01 — Profile</Label>
            <H2>{PROFILE.about.title}</H2>
            
            <div className="mt-8 grid grid-cols-2 gap-6 md:block md:space-y-8 md:mt-12">
              {PROFILE.about.stats.map((stat, index) => (
                <div key={index} className="border-l border-border pl-4">
                  <p className="text-xs text-grey-apple uppercase tracking-wider mb-1">{stat.label}</p>
                  <p className="text-sm font-medium text-asphalt">{stat.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Narrative */}
        <div className="lg:col-span-8">
          <div className="space-y-8 max-w-2xl">
            {PROFILE.about.description.map((paragraph, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Body className={index === 0 ? "text-xl md:text-2xl text-asphalt font-light" : ""}>
                  {paragraph}
                </Body>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
