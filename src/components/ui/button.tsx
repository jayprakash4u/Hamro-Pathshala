import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/cn";

export type ButtonVariant =
  | "primary"
  | "brand"
  | "outline"
  | "soft"
  | "ghost"
  | "link";

export type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-all duration-200 ease-[var(--ease-out-soft)] focus-ring disabled:pointer-events-none disabled:opacity-60";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent-600 text-white shadow-card hover:bg-accent-700 hover:shadow-glow active:translate-y-px",
  brand:
    "bg-primary text-white shadow-card hover:bg-primary-hover active:translate-y-px",
  outline:
    "border border-line-strong bg-surface text-heading shadow-card hover:border-brand-300 hover:bg-brand-50 active:translate-y-px",
  soft: "bg-brand-100 text-brand-900 hover:bg-brand-200 active:translate-y-px",
  ghost: "text-heading hover:bg-neutral-100",
  link: "h-auto rounded-none p-0 text-accent-600 hover:text-accent-700",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-label",
  md: "h-11 px-5 text-label",
  lg: "h-12 px-7 text-body-md",
};

const linkSizes: Record<ButtonSize, string> = {
  sm: "text-label",
  md: "text-label",
  lg: "text-body-md",
};

export type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
  href?: string;
  external?: boolean;
} & Omit<ComponentPropsWithoutRef<"button">, "className" | "children">;

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  external,
  type = "button",
  ...rest
}: ButtonProps) {
  if (href) {
    const classes = cn(
      base,
      variants[variant],
      variant === "link" ? linkSizes[size] : sizes[size],
      className,
    );

    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={cn(base, variants[variant], sizes[size], className)}
      {...rest}
    >
      {children}
    </button>
  );
}