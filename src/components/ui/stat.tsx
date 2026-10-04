import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

export type StatItem = {
  value: ReactNode;
  label: string;
  hint?: string;
};

export type StatProps = {
  className?: string;
  value: ReactNode;
  label: string;
  hint?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function Stat({
  className,
  value,
  label,
  hint,
  align = "left",
  tone = "light",
}: StatProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-1",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <span
        className={cn(
          "text-display-sm font-semibold tracking-tight",
          tone === "dark" ? "text-accent-300" : "text-heading",
        )}
      >
        {value}
      </span>
      <span
        className={cn(
          "text-label font-medium",
          tone === "dark" ? "text-white" : "text-heading",
        )}
      >
        {label}
      </span>
      {hint ? (
        <span
          className={cn(
            "text-body-sm",
            tone === "dark" ? "text-brand-300" : "text-muted",
          )}
        >
          {hint}
        </span>
      ) : null}
    </div>
  );
}

export type StatGridProps = {
  className?: string;
  items: StatItem[];
  columns?: 2 | 3 | 4;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

const columnClasses: Record<NonNullable<StatGridProps["columns"]>, string> = {
  2: "grid-cols-2",
  3: "grid-cols-2 md:grid-cols-3",
  4: "grid-cols-2 lg:grid-cols-4",
};

export function StatGrid({
  className,
  items,
  columns = 4,
  align = "left",
  tone = "light",
}: StatGridProps) {
  return (
    <div
      className={cn(
        "grid gap-x-8 gap-y-stack-lg",
        columnClasses[columns],
        className,
      )}
    >
      {items.map((item) => (
        <Stat
          key={item.label}
          value={item.value}
          label={item.label}
          hint={item.hint}
          align={align}
          tone={tone}
        />
      ))}
    </div>
  );
}

export const defaultTrustItems: StatItem[] = [
  { value: "20+", label: "Years of Experience" },
  { value: "500+", label: "Schools & Campuses" },
  { value: "50K+", label: "Students Managed" },
  { value: "99.9%", label: "Uptime Guarantee" },
];

export type TrustStripProps = {
  className?: string;
  items?: StatItem[];
  tone?: "light" | "dark";
};

export function TrustStrip({
  className,
  items = defaultTrustItems,
  tone = "light",
}: TrustStripProps) {
  return (
    <ul
      className={cn(
        "flex flex-wrap items-center justify-center gap-x-3 gap-y-3",
        className,
      )}
    >
      {items.map((item) => (
        <li
          key={item.label}
          className={cn(
            "inline-flex items-center gap-2.5 rounded-full px-4 py-2.5 text-label font-medium",
            tone === "dark"
              ? "bg-white/10 text-white ring-1 ring-white/15"
              : "border border-line bg-surface text-heading shadow-card",
          )}
        >
          <span
            className={cn(
              "text-heading-3 font-semibold",
              tone === "dark" ? "text-accent-300" : "text-accent-600",
            )}
          >
            {item.value}
          </span>
          {item.label}
        </li>
      ))}
    </ul>
  );
}