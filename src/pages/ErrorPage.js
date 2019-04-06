import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';


const ErrorPage = () => {
    return (
        <div className="error-page">
            <Helmet>
                <title>Nie znaleziono strony - Radio Ain Karim</title>
                <meta name="description" content="Katolickie radio działające przy parafii pw. Nawiedzenia NMP w Skomielnej Czarnej. Na antenie radia program stanowią refleksje, modlitwa i katecheza chrześcijańska, część czasu wypełnia jednak także muzyka - religijna i świecka. Rozgłośnia przełącza się na retransmisję programów innych, większych stacji diecezjalnych." />
            </Helmet>

            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                        <h3 className="error-title">404</h3>
                        <p><strong>Przepraszamy</strong></p>
                        <p>Strona o podanym adresie nie istnieje</p>
                        <p>Prawdopodobnie kliknąłeś w błędny lub stary link. Zajrzyj na naszą stronę główną. Jeżeli widzisz ten komunikat po kliknięciu łącza na naszej witrynie <Link title="Skontaktuj się z nami" to="/kontakt">poinformuj nas o tym.</Link></p>
                        <Link className="btn-nav accent-color" title="Strona główna" to="/">Przejdź do strony głównej</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ErrorPage;