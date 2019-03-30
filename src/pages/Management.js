import React from 'react';
import {Helmet} from 'react-helmet';
import HeaderPage from '../components/HeaderPage';
import image from '../images/zarzad.jpg';



const Management = () => {
    return (
        <>
            <Helmet>
                <title>Zarząd - Radio Ain Karim</title>
                <meta name="description" content="Katolickie radio działające przy parafii pw. Nawiedzenia NMP w Skomielnej Czarnej. Na antenie radia program stanowią refleksje, modlitwa i katecheza chrześcijańska, część czasu wypełnia jednak także muzyka - religijna i świecka. Rozgłośnia przełącza się na retransmisję programów innych, większych stacji diecezjalnych." />
            </Helmet>
            <HeaderPage srcImage={image} title="Zarząd" />
        </>
    );
}

export default Management;