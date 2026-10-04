import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";
import { controlBase, controlInvalid } from "@/components/ui/field";

export type TextareaProps = {
  invalid?: boolean;
  resize?: "none" | "vertical" | "both";
} & ComponentPropsWithoutRef<"textarea">;

const resizeClasses = {
  none: "resize-none",
  vertical: "resize-y",
  both: "resize",
} as const;

export function Textarea({
  invalid = false,
  resize = "vertical",
  className,
  rows = 4,
  ...rest
}: TextareaProps) {
  return (
    <textarea
      rows={rows}
      aria-invalid={invalid}
      className={cn(
        controlBase,
        "min-h-24 py-2.5 leading-relaxed",
        resizeClasses[resize],
        invalid && controlInvalid,
        className,
      )}
      {...rest}
    />
  );
}