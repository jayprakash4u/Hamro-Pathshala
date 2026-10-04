import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

export type LoaderSize = "sm" | "md" | "lg";

const sizes: Record<LoaderSize, string> = {
  sm: "size-4 border-2",
  md: "size-6 border-2",
  lg: "size-9 border-[3px]",
};

export type LoaderProps = {
  className?: string;
  size?: LoaderSize;
  label?: ReactNode;
};

export function Loader({ className, size = "md", label }: LoaderProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={cn("inline-flex items-center gap-3", className)}
    >
      <span
        aria-hidden
        className={cn(
          "animate-spin rounded-full border-accent-600 border-t-transparent",
          sizes[size],
        )}
      />
      {label ? <span className="text-body-sm text-muted">{label}</span> : null}
      <span className="sr-only">Loading</span>
    </div>
  );
}