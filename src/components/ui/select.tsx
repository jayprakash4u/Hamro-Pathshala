import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";
import {
  controlBase,
  controlInvalid,
  controlSizes,
  type ControlSize,
} from "@/components/ui/field";

export type SelectOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

export type SelectProps = {
  size?: ControlSize;
  invalid?: boolean;
  placeholder?: string;
  options?: SelectOption[];
} & Omit<ComponentPropsWithoutRef<"select">, "size" | "children">;

export function Select({
  size = "md",
  invalid = false,
  placeholder,
  options,
  className,
  ...rest
}: SelectProps) {
  return (
    <div className="relative">
      <select
        aria-invalid={invalid}
        className={cn(
          controlBase,
          controlSizes[size],
          "cursor-pointer appearance-none pr-10",
          invalid && controlInvalid,
          className,
        )}
        {...rest}
      >
        {placeholder ? (
          <option value="" disabled>
            {placeholder}
          </option>
        ) : null}

        {options?.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </option>
        ))}
      </select>

      <svg
        aria-hidden
        viewBox="0 0 20 20"
        fill="none"
        className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-muted"
      >
        <path
          d="m5 7.5 5 5 5-5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}