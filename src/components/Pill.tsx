interface PillProps {
  children: React.ReactNode;
  className?: string;
}

export default function Pill({ children, className = "" }: PillProps) {
  return (
    <span
      className={[
        "inline-block px-3 py-1",
        "text-xs font-semibold tracking-wider uppercase",
        "rounded-full",
        "bg-accent-light text-accent border border-accent/20",
        className,
      ].join(" ")}
    >
      {children}
    </span>
  );
}
