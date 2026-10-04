import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

export type IconBadgeProps = {
  className?: string;
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  tone?: "soft" | "accent" | "surface" | "dark";
};

const sizes = {
  sm: "size-10 rounded-lg",
  md: "size-12 rounded-xl",
  lg: "size-14 rounded-2xl",
} as const;

const tones = {
  soft: "bg-brand-100 text-brand-700",
  accent: "bg-accent-100 text-accent-700",
  surface: "bg-surface text-brand-700 ring-1 ring-line",
  dark: "bg-white/10 text-accent-300 ring-1 ring-white/15",
} as const;

export function IconBadge({
  className,
  children,
  size = "md",
  tone = "soft",
}: IconBadgeProps) {
  return (
    <span
      aria-hidden
      className={cn(
        "inline-flex items-center justify-center",
        sizes[size],
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}