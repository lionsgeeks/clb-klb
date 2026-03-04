const aboutText = `Le Club des Diplômés du Maroc est l'approche au Maroc pour les femmes dirigeantes et entrepreneurs. Le CLB-KLP est la première association 100% féminine dans le paysage des associations au Maroc, dédiée au développement et au leadership féminin. Le CLB-KLP s'engage pour donner aux femmes dirigeantes une opportunité de partage, d'échange et une plateforme d'entraide.`;

export default function WhoWeAreSection() {
    return (
        <section className="border-b border-border bg-background py-16 lg:py-24">
            <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:gap-16 lg:px-8">
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-muted shadow-md">
                    <img
                        src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80"
                        alt=""
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="flex flex-col justify-center">
                    <p className="text-sm font-medium uppercase tracking-wider text-alpha">
                        About us
                    </p>
                    <h2 className="mt-2 text-3xl font-bold text-foreground lg:text-4xl">
                        Qui sommes nous
                    </h2>
                    <p className="mt-6 leading-relaxed text-foreground/90">
                        {aboutText}
                    </p>
                </div>
            </div>
        </section>
    );
}
