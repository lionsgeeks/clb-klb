import { Link } from '@inertiajs/react';

const activitiesText = `Plongez au cœur de notre communauté. Découvrez comment nous transformons les idées en réalisations. Rejoignez-nous et devenez un acteur du changement positif.`;

export default function ActivitiesSection() {
    return (
        <section className="bg-cl-black py-16 lg:py-24">
            <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:gap-16 lg:px-8">
                <div className="flex flex-col justify-center">
                    <p className="text-sm font-medium uppercase tracking-wider text-alpha">
                        Nos activités
                    </p>
                    <h2 className="mt-2 text-3xl font-bold text-cl-white lg:text-4xl">
                        Activités et Actions
                    </h2>
                    <p className="mt-6 leading-relaxed text-cl-white/90">
                        {activitiesText}
                    </p>
                    <Link
                        href="#"
                        className="mt-8 inline-block w-fit rounded-lg bg-alpha px-6 py-3 text-sm font-medium uppercase text-cl-white transition hover:opacity-95"
                    >
                        EN SAVOIR PLUS
                    </Link>
                </div>
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                    <img
                        src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80"
                        alt=""
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
