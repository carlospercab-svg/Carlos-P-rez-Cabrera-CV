import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { H2, Label, Body } from "@/components/ui/Typography";
import { useLanguage } from "@/context/LanguageContext";

export const Athletics = () => {
  const { language } = useLanguage();

  return (
    <Section id="athletics" className="bg-asphalt text-platinum relative overflow-hidden">
      {/* Background Texture/Noise could go here */}
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center relative z-10">
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Label className="text-grey-apple/60">06 — {language === 'en' ? 'Mindset' : 'Mentalidad'}</Label>
            <H2 className="text-white">{language === 'en' ? 'The 10.50 Standard.' : 'El Estándar 10.50.'}</H2>
            <Body className="text-grey-apple/80 mb-8">
              {language === 'en' 
                ? "I am a national-level sprinter. On the track, 0.01 seconds is the difference between winning and losing. I bring that same obsession with precision, consistency, and resilience to my professional work. Pressure is familiar territory."
                : "Soy velocista a nivel nacional. En la pista, 0.01 segundos marcan la diferencia entre ganar y perder. Aporto esa misma obsesión por la precisión, la consistencia y la resiliencia a mi trabajo profesional. La presión es territorio conocido."}
            </Body>
            
            <div className="p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white/60 mb-2">
                {language === 'en' ? 'Entrepreneurial Initiative' : 'Iniciativa Emprendedora'}
              </h4>
              <p className="text-sm text-grey-apple/80">
                {language === 'en'
                  ? <>Beyond operations, I explore brand creation. <span className="text-white font-medium">"QueQueso"</span> is a concept in development—a testament to my interest in product, branding, and the entrepreneurial journey.</>
                  : <>Más allá de las operaciones, exploro la creación de marca. <span className="text-white font-medium">"QueQueso"</span> es un concepto en desarrollo—un testimonio de mi interés en el producto, el branding y el camino emprendedor.</>}
              </p>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-7 flex flex-col md:flex-row gap-6 justify-center lg:justify-end">
          {[
            { label: "100m PB", value: "10.50s" },
            { label: "200m PB", value: "21.35s" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
              className="w-full md:w-64 aspect-square rounded-3xl border border-white/10 bg-white/5 flex flex-col items-center justify-center relative group hover:bg-white/10 transition-colors duration-500"
            >
              <div className="absolute inset-0 border border-dashed border-white/20 rounded-3xl m-2 pointer-events-none" />
              <span className="text-xs font-mono uppercase tracking-widest text-grey-apple mb-2">{stat.label}</span>
              <span className="text-5xl md:text-6xl font-light tracking-tighter text-white group-hover:scale-110 transition-transform duration-500">
                {stat.value}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
