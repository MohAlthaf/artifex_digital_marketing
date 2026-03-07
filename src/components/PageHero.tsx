import Container from "./Container";

interface PageHeroProps {
    title: string;
    subtitle?: string;
    backgroundImage: string;
    children?: React.ReactNode;
}

export default function PageHero({
    title,
    subtitle,
    backgroundImage,
    children,
}: PageHeroProps) {
    return (
        <section
            className="page-hero-bg noise-texture pt-20 pb-16 sm:pt-28 sm:pb-20"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <Container>
                {children ?? (
                    <>
                        <h1 className="max-w-2xl mb-5">{title}</h1>
                        {subtitle && (
                            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
                                {subtitle}
                            </p>
                        )}
                    </>
                )}
            </Container>
        </section>
    );
}
