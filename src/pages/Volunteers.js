import React from 'react';
import {Helmet} from 'react-helmet';
import HeaderPage from '../components/HeaderPage';

import image from '../images/wolontariusze.jpg';

import aBurdzinska from '../images/volunteers/ania_burdzinska.jpg';
import bChaba from '../images/volunteers/beata_chaba.jpg';
import aPindel from '../images/volunteers/ania_pindel.jpg';
import dPindel from '../images/volunteers/dorota_pindel.jpg';
import dMizera from '../images/volunteers/dominika_mizera.jpg';
import aKolatek from '../images/volunteers/agata_kolatek.jpg';
import jWrobel from '../images/volunteers/janina_wrobel.jpg';
import zKotoniak from '../images/volunteers/zuzia_kotoniak.jpg';
import aSlonina from '../images/volunteers/andrzej_slonina.jpg';
import wMolus from '../images/volunteers/wojtek_molus.jpg';
import pWojtasik from '../images/volunteers/patrycja_wojtasik.jpg';
import pJabcon from '../images/volunteers/patryk_jabcon.jpg';
import sWrobel from '../images/volunteers/szymon_wrobel.jpg';
import kGawlak from '../images/volunteers/karol_gawlak.jpg';


const VolunteerArr = [
    { "name": "Agata", "surname": "Kołatek", "sourceUrl": aKolatek },
    { "name": "Beata", "surname": "Chaba", "sourceUrl": bChaba },
    { "name": "Anna", "surname": "Pindel", "sourceUrl": aPindel },
    { "name": "Zuzanna", "surname": "Kotoniak", "sourceUrl": zKotoniak },
    { "name": "Dominika", "surname": "Mizera", "sourceUrl": dMizera },
    { "name": "Dorota", "surname": "Pindel", "sourceUrl": dPindel },
    { "name": "Janina", "surname": "Wróbel", "sourceUrl": jWrobel },
    { "name": "Andrzej", "surname": "Słonina", "sourceUrl": aSlonina },
    { "name": "Anna", "surname": "Burdzińska", "sourceUrl": aBurdzinska },
    { "name": "Patryk", "surname": "Jabcoń", "sourceUrl": pJabcon },
    { "name": "Wojciech", "surname": "Molus", "sourceUrl": wMolus },
    { "name": "Patrycja", "surname": "Wojtasik", "sourceUrl": pWojtasik },
    { "name": "Szymon", "surname": "Wróbel", "sourceUrl": sWrobel },
    { "name": "Karol", "surname": "Gawlak", "sourceUrl": kGawlak },
];



const VolunteerItem = (props) => {
    const { name, surname, sourceUrl } = props;

    return (
        <div className="col-12 col-sm-6 col-lg-4">
            <Helmet>
                <title>Wolontariusze - Radio Ain Karim</title>
                <meta name="description" content="Katolickie radio działające przy parafii pw. Nawiedzenia NMP w Skomielnej Czarnej. Na antenie radia program stanowią refleksje, modlitwa i katecheza chrześcijańska, część czasu wypełnia jednak także muzyka - religijna i świecka. Rozgłośnia przełącza się na retransmisję programów innych, większych stacji diecezjalnych." />
            </Helmet>

            <div className="volunteer">
                <div className="img-wrapper ">
                    <img src={sourceUrl} alt={`Zdjęcie-${name}-${surname}`} />
                </div>
                <div className="content">
                    <h3>{`${name} ${surname}`}</h3>
                </div>
            </div>
        </div>
    )
}


const Volunteers = () => {

    const volunteers = VolunteerArr.map((volunteer, index) => {
        return (
            <VolunteerItem key={index} name={volunteer.name} surname={volunteer.surname} sourceUrl={volunteer.sourceUrl} />
        )
    })

    return (
        <>
            <HeaderPage title="Wolontariusze" srcImage={image} />

            <section className="section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                            <h2 className="section-header">Nasi <strong>wolontariusze</strong></h2>
                            <p>Oto nasi wolontariusze dzięki, którym działanie i istnienie radia nie byłoby możliwe. Każdy z nich czynnie angażuje się w działalność radiową, prowadząc audycje jako speaker lub obsługujący konsolę.</p>
                        </div>

                        {volunteers}

                    </div>
                </div>
            </section>
        </>
    );
}

export default Volunteers;