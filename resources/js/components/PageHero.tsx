import TransText from './TransText';

const DEFAULT_BACKGROUND_IMAGE =
    'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80';

/**
 * Reusable page hero: full-width dark section with optional background image,
 * subtitle and title. Use at the top of every non-home page (À propos, Contact, etc.).
 */
export function PageHero({
    subtitle,
    title,
    reverse = false,
    backgroundImage = DEFAULT_BACKGROUND_IMAGE,
}: {
    subtitle: {
        fr: string;
        ar: string;
        nl: string;
    };
    title: {
        fr: string;
        ar: string;
        nl: string;
    };
    reverse?: boolean;
    backgroundImage?: string;
}) {
    return (
        <section className="relative flex min-h-[45vh] items-center justify-center bg-foreground px-4 pt-28 pb-20">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            />
            <div className="absolute inset-0 bg-black/75" />
            <div
                className={`relative z-10 mx-auto flex max-w-6xl gap-3 text-center ${reverse ? 'flex-col-reverse' : 'flex-col'}`}
            >
                <TransText
                    className="text-sm font-medium tracking-wider text-cl-white/80"
                    as="h3"
                    {...subtitle}
                />
                <TransText
                    className="text-4xl font-bold tracking-tight text-cl-white uppercase sm:text-5xl lg:text-6xl"
                    as="h1"
                    {...title}
                />
            </div>
        </section>
    );
}

export default PageHero;
