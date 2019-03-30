import React from 'react';
import {Helmet} from 'react-helmet';
import HeaderPage from '../components/HeaderPage';
import image from '../images/home-page.jpg';
import NavTab from '../components/NavTab';
import Concert from './Concert';
import LastReports from '../layouts/LastReports';
import ArchivePrograms from '../layouts/ArchivePrograms';
import MorePrograms from '../layouts/MorePrograms';
import OurPartners from '../layouts/OurPartners';

const HomePage = (props) => {

    const { news, reports, archiveAuditions } = props;

    return (
        <main className="fade">
            <Helmet>
                <title>Radio Ain Karim 104.4FM - Skomielna Czarna</title>
                <meta name="description" content="Katolickie radio działające przy parafii pw. Nawiedzenia NMP w Skomielnej Czarnej. Na antenie radia program stanowią refleksje, modlitwa i katecheza chrześcijańska, część czasu wypełnia jednak także muzyka - religijna i świecka. Rozgłośnia przełącza się na retransmisję programów innych, większych stacji diecezjalnych." />
            </Helmet>

            <HeaderPage srcImage={image} />
            <NavTab items={news} />
            <Concert />
            <LastReports items={reports} />
            <ArchivePrograms items={archiveAuditions} />
            <MorePrograms />
            <OurPartners />
        </main>
    );
}

export default HomePage;