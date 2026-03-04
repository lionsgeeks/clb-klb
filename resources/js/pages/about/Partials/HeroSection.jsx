export default function HeroSection() {
    return (
        <section className="relative flex min-h-[50vh] items-center justify-center bg-cl-black px-4 pt-24 pb-16">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
                style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80)',
                }}
            />
            <div className="absolute inset-0 bg-cl-black/70" />
            <div className="relative z-10 mx-auto max-w-4xl text-center">
                <p className="text-sm font-medium uppercase tracking-wider text-cl-white/80">
                    faire connaissance
                </p>
                <h1 className="mt-3 text-4xl font-bold uppercase tracking-tight text-cl-white sm:text-5xl lg:text-6xl">
                    À propos de nous
                </h1>
            </div>
        </section>
    );
}
