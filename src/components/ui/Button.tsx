import clsx from "clsx";
import Link from "next/link";
import { type AnchorHTMLAttributes, type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

type Props = {
  href: string;
  variant?: Variant;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  children: ReactNode;
  className?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">;

export function Button({
  href,
  variant = "primary",
  iconLeft,
  iconRight,
  children,
  className,
  ...rest
}: Props) {
  const base =
    "inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium transition-transform duration-200 active:scale-[0.98]";

  const styles: Record<Variant, string> = {
    primary:
      "bg-accent text-white shadow-[0_16px_50px_rgba(61,84,255,0.25)] hover:brightness-110",
    secondary:
      "border border-stroke bg-foreground/40 text-text hover:bg-foreground/55",
    ghost:
      "border border-stroke/70 bg-transparent text-muted hover:text-text hover:bg-foreground/30",
  };

  return (
    <Link
      href={href}
      className={clsx(base, styles[variant], className)}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </Link>
  );
}

