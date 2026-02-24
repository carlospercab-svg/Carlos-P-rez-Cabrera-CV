import { PROFILE } from "@/data/profile";
import { useLanguage } from "@/context/LanguageContext";

export const Footer = () => {
  const { language } = useLanguage();
  const profile = PROFILE[language];

  return (
    <footer className="bg-platinum py-12 px-6 border-t border-border/50">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-xs font-mono text-grey-apple uppercase tracking-wider">
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p className="text-[10px] text-grey-apple/60 mt-1">
            {language === 'en' ? 'Designed with precision. Madrid, Spain.' : 'Diseñado con precisión. Madrid, España.'}
          </p>
        </div>

        <div className="flex gap-8">
          <a 
            href={profile.socials.linkedin} 
            className="text-xs text-asphalt hover:text-grey-apple transition-colors uppercase tracking-wider"
            aria-label="LinkedIn Profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a 
            href={profile.socials.github} 
            className="text-xs text-asphalt hover:text-grey-apple transition-colors uppercase tracking-wider"
            aria-label="GitHub Profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a 
            href={`mailto:${profile.email}`} 
            className="text-xs text-asphalt hover:text-grey-apple transition-colors uppercase tracking-wider"
            aria-label="Email Contact"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};
