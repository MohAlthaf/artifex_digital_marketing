interface DividerProps {
    className?: string;
}

export default function Divider({ className = '' }: DividerProps) {
    return <hr className={`border-0 border-t border-border-light my-0 ${className}`} />;
}
