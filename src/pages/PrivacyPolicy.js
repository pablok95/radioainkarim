import React from 'react';
import { Helmet } from 'react-helmet';

const PrivacyPolicy = ({ privacyPolicy }) => {
    const content = privacyPolicy[0].content.rendered;

    return (
        <section className="section-padding privacy-policy">
            <Helmet>
                <title>Polityka prywatności - Radio Ain Karim</title>
                <meta name="description" content="Katolickie radio działające przy parafii pw. Nawiedzenia NMP w Skomielnej Czarnej. Na antenie radia program stanowią refleksje, modlitwa i katecheza chrześcijańska, część czasu wypełnia jednak także muzyka - religijna i świecka. Rozgłośnia przełącza się na retransmisję programów innych, większych stacji diecezjalnych." />
            </Helmet>

            <div className="container">

                <div className="row">
                    <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                        <h2 className="section-header">Polityka <strong>prywatności</strong></h2>
                        <div dangerouslySetInnerHTML={{
                            __html: content
                        }} />
                    </div>
                </div>

            </div>
        </section>
    );
}

export default PrivacyPolicy;