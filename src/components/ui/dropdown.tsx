"use client";

import Link from "next/link";
import {
  createContext,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";

import { cn } from "@/lib/cn";

const DropdownContext = createContext<{ close: () => void }>({
  close: () => {},
});

export type DropdownProps = {
  className?: string;
  children: ReactNode;
  trigger: ReactNode;
  align?: "start" | "end";
  width?: string;
  label?: string;
};

export function Dropdown({
  className,
  children,
  trigger,
  align = "end",
  width = "w-56",
  label,
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={cn("relative inline-block", className)}>
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={open ? menuId : undefined}
        aria-label={label}
        onClick={() => setOpen((value) => !value)}
        className="focus-ring inline-flex items-center gap-2 rounded-full"
      >
        {trigger}
      </button>

      <DropdownContext.Provider value={{ close: () => setOpen(false) }}>
        <div
          id={menuId}
          role="menu"
          hidden={!open}
          className={cn(
            "absolute top-[calc(100%+0.5rem)] z-50 overflow-hidden rounded-2xl border border-line bg-surface p-1.5 shadow-overlay",
            align === "end" ? "right-0" : "left-0",
            width,
          )}
        >
          {open ? children : null}
        </div>
      </DropdownContext.Provider>
    </div>
  );
}

export function DropdownLabel({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <p
      className={cn(
        "px-3 py-2 text-overline font-semibold uppercase text-muted",
        className,
      )}
    >
      {children}
    </p>
  );
}

const itemBase =
  "flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-body-md text-copy transition-colors duration-150 focus-ring disabled:pointer-events-none disabled:opacity-50";

export type DropdownItemProps = {
  className?: string;
  children: ReactNode;
  onSelect?: () => void;
  destructive?: boolean;
} & Omit<ComponentPropsWithoutRef<"button">, "className">;

export function DropdownItem({
  className,
  children,
  onSelect,
  destructive = false,
  ...rest
}: DropdownItemProps) {
  const { close } = useContext(DropdownContext);

  return (
    <button
      type="button"
      role="menuitem"
      onClick={() => {
        onSelect?.();
        close();
      }}
      className={cn(
        itemBase,
        destructive
          ? "text-danger hover:bg-danger-soft"
          : "hover:bg-brand-50 hover:text-heading",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export type DropdownLinkProps = {
  className?: string;
  children: ReactNode;
  href: string;
} & Omit<ComponentPropsWithoutRef<"a">, "className">;

export function DropdownLink({
  className,
  children,
  href,
  ...rest
}: DropdownLinkProps) {
  const { close } = useContext(DropdownContext);

  return (
    <Link
      role="menuitem"
      href={href}
      onClick={close}
      className={cn(itemBase, "hover:bg-brand-50 hover:text-heading", className)}
      {...rest}
    >
      {children}
    </Link>
  );
}

export function DropdownSeparator({ className }: { className?: string }) {
  return (
    <div role="separator" className={cn("my-1.5 h-px bg-line", className)} />
  );
}