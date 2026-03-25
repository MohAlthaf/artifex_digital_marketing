"use client";

import Button from "@/components/Button";
import { trackCtaClick } from "@/lib/analytics";

interface CtaButtonProps {
  href: string;
  buttonText: string;
  ctaPosition: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

/** CTA button that fires early_access_click when clicked. */
export default function CtaButton({
  href,
  buttonText,
  ctaPosition,
  variant,
  className,
  size,
  children,
}: CtaButtonProps) {
  return (
    <Button
      href={href}
      variant={variant}
      className={className}
      size={size}
      onClick={() => trackCtaClick(buttonText, ctaPosition)}
    >
      {children}
    </Button>
  );
}
