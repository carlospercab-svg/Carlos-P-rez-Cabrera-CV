import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section = ({ children, className, id, ...props }: SectionProps) => {
  return (
    <section
      id={id}
      className={cn("py-24 md:py-32 px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto", className)}
      {...props}
    >
      {children}
    </section>
  );
};
