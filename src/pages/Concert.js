import React from 'react';
import TitleSection from '../components/TitleSection';
import ConcertForm from '../components/ConcertForm';
import concertImg from '../images/koncert.jpg';

const Concert = () => {
    return (
        <section className="section-padding concert" style={{ background: `url('${concertImg}') 50% 50% no-repeat` }}>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <TitleSection title="Koncert życzeń" description="W każdą niedzielę" subtitle="Bądź blisko z najbliższymi dzięki nam" />
                        <h3>Już w najbliższą niedzielę o godzinie 13:00</h3>
                        <p>Życzenia można składać telefonicznie pod nr: <a href="tel: +48123732102">12-373-21-02</a>, <a href="tel:+48695036960">695-036-960</a> za pomocą poczty elektronicznej na adres e-mail: <a href="mailto:koncert@radioainkarim.pl?subject=Życzenia na koncert życzeń">koncert@radioainkarim.pl</a>, również pisząc życzenia na kartce i wrzucając je do skrzynki znajdującej się w kościele parafialnym lub korzystając z formularza znajdującego się na stronie radia.</p>
                    </div>

                    <div className="col-12 col-md-6">
                        <ConcertForm />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Concert;