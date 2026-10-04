import Link from "next/link";

import { cn } from "@/lib/cn";

export type PaginationProps = {
  className?: string;
  currentPage: number;
  totalPages: number;
  hrefFor?: (page: number) => string;
  siblings?: number;
  label?: string;
};

function buildPages(currentPage: number, totalPages: number, siblings: number) {
  const total = siblings * 2 + 5;
  const pages: (number | "gap")[] = [];

  if (totalPages <= total) {
    for (let page = 1; page <= totalPages; page += 1) pages.push(page);
    return pages;
  }

  const left = Math.max(currentPage - siblings, 1);
  const right = Math.min(currentPage + siblings, totalPages);

  pages.push(1);
  if (left > 2) pages.push("gap");

  for (let page = left; page <= right; page += 1) pages.push(page);

  if (right < totalPages - 1) pages.push("gap");
  pages.push(totalPages);

  return pages;
}

const control =
  "inline-flex size-9 items-center justify-center rounded-full text-label font-medium text-copy transition-colors duration-150 hover:bg-brand-50 hover:text-heading focus-ring disabled:pointer-events-none disabled:opacity-40";

export function Pagination({
  className,
  currentPage,
  totalPages,
  hrefFor = (page) => `?page=${page}`,
  siblings = 1,
  label = "Pagination",
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = buildPages(currentPage, totalPages, siblings);

  return (
    <nav
      aria-label={label}
      className={cn("flex items-center justify-center gap-1", className)}
    >
      {currentPage > 1 ? (
        <Link
          href={hrefFor(currentPage - 1)}
          aria-label="Previous page"
          className={control}
        >
          <svg
            viewBox="0 0 20 20"
            fill="none"
            className="size-4"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m12.5 4.5-5 5.5 5 5.5" stroke="currentColor" />
          </svg>
        </Link>
      ) : (
        <span aria-hidden className={cn(control, "opacity-40")}>
          <svg
            viewBox="0 0 20 20"
            fill="none"
            className="size-4"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m12.5 4.5-5 5.5 5 5.5" stroke="currentColor" />
          </svg>
        </span>
      )}

      {pages.map((page, index) =>
        page === "gap" ? (
          <span key={`gap-${index}`} className="px-1 text-muted">
            &hellip;
          </span>
        ) : (
          <Link
            key={page}
            href={hrefFor(page)}
            aria-current={page === currentPage ? "page" : undefined}
            className={cn(
              control,
              page === currentPage &&
                "bg-accent-600 text-white hover:bg-accent-700 hover:text-white",
            )}
          >
            {page}
          </Link>
        ),
      )}

      {currentPage < totalPages ? (
        <Link
          href={hrefFor(currentPage + 1)}
          aria-label="Next page"
          className={control}
        >
          <svg
            viewBox="0 0 20 20"
            fill="none"
            className="size-4"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m7.5 4.5 5 5.5-5 5.5" stroke="currentColor" />
          </svg>
        </Link>
      ) : (
        <span aria-hidden className={cn(control, "opacity-40")}>
          <svg
            viewBox="0 0 20 20"
            fill="none"
            className="size-4"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m7.5 4.5 5 5.5-5 5.5" stroke="currentColor" />
          </svg>
        </span>
      )}
    </nav>
  );
}