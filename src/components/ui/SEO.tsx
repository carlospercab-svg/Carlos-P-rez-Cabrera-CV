import { Helmet } from "react-helmet-async";
import { PROFILE } from "@/data/profile";
import { useLanguage } from "@/context/LanguageContext";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
}

export const SEO = ({ 
  title, 
  description,
  image = "/images/og-image.jpg" 
}: SEOProps) => {
  const { language } = useLanguage();
  const profile = PROFILE[language];

  const defaultTitle = profile.name;
  const defaultDescription = profile.hero.subheadline;

  const effectiveTitle = title || defaultTitle;
  const effectiveDescription = description || defaultDescription;

  const siteTitle = effectiveTitle === defaultTitle ? effectiveTitle : `${effectiveTitle} | ${defaultTitle}`;

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={effectiveDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={effectiveDescription} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={effectiveDescription} />
      <meta name="twitter:image" content={image} />
      
      {/* Theme Color */}
      <meta name="theme-color" content="#FAFAFA" media="(prefers-color-scheme: light)" />
      <meta name="theme-color" content="#0A0A0A" media="(prefers-color-scheme: dark)" />
    </Helmet>
  );
};
