import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/cn";
import {
  controlBase,
  controlInvalid,
  controlSizes,
  type ControlSize,
} from "@/components/ui/field";

export type InputProps = {
  size?: ControlSize;
  invalid?: boolean;
  leadingIcon?: ReactNode;
  trailingSlot?: ReactNode;
} & Omit<ComponentPropsWithoutRef<"input">, "size">;

export function Input({
  size = "md",
  invalid = false,
  leadingIcon,
  trailingSlot,
  className,
  type = "text",
  ...rest
}: InputProps) {
  const control = cn(
    controlBase,
    controlSizes[size],
    invalid && controlInvalid,
    leadingIcon && "pl-10",
    trailingSlot && "pr-10",
    className,
  );

  if (!leadingIcon && !trailingSlot) {
    return <input type={type} className={control} aria-invalid={invalid} {...rest} />;
  }

  return (
    <div className="relative">
      {leadingIcon ? (
        <span
          aria-hidden
          className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted"
        >
          {leadingIcon}
        </span>
      ) : null}

      <input
        type={type}
        className={control}
        aria-invalid={invalid}
        {...rest}
      />

      {trailingSlot ? (
        <span className="absolute right-2 top-1/2 -translate-y-1/2 text-muted">
          {trailingSlot}
        </span>
      ) : null}
    </div>
  );
}