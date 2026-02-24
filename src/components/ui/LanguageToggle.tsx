import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="p-2 rounded-full hover:bg-asphalt/5 dark:hover:bg-white/10 transition-colors relative group flex items-center justify-center w-10 h-10"
      aria-label={language === 'en' ? "Switch to Spanish" : "Switch to English"}
    >
      <motion.div
        key={language}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.2 }}
        className="w-6 h-6 rounded-full overflow-hidden shadow-sm border border-border/50"
      >
        {language === 'en' ? (
          // Show Spanish flag to switch to Spanish
          <svg viewBox="0 0 640 480" className="w-full h-full object-cover">
            <path fill="#c60b1e" d="M0 0h640v480H0z"/>
            <path fill="#ffc400" d="M0 120h640v240H0z"/>
          </svg>
        ) : (
          // Show US flag to switch to English
          <svg viewBox="0 0 640 480" className="w-full h-full object-cover">
            <path fill="#bd3d44" d="M0 0h640v480H0z"/>
            <path stroke="#fff" strokeWidth="37" d="M0 55.3h640M0 129h640M0 203h640M0 277h640M0 351h640M0 425h640"/>
            <path fill="#192f5d" d="M0 0h296v258H0z"/>
            <marker id="us-a" markerHeight="30" markerWidth="30">
              <path fill="#fff" d="m14 0 9 27L0 10h28L5 27z"/>
            </marker>
            <path fill="none" markerMid="url(#us-a)" d="M16 16h264M16 61h264M16 106h264M16 151h264M16 196h264M16 241h264M38 38h220M38 84h220M38 129h220M38 174h220M38 219h220"/>
          </svg>
        )}
      </motion.div>
    </button>
  );
};
