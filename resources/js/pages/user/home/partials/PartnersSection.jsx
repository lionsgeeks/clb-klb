import TransText from '@/components/TransText';

function PartnerLogo({ partner }) {
    const logoUrl = partner.logoUrl ?? partner.logo_path;
    return (
        <div className="flex h-24 w-[calc(25%-1.5rem)] flex-shrink-0 items-center justify-center rounded-lg border border-border bg-card p-4 sm:h-32 lg:h-36">
            <img
                src={logoUrl}
                alt={partner.name}
                className="max-h-full max-w-full object-contain"
            />
        </div>
    );
}

export default function PartnersSection({ partners = [] }) {
    if (partners.length === 0) return null;
    return (
        <section className="border-b border-border bg-background py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <p className="text-center text-sm font-medium uppercase tracking-wider text-cl-beta">
                    <TransText fr="Nos Partenaires" ar="شركاؤنا" nl="Onze partners" as="span" />
                </p>
                <h2 className="mt-2 text-center text-3xl font-bold text-foreground lg:text-4xl">
                    <TransText fr="Nos Partenaires" ar="شركاؤنا" nl="Onze partners" as="span" />
                </h2>
            </div>
            <div className="mx-auto mt-12 max-w-7xl overflow-hidden px-4 lg:px-8">
                <div className="flex animate-[scroll_15s_linear_infinite] gap-8">
                    {partners.map((partner, i) => (
                        <PartnerLogo key={`a-${partner.id ?? i}`} partner={partner} />
                    ))}
                    {partners.map((partner, i) => (
                        <PartnerLogo key={`b-${partner.id ?? i}`} partner={partner} />
                    ))}
                </div>
            </div>
        </section>
    );
}
