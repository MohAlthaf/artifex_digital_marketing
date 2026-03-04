interface CalloutProps {
  children: React.ReactNode;
  className?: string;
  /** trust = warm neutral; info = accent-tinted */
  variant?: "trust" | "info";
}

export default function Callout({
  children,
  className = "",
  variant = "trust",
}: CalloutProps) {
  const styles =
    variant === "info"
      ? "bg-accent-light border border-accent/20 text-text"
      : "bg-surface-warm border border-border-light text-text-secondary";

  return (
    <div
      className={[
        "rounded-2xl px-6 py-5 sm:px-8 sm:py-6",
        styles,
        className,
      ].join(" ")}
      role="note"
    >
      <div className="text-[0.9375rem] leading-relaxed">{children}</div>
    </div>
  );
}
