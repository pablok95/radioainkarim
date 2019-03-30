import React from 'react';
import {Helmet} from 'react-helmet';
import HeaderPage from '../components/HeaderPage';
import TitleSection from '../components/TitleSection';
import ProgramList from '../components/ProgramList';

import image from '../images/ramowka.jpg';
import programImg from '../images/program.jpg';



const Program = ({ match }) => {
    return (
        <div className="fade">
            {match && <HeaderPage srcImage={image} title="Ramówka" />}

            {match && <Helmet>
                <title>Ramówka - Radio Ain Karim</title>
                <meta name="description" content="Ramówka Radia Ain Karim na każdy dzień. Bądź zawsze na bieżąco." />
            </Helmet>}

            <section className="program section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-8 col-xl-7">
                            <TitleSection title="Nasz program" description="Ain Karim 104.4 FM" subtitle="Bądź zawsze na bieżąco!" />
                            <ProgramList />
                        </div>

                        <div className="col-12 col-lg-4 col-xl-5">
                            <div className="img-wrapper">
                                <img src={programImg} alt="ramowka" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Program;