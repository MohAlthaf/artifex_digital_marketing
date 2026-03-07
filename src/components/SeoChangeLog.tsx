interface SeoChangeLogProps {
    title: string;
    children: React.ReactNode;
}

export default function SeoChangeLog({ title, children }: SeoChangeLogProps) {
    return (
        <details className="text-xs text-muted border border-border-light rounded-lg p-4">
            <summary className="cursor-pointer font-semibold">{title}</summary>
            <ul className="mt-3 space-y-2 list-disc list-inside">{children}</ul>
        </details>
    );
}
