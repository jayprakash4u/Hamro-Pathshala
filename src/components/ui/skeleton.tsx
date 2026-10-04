import { cn } from "@/lib/cn";

export type SkeletonProps = {
  className?: string;
  variant?: "text" | "rect" | "circle" | "block";
  lines?: number;
};

const variants = {
  text: "h-4 w-full rounded-md",
  rect: "h-24 w-full rounded-xl",
  circle: "size-10 rounded-full",
  block: "h-2.5 w-full rounded-full",
} as const;

export function Skeleton({
  className,
  variant = "text",
  lines = 1,
}: SkeletonProps) {
  if (variant === "text" && lines > 1) {
    return (
      <div className={cn("flex w-full flex-col gap-2", className)} aria-hidden>
        {Array.from({ length: lines }).map((_, index) => (
          <span
            key={index}
            className={cn(
              "animate-pulse bg-neutral-200",
              index === lines - 1 ? "w-2/3" : "w-full",
              variant === "text" ? "h-4 rounded-md" : "",
            )}
          />
        ))}
      </div>
    );
  }

  return (
    <span
      aria-hidden
      className={cn(
        "block animate-pulse bg-neutral-200",
        variants[variant],
        className,
      )}
    />
  );
}

export type SkeletonCardProps = {
  className?: string;
  lines?: number;
};

export function SkeletonCard({ className, lines = 3 }: SkeletonCardProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "flex flex-col gap-4 rounded-2xl border border-line bg-surface p-6",
        className,
      )}
    >
      <Skeleton variant="circle" />
      <Skeleton variant="text" lines={lines} />
      <Skeleton variant="block" className="w-1/3" />
    </div>
  );
}