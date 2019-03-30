import React from 'react';
import TitleSection from '../components/TitleSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Donate = () => {
    return (
        <section className="donate section-padding fade">
            <div className="container">
                <TitleSection title="Wspomóż nas" description="Pomóż nam" subtitle="Pozwól nam dawać radość" />

                <p>Radio prowadzone jest przez wolontariat i utrzymuje się dzięki ofiarności mieszkańców parafii Skomielnej Czarnej i Bogdanówki oraz datków słuchaczy. Radio nie nadaje reklam i nie sprzedaje czasu antenowego. Potrzeby są bardzo duże i jeśli ktoś może pomóc radiu przez złożenie dobrowolnej ofiary będziemy bardzo wdzięczni. <strong>Wszystkim naszym ofiarodawcom składamy serdeczne Bóg zapłać.</strong></p>
                <h4>Jak to zrobić?</h4>

                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="wrapper">
                            <div className="icon-wrapper">
                                <FontAwesomeIcon
                                    icon="file-invoice-dollar"
                                />
                            </div>
                            <div className="title-wrapper">
                                <h5>I sposób</h5>
                                <span>Wypełniając formularz PIT</span>
                            </div>
                        </div>
                        <div className="content">
                            <p className="font-weight-bold">Wpisując:</p>
                            <p>KRS Pallotyńskiej Fundacji Misyjnej Salvatti.pl (0000309499),
    natomiast w polu oznaczonym jako cel szczegółowy wpisać: Radio AIN KARIM i gotowe!</p>

                            <p className="font-weight-bold">W jaki sposób 1% trafi do Radia AIN KARIM?</p>

                            <p>Urząd Skarbowy przekaże ten 1% Pallotyńskiej Fundacji wraz ze sprawozdaniem ile pieniędzy wpłynęło na wskazany w PIT-ach cel szczegółowy. Na tej podstawie Fundacja przekaże Radiu AIN KARIM środki, które wskazano jako przeznaczone dla naszego Radia, dlatego tak ważne jest wpisanie w celu szczegółowym “Radio AIN KARIM”.</p>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-xl-5 offset-xl-1">
                        <div className="wrapper">
                            <div className="icon-wrapper">
                                <FontAwesomeIcon
                                    icon="donate"
                                />
                            </div>
                            <div className="title-wrapper">
                                <h5>II sposób</h5>
                                <span>Przesyłając datki pocztą lub przelewem bankowym</span>
                            </div>
                        </div>
                        <div className="content">
                            <p className="font-weight-bold">Dane:</p>
                            <p>Rzymskokatolicka Parafia pw. Nawiedzenia NMP <br />
                                32-437 Skomielna Czarna 240 <br />
                                KBS O/PCIM, 32-432 Pcim 1195 <br />
                                62 8591 0007 0230 0000 1690 0001 <br />
                                Koniecznie z dopiskiem “Wsparcie dla Radia AIN KARIM”</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Donate;