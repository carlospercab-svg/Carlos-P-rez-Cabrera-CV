import React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "link";
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export const Button = ({ variant = "primary", children, className, href, ...props }: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ease-out";
  
  const variants = {
    primary: "bg-asphalt text-white hover:scale-105 hover:shadow-lg active:scale-95",
    secondary: "bg-transparent border border-border text-asphalt hover:bg-white hover:border-asphalt/20 hover:scale-105 active:scale-95",
    link: "bg-transparent text-asphalt underline underline-offset-4 hover:text-grey-apple px-0 py-0 rounded-none",
  };

  const Component = motion.button;

  if (href) {
    return (
      <motion.a
        href={href}
        className={cn(baseStyles, variants[variant], className)}
        whileHover={variant !== 'link' ? { scale: 1.05 } : {}}
        whileTap={variant !== 'link' ? { scale: 0.95 } : {}}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <Component
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </Component>
  );
};
