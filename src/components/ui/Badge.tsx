import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "default" | "outline" | "gold";
}

export const Badge = ({ children, className, variant = "default", ...props }: BadgeProps) => {
  const variants = {
    default: "bg-asphalt/5 text-asphalt border-transparent",
    outline: "bg-transparent border-asphalt/20 text-grey-apple",
    gold: "bg-yellow-500/10 text-yellow-700 border-yellow-500/20",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
