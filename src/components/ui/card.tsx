import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/cn";

const card =
  "rounded-2xl border border-line bg-surface shadow-card transition-all duration-200 ease-[var(--ease-out-soft)]";

const hoverLift =
  "hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-raised";

export type CardProps = {
  className?: string;
  children: ReactNode;
  interactive?: boolean;
  tone?: "light" | "soft" | "dark";
};

const tones: Record<NonNullable<CardProps["tone"]>, string> = {
  light: "bg-surface border-line shadow-card",
  soft: "bg-brand-50 border-brand-100 shadow-card",
  dark: "bg-primary border-brand-800 shadow-overlay",
};

export function Card({
  className,
  children,
  interactive = false,
  tone = "light",
  ...rest
}: CardProps & Omit<ComponentPropsWithoutRef<"div">, "className" | "children">) {
  return (
    <div
      className={cn(card, tones[tone], interactive && hoverLift, className)}
      {...rest}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className, children }: CardProps) {
  return (
    <div className={cn("flex flex-col gap-stack-xs p-6", className)}>
      {children}
    </div>
  );
}

export function CardTitle({
  className,
  children,
  as: Tag = "h3",
}: CardProps & { as?: "h2" | "h3" | "h4" }) {
  return (
    <Tag className={cn("text-heading-3 font-semibold text-heading", className)}>
      {children}
    </Tag>
  );
}

export function CardDescription({
  className,
  children,
}: CardProps) {
  return <p className={cn("text-body-md text-copy", className)}>{children}</p>;
}

export function CardContent({ className, children }: CardProps) {
  return <div className={cn("p-6 pt-0", className)}>{children}</div>;
}

export function CardFooter({
  className,
  children,
}: CardProps & Omit<ComponentPropsWithoutRef<"div">, "className" | "children">) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 border-t border-line px-6 py-4",
        className,
      )}
    >
      {children}
    </div>
  );
}