interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  accent?: boolean;
}

export default function Card({
  title,
  children,
  className = "",
  hover = true,
  accent = false,
}: CardProps) {
  return (
    <div
      className={[
        "bg-surface rounded-2xl border border-border",
        "p-6 sm:p-7",
        "shadow-[var(--shadow-card)]",
        hover
          ? "transition-all duration-250 hover:shadow-[var(--shadow-lift)] hover:-translate-y-0.5"
          : "",
        accent ? "border-l-4 border-l-accent" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {title && (
        <h3 className="text-[1.0625rem] font-semibold mb-3 text-text tracking-tight">
          {title}
        </h3>
      )}
      <div className="text-text-secondary text-[0.9375rem] leading-relaxed">
        {children}
      </div>
    </div>
  );
}
