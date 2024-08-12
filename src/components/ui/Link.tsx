import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const linkStyles = cva(
  ["border-2 rounded-2xl text-base font-inter font-medium transition outline-none"],
  {
    variants: {
      intent: {
        primary:
          "bg-gray-dark border-2 border-gray-light hover:border-accent hover:bg-accent hover:text-secondary text-primary focus-visible:bg-accent focus-visible:border-accent",
        secondary:
          "border-2 border-gray-light text-secondary hover:border-accent focus-visible:border-accent",
        "secondary-light":
          "border-2 border-gray-light text-primary hover:border-accent focus-visible:border-accent",
        none: "border-transparent",
      },
      size: {
        sm: "px-3 py-1 rounded-xl",
        default: "px-4 py-1.5 rounded-2xl",
        square: "min-w-[40px] w-10 h-10 grid place-items-center rounded-full",
        none: "p-0",
      },
      extras: {
        icon: "flex items-center gap-2 pr-2.5",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "default",
    },
  },
);

type CustomLinkProps = {
  href: string;
  className?: string;
  intent?: "primary" | "secondary" | "secondary-light" | "none";
  size?: "sm" | "default" | "square" | "none";
  extras?: "icon";
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  override?: boolean;
} & VariantProps<typeof linkStyles>;

export function Link({
  href,
  children,
  className,
  intent,
  size,
  extras,
  override,
  ...props
}: CustomLinkProps) {
  const isExternal = href.startsWith("http://") || href.startsWith("https://");

  // Build className dynamically
  const dynamicClassName = override
    ? className
    : linkStyles({
        className,
        intent,
        size,
        extras,
      });

  const commonProps = {
    ...props,
    href,
    className: dynamicClassName,
  };

  if (isExternal) {
    return (
      <a
        {...commonProps}
        href={href}
        className={dynamicClassName}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <a {...commonProps} href={href} className={dynamicClassName}>
      {children}
    </a>
  );
}
