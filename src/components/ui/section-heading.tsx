import type { ReactNode } from "react";

import { cn } from "@/lib/cn";
import { Eyebrow } from "@/components/ui/eyebrow";

export type SectionHeadingProps = {
  className?: string;
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  size?: "md" | "lg";
  titleId?: string;
};

export function SectionHeading({
  className,
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  size = "md",
  titleId,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-stack-sm",
        centered ? "items-center text-center" : "items-start",
        size === "lg" ? "max-w-3xl" : "max-w-2xl",
        centered && "mx-auto",
        className,
      )}
    >
      {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}

      <h2
        id={titleId}
        className={cn(
          "font-semibold text-balance",
          size === "lg" ? "text-display-sm" : "text-heading-1",
          tone === "dark" ? "text-white" : "text-heading",
        )}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={cn(
            "text-body-lg text-pretty",
            tone === "dark" ? "text-brand-200" : "text-copy",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}