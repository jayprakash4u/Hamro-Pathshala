import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

export type EyebrowProps = {
  className?: string;
  children: ReactNode;
  tone?: "light" | "dark";
  showRule?: boolean;
};

export function Eyebrow({
  className,
  children,
  tone = "light",
  showRule = true,
}: EyebrowProps) {
  return (
    <p
      className={cn(
        "flex items-center gap-2.5 text-overline font-semibold uppercase",
        tone === "dark" ? "text-accent-300" : "text-accent-700",
        className,
      )}
    >
      {showRule ? (
        <span
          aria-hidden
          className={cn(
            "h-px w-6",
            tone === "dark" ? "bg-accent-300/50" : "bg-accent-600/40",
          )}
        />
      ) : null}
      {children}
    </p>
  );
}