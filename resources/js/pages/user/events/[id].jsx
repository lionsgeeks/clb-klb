import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { EventDetailHero, EventDetailContent } from './partials';

function EventShow({ event }) {
    return (
        <AppLayout>
            <Head title={event.title.fr || 'Événement'} />
            <main className="bg-background">
                <EventDetailHero event={event} />
                <EventDetailContent event={event} />
            </main>
        </AppLayout>
    );
}

export default EventShow;
