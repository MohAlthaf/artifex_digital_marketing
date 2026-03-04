interface Feature {
  title: string;
  description: string;
  /** Optional 1–2 char symbol or roman numeral as visual anchor */
  symbol?: string;
}

interface FeatureGridProps {
  items: Feature[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export default function FeatureGrid({
  items,
  columns = 3,
  className = "",
}: FeatureGridProps) {
  const colClass: Record<number, string> = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={`grid ${colClass[columns]} gap-5 ${className}`}>
      {items.map((item) => (
        <div
          key={item.title}
          className="group bg-surface rounded-2xl border border-border p-7 sm:p-8 shadow-[var(--shadow-card)] transition-all duration-200 hover:shadow-[var(--shadow-lift)] hover:-translate-y-0.5"
        >
          {item.symbol && (
            <div className="mb-5">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-accent-light text-accent text-sm font-bold select-none border border-accent/15">
                {item.symbol}
              </span>
            </div>
          )}
          <h3 className="text-[1rem] font-semibold mb-2.5 text-text tracking-tight leading-snug">
            {item.title}
          </h3>
          <p className="text-[0.9rem] text-muted leading-relaxed">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
