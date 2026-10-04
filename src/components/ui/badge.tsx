import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

export type BadgeVariant =
  | "accent"
  | "brand"
  | "soft"
  | "neutral"
  | "outline"
  | "warning"
  | "danger";

export type BadgeSize = "sm" | "md";

const base =
  "inline-flex items-center gap-1.5 rounded-full font-medium whitespace-nowrap";

const variants: Record<BadgeVariant, string> = {
  accent: "bg-accent-50 text-accent-700 ring-1 ring-accent-200",
  brand: "bg-brand-100 text-brand-900 ring-1 ring-brand-200",
  soft: "bg-neutral-100 text-copy",
  neutral: "bg-neutral-50 text-muted ring-1 ring-line",
  outline: "text-copy ring-1 ring-line-strong",
  warning: "bg-warning-soft text-warning ring-1 ring-warning/30",
  danger: "bg-danger-soft text-danger ring-1 ring-danger/30",
};

const sizes: Record<BadgeSize, string> = {
  sm: "px-2.5 py-0.5 text-overline",
  md: "px-3 py-1 text-label",
};

export type BadgeProps = {
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
  children: ReactNode;
  dot?: boolean;
};

const dotTone: Record<BadgeVariant, string> = {
  accent: "bg-accent-600",
  brand: "bg-brand-700",
  soft: "bg-neutral-400",
  neutral: "bg-neutral-400",
  outline: "bg-neutral-400",
  warning: "bg-warning",
  danger: "bg-danger",
};

export function Badge({
  variant = "soft",
  size = "md",
  className,
  children,
  dot = false,
}: BadgeProps) {
  return (
    <span className={cn(base, variants[variant], sizes[size], className)}>
      {dot ? (
        <span
          aria-hidden
          className={cn("size-1.5 rounded-full", dotTone[variant])}
        />
      ) : null}
      {children}
    </span>
  );
}