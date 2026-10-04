"use client";

import {
  useId,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";

import { cn } from "@/lib/cn";
import { useDialog } from "@/components/ui/dialog";

export type DrawerSide = "right" | "left" | "bottom";

const sides: Record<DrawerSide, string> = {
  right:
    "m-0 ml-auto h-dvh max-h-none w-full max-w-md open:animate-drawer-right",
  left: "m-0 mr-auto h-dvh max-h-none w-full max-w-md open:animate-drawer-left",
  bottom:
    "m-auto mt-auto w-full max-h-[85dvh] max-w-none rounded-t-3xl open:animate-drawer-up",
};

export type DrawerProps = {
  className?: string;
  children?: ReactNode;
  open: boolean;
  onClose: () => void;
  title?: ReactNode;
  description?: ReactNode;
  footer?: ReactNode;
  side?: DrawerSide;
  showClose?: boolean;
} & Omit<ComponentPropsWithoutRef<"dialog">, "className" | "children">;

export function Drawer({
  className,
  children,
  open,
  onClose,
  title,
  description,
  footer,
  side = "right",
  showClose = true,
  ...rest
}: DrawerProps) {
  const ref = useDialog(open, onClose);
  const titleId = useId();
  const descriptionId = useId();

  return (
    <dialog
      ref={ref}
      aria-labelledby={title ? titleId : undefined}
      aria-describedby={description ? descriptionId : undefined}
      className={cn(
        "bg-surface p-0 text-copy shadow-overlay backdrop:bg-primary/45 backdrop:backdrop-blur-sm",
        sides[side],
        className,
      )}
      {...rest}
    >
      <div className="flex h-full flex-col">
        <div className="flex items-start justify-between gap-4 border-b border-line px-6 py-5">
          <div className="flex flex-col gap-1">
            {title ? (
              <h2
                id={titleId}
                className="text-heading-3 font-semibold text-heading"
              >
                {title}
              </h2>
            ) : null}
            {description ? (
              <p id={descriptionId} className="text-body-sm text-copy">
                {description}
              </p>
            ) : null}
          </div>

          {showClose ? (
            <button
              type="button"
              onClick={onClose}
              aria-label="Close drawer"
              className="-mt-1 -mr-1 inline-flex size-8 shrink-0 items-center justify-center rounded-full text-muted transition-colors hover:bg-neutral-100 hover:text-heading focus-ring"
            >
              <svg
                viewBox="0 0 20 20"
                fill="none"
                className="size-4"
                strokeWidth="1.8"
                strokeLinecap="round"
              >
                <path d="m5 5 10 10M15 5 5 15" stroke="currentColor" />
              </svg>
            </button>
          ) : null}
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-6 py-5">{children}</div>

        {footer ? (
          <div className="flex flex-wrap items-center justify-end gap-3 border-t border-line px-6 py-4">
            {footer}
          </div>
        ) : null}
      </div>
    </dialog>
  );
}