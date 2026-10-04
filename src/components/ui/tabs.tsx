"use client";

import { useRef, useState, type ReactNode } from "react";

import { cn } from "@/lib/cn";

export type TabItem = {
  value: string;
  label: ReactNode;
  disabled?: boolean;
  content: ReactNode;
};

export type TabsProps = {
  className?: string;
  items: TabItem[];
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  size?: "sm" | "md";
};

export function Tabs({
  className,
  items,
  defaultValue,
  value,
  onValueChange,
  size = "md",
}: TabsProps) {
  const initial = defaultValue ?? items[0]?.value ?? "";
  const [internal, setInternal] = useState(initial);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const active = value ?? internal;

  const select = (next: string) => {
    if (value === undefined) setInternal(next);
    onValueChange?.(next);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    const keys = ["ArrowRight", "ArrowLeft", "Home", "End"];
    if (!keys.includes(event.key)) return;

    event.preventDefault();

    const enabled = items
      .map((item, itemIndex) => (item.disabled ? null : itemIndex))
      .filter((itemIndex): itemIndex is number => itemIndex !== null);

    const position = enabled.indexOf(index);
    if (position === -1) return;

    let targetIndex = index;

    if (event.key === "Home") targetIndex = enabled[0];
    if (event.key === "End") targetIndex = enabled[enabled.length - 1];
    if (event.key === "ArrowRight") {
      targetIndex = enabled[(position + 1) % enabled.length];
    }
    if (event.key === "ArrowLeft") {
      targetIndex = enabled[(position - 1 + enabled.length) % enabled.length];
    }

    select(items[targetIndex].value);
    tabRefs.current[targetIndex]?.focus();
  };

  return (
    <div className={cn("flex flex-col gap-stack-md", className)}>
      <div
        role="tablist"
        aria-orientation="horizontal"
        className={cn(
          "flex flex-wrap items-center gap-1 border-b border-line",
          size === "sm" ? "gap-0.5" : "gap-1.5",
        )}
      >
        {items.map((item, index) => {
          const selected = item.value === active;

          return (
            <button
              key={item.value}
              ref={(node) => {
                tabRefs.current[index] = node;
              }}
              type="button"
              role="tab"
              id={`tab-${item.value}`}
              aria-selected={selected}
              aria-controls={`panel-${item.value}`}
              tabIndex={selected ? 0 : -1}
              disabled={item.disabled}
              onClick={() => select(item.value)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              className={cn(
                "relative -mb-px font-medium transition-colors duration-150 focus-ring",
                size === "sm" ? "px-3 py-2 text-body-sm" : "px-4 py-3 text-label",
                selected
                  ? "text-accent-700 after:absolute after:inset-x-2 after:-bottom-px after:h-0.5 after:rounded-full after:bg-accent-600"
                  : "text-muted hover:text-heading",
                item.disabled && "cursor-not-allowed opacity-50",
              )}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {items.map((item) => (
        <div
          key={item.value}
          role="tabpanel"
          id={`panel-${item.value}`}
          aria-labelledby={`tab-${item.value}`}
          hidden={item.value !== active}
          className="animate-fade-in"
        >
          {item.value === active ? item.content : null}
        </div>
      ))}
    </div>
  );
}