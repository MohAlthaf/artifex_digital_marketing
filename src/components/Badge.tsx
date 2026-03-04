interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "accent" | "muted";
}

export default function Badge({
  children,
  className = "",
  variant = "default",
}: BadgeProps) {
  const styles = {
    default: "bg-surface border border-border text-muted",
    accent: "bg-accent-light border border-accent/20 text-accent",
    muted: "bg-surface-warm border border-border-light text-muted",
  };

  return (
    <span
      className={[
        "inline-block px-2.5 py-0.5 rounded-full text-[0.68rem] font-bold tracking-widest uppercase",
        styles[variant],
        className,
      ].join(" ")}
    >
      {children}
    </span>
  );
}
