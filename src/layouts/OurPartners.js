import React from 'react';


import logo1 from '../images/partners/logoOFMKrak.png';
import logo2 from '../images/partners/logoDPOP.png';
import logo3 from '../images/partners/logoKiM.jpg';
import logo4 from '../images/partners/diecezja_pl.png';
import logo5 from '../images/partners/gokisTokarnia.jpg';
import logo6 from '../images/partners/medium_salvattipl.png';
import logo7 from '../images/partners/radionadaje.png';
import logo8 from '../images/partners/radoiokatolickie_logo_big.jpg';
import logo9 from '../images/partners/LogoRadioJG.jpg';
import logo10 from '../images/partners/logo-radioprofeto.png';
import logo11 from '../images/partners/radionowohuckie_logo.jpg';
import logo12 from '../images/partners/logoitvmyslenice.jpg';
import logo13 from '../images/partners/Gmina.png';


const partnersArr = [
    { "name": "Kapucyni.pl", "source_url": logo1, "alt": "kapucyni-pl", "site_url": "https://kapucyni.pl/" },
    { "name": "Dzieło Pomocy św. Ojca Pio", "source_url": logo2, "alt": "dzielo-pomocy-sw-ojca-pio", "site_url": "http://dzielopomocy.pl/" },
    { "name": "Fundacja kapucyni i misje", "source_url": logo3, "alt": "fundacja-kapucyni-misje", "site_url": "https://fundacja.kapucyni.pl/" },
    { "name": "Archidiecezja Krakowska", "source_url": logo4, "alt": "archidiecezja-krakowska", "site_url": "https://diecezja.pl/" },
    { "name": "GOKiS Tokarnia", "source_url": logo5, "alt": "gokis-tokarnia", "site_url": "http://domkultury.manifo.com/" },
    { "name": "Pallotine Missionary Fundation Salvatti.pl", "source_url": logo6, "alt": "salvatti-pl", "site_url": "http://salvatti.pl/en/pallotine-missionary-foundation-salvatti-pl/" },
    { "name": "Radio Nadaje", "source_url": logo7, "alt": "radio-nadaje", "site_url": "http://radio.nadaje.com/pl/" },
    { "name": "Radio Katolickie", "source_url": logo8, "alt": "radio-katolickie", "site_url": "http://radiokatolickie.pl/" },
    { "name": "Radio Jasna Góra", "source_url": logo9, "alt": "radio-jasna-gora", "site_url": "http://radiojasnagora.pl/" },
    { "name": "Radio Profeto", "source_url": logo10, "alt": "radio-profeto", "site_url": "http://radioprofeto.pl/" },
    { "name": "Radio Nowohuckie", "source_url": logo11, "alt": "radio-nowohuckie", "site_url": "http://nowohuckie.pl/" },
    { "name": "Myślenice iTV", "source_url": logo12, "alt": "myslenice-itv", "site_url": "https://www.myslenice-itv.pl/" },
    { "name": "Gmina Tokarnia", "source_url": logo13, "alt": "gmina-tokarnia", "site_url": "http://tokarnia.info.pl/php/index.php" },
];



const OurPartnersItems = (props) => {
    const { sourceUrl, alt, siteUrl, name } = props;

    return (
        <div className="partner-item">
            <a href={siteUrl} title={name} target="_blank" rel="noopener noreferrer">
                <img src={sourceUrl} alt={alt} />
            </a>
        </div>
    );
}


const OurPartners = () => {

    const partners = partnersArr.map((partner, index) =>
        <OurPartnersItems
            key={index}
            name={partner.name}
            sourceUrl={partner.source_url}
            siteUrl={partner.site_url}
            alt={partner.alt}
        />);

    return (
        <section className="section-padding">
            <div className="container">
                <h2 className="section-header">Nasi <strong>partnerzy</strong></h2>
                <div className="partner-items">
                    {partners}
                </div>
            </div>
        </section>
    );
}

export default OurPartners;