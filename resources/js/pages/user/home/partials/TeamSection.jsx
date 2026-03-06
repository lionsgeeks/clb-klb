import TransText from '@/components/TransText';

export default function TeamSection({ teamMembers = [] }) {
    const team = teamMembers.map((m) => ({ name: m.name, imageUrl: m.imageUrl || m.image_path }));
    if (team.length === 0) return null;
    return (
        <section className="border-b border-border bg-background py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <p className="text-center text-sm font-medium uppercase tracking-wider text-cl-beta">
                    <TransText fr="La gouvernance du CLB" ar="حوكمة CLB" nl="Het bestuur van CLB" as="span" />
                </p>
                <h2 className="mt-2 text-center text-3xl font-bold text-foreground lg:text-4xl">
                    <TransText fr="Notre Équipe" ar="فريقنا" nl="Ons team" as="span" />
                </h2>
                <div className="mt-12 flex flex-wrap items-center justify-center gap-8 lg:gap-12">
                    {team.map((member) => (
                        <div key={member.name} className="flex flex-col items-center text-center">
                            <div className="h-28 w-28 overflow-hidden rounded-full border-2 border-border bg-muted sm:h-32 sm:w-32">
                                <img
                                    src={member.imageUrl}
                                    alt={member.name}
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                            <p className="mt-3 font-bold text-foreground">{member.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
