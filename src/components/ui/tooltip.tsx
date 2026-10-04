import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

export type TooltipProps = {
  className?: string;
  children: ReactNode;
  content: ReactNode;
  side?: "top" | "bottom";
};

const sides = {
  top: "bottom-[calc(100%+0.5rem)] left-1/2 -translate-x-1/2",
  bottom: "top-[calc(100%+0.5rem)] left-1/2 -translate-x-1/2",
} as const;

export function Tooltip({
  className,
  children,
  content,
  side = "top",
}: TooltipProps) {
  return (
    <span className={cn("group relative inline-flex", className)}>
      {children}
      <span
        role="tooltip"
        className={cn(
          "pointer-events-none absolute z-50 w-max max-w-60 rounded-lg bg-primary px-2.5 py-1.5 text-body-sm text-white opacity-0 shadow-raised transition-opacity duration-150",
          "group-hover:opacity-100 group-focus-within:opacity-100",
          sides[side],
        )}
      >
        {content}
      </span>
    </span>
  );
}