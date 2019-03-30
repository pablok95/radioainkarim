import React from 'react';
import {Helmet} from 'react-helmet';
import HeaderPage from '../components/HeaderPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContactForm from '../components/ContactForm';
import image from '../images/kontakt.jpg';


const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Kontakt - Radio Ain Karim</title>
                <meta name="description" content="Katolickie radio działające przy parafii pw. Nawiedzenia NMP w Skomielnej Czarnej. Na antenie radia program stanowią refleksje, modlitwa i katecheza chrześcijańska, część czasu wypełnia jednak także muzyka - religijna i świecka. Rozgłośnia przełącza się na retransmisję programów innych, większych stacji diecezjalnych." />
            </Helmet>
            
            <HeaderPage srcImage={image} title="Kontakt" />
            <div className="container-fluid contact">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="row">
                            <div className="col-12 col-sm-10 offset-sm-1 col-lg-8 offset-lg-2 col-xl-7 offset-xl-3">
                                <div className="content section-padding">
                                    <h2>Radio <strong className="accent-color">AIN KARIM</strong></h2>
                                    <p>Masz jakieś uwagi lub po prostu chcesz skontaktować się z nami w konkretnej sprawnie. Skorzystaj z danych kontaktowych podanych poniżej lub z formularza kontaktowego.</p>

                                    <div className="item-contact-wrapper">
                                        <h3>Adres:</h3>
                                        <div className="item">
                                            <div className="icon-wrapper">
                                                <FontAwesomeIcon
                                                    icon="map-marker-alt"
                                                />
                                            </div>
                                            <p>Skomielna Czarna 240 <br />32-437 Skomielna Czarna</p>
                                        </div>
                                    </div>

                                    <div className="item-contact-wrapper">
                                        <h3>Numer telefonu</h3>
                                        <div className="item">
                                            <div className="icon-wrapper">
                                                <FontAwesomeIcon
                                                    icon="phone"
                                                />
                                            </div>
                                            <a href="tel:+48123732161">12-373-21-61</a>
                                        </div>
                                    </div>

                                    <div className="item-contact-wrapper">
                                        <h3>Email:</h3>
                                        <div className="item">
                                            <div className="icon-wrapper">
                                                <FontAwesomeIcon
                                                    icon="envelope"
                                                />
                                            </div>
                                            <a href="mailto:kontakt@radioainkarim.pl">kontakt@radioainkarim.pl</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="col-12 col-md-6" style={{ background: '#f1f1f3' }}>
                        <div className="row">
                            <div className="col-12 col-sm-10 offset-sm-1 col-lg-8 offset-lg-2 col-xl-7 offset-xl-2">
                                <div className="content section-padding">
                                    <h2>Formularz <strong className="accent-color">kontaktowy</strong></h2>
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;