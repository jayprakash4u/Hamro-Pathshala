"use client";

import {
  useEffect,
  useId,
  useRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";

import { cn } from "@/lib/cn";

export function useDialog(open: boolean, onClose: () => void) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (open && !element.open) element.showModal();
    else if (!open && element.open) element.close();
  }, [open]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleCancel = (event: Event) => {
      event.preventDefault();
      onClose();
    };

    element.addEventListener("cancel", handleCancel);
    return () => element.removeEventListener("cancel", handleCancel);
  }, [onClose]);

  return ref;
}

export type DialogSize = "sm" | "md" | "lg";

const sizes: Record<DialogSize, string> = {
  sm: "max-w-sm",
  md: "max-w-lg",
  lg: "max-w-2xl",
};

export type DialogProps = {
  className?: string;
  children?: ReactNode;
  open: boolean;
  onClose: () => void;
  title?: ReactNode;
  description?: ReactNode;
  footer?: ReactNode;
  size?: DialogSize;
  showClose?: boolean;
} & Omit<ComponentPropsWithoutRef<"dialog">, "className" | "children">;

export function Dialog({
  className,
  children,
  open,
  onClose,
  title,
  description,
  footer,
  size = "md",
  showClose = true,
  ...rest
}: DialogProps) {
  const ref = useDialog(open, onClose);
  const titleId = useId();
  const descriptionId = useId();

  return (
    <dialog
      ref={ref}
      aria-labelledby={title ? titleId : undefined}
      aria-describedby={description ? descriptionId : undefined}
      className={cn(
        "m-auto w-[calc(100%-2rem)] rounded-3xl bg-surface p-0 text-copy shadow-overlay backdrop:bg-primary/45 backdrop:backdrop-blur-sm open:animate-scale-in",
        sizes[size],
        className,
      )}
      {...rest}
    >
      <div className="flex max-h-[85vh] flex-col overflow-hidden rounded-3xl">
        {title || showClose ? (
          <div className="flex items-start justify-between gap-4 px-6 pt-6 pb-5">
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
                <p id={descriptionId} className="text-body-md text-copy">
                  {description}
                </p>
              ) : null}
            </div>

            {showClose ? (
              <button
                type="button"
                onClick={onClose}
                aria-label="Close dialog"
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
        ) : null}

        {children ? (
          <div className="min-h-0 flex-1 overflow-y-auto px-6 pb-6">{children}</div>
        ) : null}

        {footer ? (
          <div className="flex flex-wrap items-center justify-end gap-3 border-t border-line bg-neutral-50 px-6 py-4">
            {footer}
          </div>
        ) : null}
      </div>
    </dialog>
  );
}