import { Link } from '@inertiajs/react';
import TransText from '@/components/TransText';
import { useTrans } from '@/hooks/use-trans';

export function FeaturedEventCard({ event }) {
    const { t } = useTrans();
    const { date, location, imageUrl, href = '#' } = event;

    return (
        <article className="group overflow-hidden rounded-2xl border border-border bg-card shadow-lg transition hover:shadow-xl">
            <div className="relative aspect-16/10 w-full overflow-hidden bg-muted">
                {imageUrl && (
                    <img
                        src={imageUrl}
                        alt=""
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                )}
                <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-cl-black/95 via-cl-black/50 to-transparent p-6">
                    <TransText
                        className="mb-1 text-xs font-semibold tracking-widest text-alpha uppercase"
                        {...event.subtitle}
                    />
                    <TransText
                        className="teaspect-16/10tight font-bold text-cl-white lg:text-2xl"
                        {...event.title}
                        as="h3"
                    />
                    <TransText
                        className="mt-1 text-sm text-cl-white/90"
                        {...event.moderator}
                        as="p"
                    />
                </div>
                {event.tag && (
                    <TransText
                        className="absolute top-4 right-4 rounded-md bg-alpha px-3 py-1.5 text-xs font-semibold tracking-wide text-cl-white uppercase shadow"
                        {...event.tag}
                    />
                )}
            </div>
            <div className="flex flex-wrap items-center gap-4 border-b border-border bg-muted/30 px-5 py-4">
                <span className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <svg
                        className="h-4 w-4 text-alpha"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                    </svg>
                    {date}
                </span>
                <span className="flex items-center gap-1 text-sm font-medium text-foreground">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-4 w-4 text-alpha"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                        />
                    </svg>

                    {t(location)}
                </span>
            </div>
            <div className="p-5">
                <Link
                    href={href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-alpha transition hover:gap-3"
                >
                    <TransText
                        fr="Voir l'événement"
                        ar="عرض الفعالية"
                        nl="Bekijk evenement"
                    />
                    <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                    </svg>
                </Link>
            </div>
        </article>
    );
}

export function SmallEventCard({ event }) {
    const { t } = useTrans();
    const { imageUrl, href = '#' } = event;
    const description = t(event.description);

    return (
        <Link
            href={href}
            className="group flex gap-4 overflow-hidden rounded-xl border border-border bg-card p-4 shadow-sm transition hover:border-alpha/30 hover:shadow-md"
        >
            <div className="h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-muted">
                {imageUrl && (
                    <img
                        src={imageUrl}
                        alt=""
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                )}
            </div>
            <div className="min-w-0 flex-1">
                <TransText
                    className="font-bold text-foreground transition-colors group-hover:text-alpha"
                    {...event.title}
                    as="h4"
                />
                {event.subtitle && (
                    <TransText
                        className="text-sm text-muted-foreground"
                        {...event.subtitle}
                        as="p"
                    />
                )}
                <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                    {description}
                </p>
            </div>
            <svg
                className="h-5 w-5 shrink-0 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-alpha"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                />
            </svg>
        </Link>
    );
}
