import { Head } from '@inertiajs/react';
import HomeLayout from '@/layouts/HomeLayout';
import HeroSection from './Partials/HeroSection';
import WhoWeAreSection from './Partials/WhoWeAreSection';
import VisionSection from './Partials/VisionSection';
import ActivitiesSection from './Partials/ActivitiesSection';
import TeamSection from './Partials/TeamSection';
import PartnersSection from './Partials/PartnersSection';

function AboutIndex() {
    return (
        <>
            <Head title="À propos" />
            <HeroSection />
            <WhoWeAreSection />
            <VisionSection />
            <ActivitiesSection />
            <TeamSection />
            <PartnersSection />
        </>
    );
}

AboutIndex.layout = (page) => <HomeLayout>{page}</HomeLayout>;

export default AboutIndex;
