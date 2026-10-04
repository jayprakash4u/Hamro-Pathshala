import Link from "next/link";

import { cn } from "@/lib/cn";

export type LogoProps = {
  className?: string;
  tone?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  href?: string;
};

const sizes = {
  sm: { mark: "size-8 rounded-lg", text: "text-body-md", markText: "text-sm" },
  md: { mark: "size-10 rounded-xl", text: "text-heading-4", markText: "text-base" },
  lg: { mark: "size-12 rounded-2xl", text: "text-heading-3", markText: "text-lg" },
} as const;

export function Logo({
  className,
  tone = "light",
  size = "md",
  href = "/",
}: LogoProps) {
  const { mark, text, markText } = sizes[size];

  const content = (
    <>
      <span
        className={cn(
          "inline-flex items-center justify-center bg-primary font-semibold text-white",
          mark,
          markText,
        )}
        aria-hidden
      >
        M
      </span>
      <span
        className={cn(
          "font-semibold tracking-tight",
          text,
          tone === "dark" ? "text-white" : "text-heading",
        )}
      >
        Mero
        <span
          className={tone === "dark" ? "text-accent-300" : "text-brand-600"}
        >
          Pathshala
        </span>
      </span>
    </>
  );

  const classes = cn("inline-flex items-center gap-2.5", className);

  if (!href) {
    return <span className={classes}>{content}</span>;
  }

  return (
    <Link href={href} className={classes} aria-label="MeroPathshala home">
      {content}
    </Link>
  );
}