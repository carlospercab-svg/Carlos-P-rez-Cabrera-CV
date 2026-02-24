import React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface HeadingProps extends HTMLMotionProps<"h1"> {
  children: React.ReactNode;
  className?: string;
}

export const H1 = ({ children, className, ...props }: HeadingProps) => {
  return (
    <motion.h1
      className={cn(
        "text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1] text-asphalt",
        className
      )}
      {...props}
    >
      {children}
    </motion.h1>
  );
};

export const H2 = ({ children, className, ...props }: HeadingProps) => {
  return (
    <motion.h2
      className={cn(
        "text-2xl md:text-3xl font-medium tracking-tight text-asphalt mb-8",
        className
      )}
      {...props}
    >
      {children}
    </motion.h2>
  );
};

export const Body = ({ children, className, ...props }: HTMLMotionProps<"p">) => {
  return (
    <motion.p
      className={cn(
        "text-base md:text-lg text-grey-apple leading-relaxed font-normal",
        className
      )}
      {...props}
    >
      {children}
    </motion.p>
  );
};

export const Label = ({ children, className, ...props }: HTMLMotionProps<"span">) => {
  return (
    <motion.span
      className={cn(
        "text-xs font-mono uppercase tracking-wider text-grey-apple block mb-4",
        className
      )}
      {...props}
    >
      {children}
    </motion.span>
  );
};
