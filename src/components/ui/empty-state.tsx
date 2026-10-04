import type { ReactNode } from "react";

import { cn } from "@/lib/cn";
import { IconBadge } from "@/components/ui/icon-badge";

export type EmptyStateProps = {
  className?: string;
  icon?: ReactNode;
  title: string;
  description?: ReactNode;
  action?: ReactNode;
  size?: "sm" | "md";
  bordered?: boolean;
};

export function EmptyState({
  className,
  icon,
  title,
  description,
  action,
  size = "md",
  bordered = true,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-stack-sm text-center",
        size === "md" ? "px-6 py-16" : "px-4 py-8",
        bordered &&
          "rounded-2xl border border-dashed border-line-strong bg-surface",
        className,
      )}
    >
      {icon ? <IconBadge size={size === "md" ? "lg" : "md"}>{icon}</IconBadge> : null}

      <div className="flex flex-col gap-1.5">
        <p
          className={cn(
            "font-semibold text-heading",
            size === "md" ? "text-heading-3" : "text-heading-4",
          )}
        >
          {title}
        </p>

        {description ? (
          <p className="max-w-md text-body-md text-muted">{description}</p>
        ) : null}
      </div>

      {action ? <div className="mt-2">{action}</div> : null}
    </div>
  );
}