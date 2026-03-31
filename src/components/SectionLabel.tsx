import { ReactNode } from "react";
import { cn } from "@/src/lib/utils";

interface SectionLabelProps {
  children: ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span className={cn(
      "font-label text-sm uppercase tracking-[0.2em] px-4 py-2 border border-outline-variant inline-block",
      className
    )}>
      [ {children} ]
    </span>
  );
}
