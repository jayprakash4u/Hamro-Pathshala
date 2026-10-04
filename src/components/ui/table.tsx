import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/cn";

type BaseCellProps = {
  className?: string;
  children?: ReactNode;
};

export type TableHeadProps = BaseCellProps & ComponentPropsWithoutRef<"th">;
export type TableCellProps = BaseCellProps & ComponentPropsWithoutRef<"td">;

export function Table({ className, ...rest }: ComponentPropsWithoutRef<"table">) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-line bg-surface shadow-card">
      <table
        className={cn("w-full border-collapse text-left", className)}
        {...rest}
      />
    </div>
  );
}

export function TableHeader({
  className,
  ...rest
}: ComponentPropsWithoutRef<"thead">) {
  return <thead className={cn("bg-neutral-50", className)} {...rest} />;
}

export function TableBody({
  className,
  ...rest
}: ComponentPropsWithoutRef<"tbody">) {
  return <tbody className={cn("divide-y divide-line", className)} {...rest} />;
}

export function TableRow({
  className,
  ...rest
}: ComponentPropsWithoutRef<"tr">) {
  return (
    <tr
      className={cn(
        "transition-colors duration-150 hover:bg-brand-50/70",
        className,
      )}
      {...rest}
    />
  );
}

export function TableHead({ className, children, ...rest }: TableHeadProps) {
  return (
    <th
      scope="col"
      className={cn(
        "px-4 py-3 text-overline font-semibold uppercase text-muted",
        className,
      )}
      {...rest}
    >
      {children}
    </th>
  );
}

export function TableCell({ className, children, ...rest }: TableCellProps) {
  return (
    <td className={cn("px-4 py-3.5 text-body-md text-copy", className)} {...rest}>
      {children}
    </td>
  );
}

export function TableCaption({ className, children }: BaseCellProps) {
  return (
    <caption className={cn("px-4 py-3 text-body-sm text-muted", className)}>
      {children}
    </caption>
  );
}

export function TableEmptyRow({
  className,
  children,
  colSpan,
}: TableCellProps & { colSpan: number }) {
  return (
    <tr className={className}>
      <td colSpan={colSpan} className="px-4 py-10 text-center">
        {children}
      </td>
    </tr>
  );
}