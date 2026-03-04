interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "article";
}

export default function Container({
  children,
  className = "",
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag className={`max-w-[1120px] mx-auto px-5 sm:px-8 ${className}`}>
      {children}
    </Tag>
  );
}
