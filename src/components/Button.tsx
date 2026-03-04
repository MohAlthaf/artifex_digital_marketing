import Link from "next/link";

interface ButtonProps {
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
  size = "md",
}: ButtonProps) {
  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-7 py-3 text-[0.9375rem]",
    lg: "px-9 py-3.5 text-base",
  };

  const base = [
    "inline-flex items-center justify-center rounded-xl font-semibold",
    "transition-all duration-200",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
    sizes[size],
  ].join(" ");

  const variants = {
    primary: [
      "bg-accent text-white",
      "hover:bg-accent-hover active:scale-[0.98]",
      "shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-md)]",
    ].join(" "),
    secondary: [
      "border-2 border-accent text-accent bg-transparent",
      "hover:bg-accent-light active:scale-[0.98]",
    ].join(" "),
    ghost: [
      "text-accent hover:text-accent-hover",
      "underline underline-offset-4 decoration-accent/30 hover:decoration-accent/70",
    ].join(" "),
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
