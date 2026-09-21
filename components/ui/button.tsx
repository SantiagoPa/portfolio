import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import { Slot } from "radix-ui";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center gap-2 rounded-sm border border-transparent font-medium whitespace-nowrap transition-colors select-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-ink-soft",
        outline: "border-ink-soft bg-transparent text-foreground hover:bg-surface",
        secondary: "border-border bg-secondary text-secondary-foreground hover:bg-paper",
        // Ámbar solo como marca de estado: borde señal, texto en tinta. Con el signal claro
        // (#9A5F00) el relleno ya pasaría AA, pero un botón ámbar macizo decora en vez de
        // marcar estado, así que se mantiene borde + tinta.
        signal: "border-signal bg-transparent text-foreground hover:bg-surface",
        ghost: "text-foreground hover:bg-surface",
        link: "text-foreground underline underline-offset-4 hover:text-ink-soft",
      },
      size: {
        default: "h-11 px-5 text-[0.95rem]",
        sm: "h-9 px-3 type-meta",
        lg: "h-12 px-6 text-base",
        icon: "size-11",
        "icon-sm": "size-9",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
