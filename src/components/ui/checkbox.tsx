import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/cn";

export type CheckboxProps = {
  className?: string;
  label?: ReactNode;
  description?: ReactNode;
} & Omit<ComponentPropsWithoutRef<"input">, "type" | "className">;

export function Checkbox({
  className,
  label,
  description,
  disabled,
  ...rest
}: CheckboxProps) {
  const control = (
    <span className="relative inline-flex size-5 shrink-0 items-center justify-center">
      <input
        type="checkbox"
        disabled={disabled}
        className="peer sr-only"
        {...rest}
      />
      <span
        aria-hidden
        className={cn(
          "flex size-5 items-center justify-center rounded-md border border-line-strong bg-surface transition-colors duration-150",
          "peer-checked:border-accent-600 peer-checked:bg-accent-600",
          "peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-accent-600",
          "[&_svg]:opacity-0 peer-checked:[&_svg]:opacity-100",
          "peer-disabled:cursor-not-allowed peer-disabled:bg-neutral-100",
          className,
        )}
      >
        <svg
          viewBox="0 0 16 16"
          fill="none"
          className="size-3.5 text-white"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m3.5 8.5 3 3 6-6.5" stroke="currentColor" />
        </svg>
      </span>
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