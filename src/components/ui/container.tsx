import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

type ContainerProps = {
  className?: string;
  narrow?: boolean;
};

export function Container({
  className,
  narrow = false,
  ...rest
}: ContainerProps &
  Omit<ComponentPropsWithoutRef<"div">, "className">) {
  return (
    <div
      className={cn(
        narrow ? "container-prose" : "container-page",
        className,
      )}
      {...rest}
    />
  );
}