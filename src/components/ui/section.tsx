import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/container";

export type SectionTone = "white" | "soft" | "page" | "dark" | "hero";
export type SectionPadding = "none" | "sm" | "md" | "lg";

const tones: Record<SectionTone, string> = {
  white: "band-white",
  soft: "band-soft",
  page: "band-page",
  dark: "band-dark",
  hero: "hero-glow",
};

const paddings: Record<SectionPadding, string> = {
  none: "",
  sm: "py-stack-lg",
  md: "py-section",
  lg: "py-section-lg",
};

export type SectionProps = {
  className?: string;
  children: ReactNode;
  tone?: SectionTone;
  padding?: SectionPadding;
  contained?: boolean;
  narrow?: boolean;
};

export function Section({
  className,
  children,
  tone = "white",
  padding = "md",
  contained = true,
  narrow = false,
  ...rest
}: SectionProps & Omit<ComponentPropsWithoutRef<"section">, "className">) {
  return (
    <section className={cn(tones[tone], paddings[padding], className)} {...rest}>
      {contained ? <Container narrow={narrow}>{children}</Container> : children}
    </section>
  );
}