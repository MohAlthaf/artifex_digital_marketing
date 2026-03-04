import Container from "./Container";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  divider?: boolean;
  surface?: boolean;
  /** Reduced vertical padding for minor/contextual sections */
  tight?: boolean;
}

export default function Section({
  children,
  className = "",
  id,
  divider = false,
  surface = false,
  tight = false,
}: SectionProps) {
  const padding = tight ? "py-8 sm:py-10" : "py-16 sm:py-20";
  return (
    <section
      id={id}
      className={[
        padding,
        surface ? "bg-surface-warm" : "",
        divider ? "border-t border-border-light" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Container>{children}</Container>
    </section>
  );
}
