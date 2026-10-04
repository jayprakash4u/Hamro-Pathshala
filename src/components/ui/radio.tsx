import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/cn";

export type RadioProps = {
  className?: string;
  label?: ReactNode;
  description?: ReactNode;
} & Omit<ComponentPropsWithoutRef<"input">, "type" | "className">;

export function Radio({
  className,
  label,
  description,
  disabled,
  ...rest
}: RadioProps) {
  const control = (
    <span className="relative inline-flex size-5 shrink-0 items-center justify-center">
      <input type="radio" disabled={disabled} className="peer sr-only" {...rest} />
      <span
        aria-hidden
        className={cn(
          "flex size-5 items-center justify-center rounded-full border border-line-strong bg-surface transition-colors duration-150",
          "peer-checked:border-accent-600 peer-checked:border-[6px]",
          "peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-accent-600",
          "peer-disabled:cursor-not-allowed peer-disabled:bg-neutral-100",
          className,
        )}
      />
    </span>
  );

  if (!label && !description) return control;

  return (
    <label
      className={cn(
        "inline-flex items-start gap-3",
        disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer",
      )}
    >
      {control}

      <span className="flex flex-col gap-0.5">
        {label ? (
          <span className="text-body-md text-heading">{label}</span>
        ) : null}
        {description ? (
          <span className="text-body-sm text-muted">{description}</span>
        ) : null}
      </span>
    </label>
  );
}