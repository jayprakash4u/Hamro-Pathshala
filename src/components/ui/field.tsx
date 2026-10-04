import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/cn";

export const controlBase =
  "w-full rounded-xl border border-line bg-surface text-body-md text-heading transition-colors duration-200 placeholder:text-muted focus-ring focus:border-accent-600 disabled:cursor-not-allowed disabled:bg-neutral-100 disabled:text-muted";

export const controlInvalid = "border-danger focus:border-danger";

export const controlSizes = {
  sm: "h-9 px-3 text-body-sm",
  md: "h-11 px-4",
  lg: "h-12 px-4",
} as const;

export type ControlSize = keyof typeof controlSizes;

export type FieldProps = {
  className?: string;
  children: ReactNode;
  label?: ReactNode;
  hint?: ReactNode;
  error?: ReactNode;
  required?: boolean;
};

export function Field({
  className,
  children,
  label,
  hint,
  error,
  required = false,
}: FieldProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {label ? (
        <span className="text-label font-medium text-heading">
          {label}
          {required ? (
            <span className="ml-0.5 text-danger" aria-hidden>
              *
            </span>
          ) : null}
        </span>
      ) : null}

      {children}

      {error ? (
        <p className="text-body-sm text-danger">{error}</p>
      ) : hint ? (
        <p className="text-body-sm text-muted">{hint}</p>
      ) : null}
    </div>
  );
}

export type LabelProps = {
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<"label">, "className">;

export function Label({ className, children, ...rest }: LabelProps) {
  return (
    <label
      className={cn("text-label font-medium text-heading", className)}
      {...rest}
    >
      {children}
    </label>
  );
}

export function FieldHint({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <p className={cn("text-body-sm text-muted", className)}>{children}</p>;
}

export function FieldError({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <p className={cn("text-body-sm text-danger", className)}>{children}</p>;
}