import React from 'react';
import { Link } from "react-router-dom";
import moreProgramsImg from '../images/more_auditions.jpg';


const MorePrograms = () => {
    return (
        <section className="more-programs">
            <div className="container-fluid">
                <div className="row">
                    <img src={moreProgramsImg} alt="more-program" />
                    <div className="col-12 col-sm-7 offset-sm-5 col-md-6 offset-md-6 col-xl-5 offset-xl-7 content">
                        <h2>Chcesz posłuchać <strong>więcej audycji?</strong></h2>
                    <Link className="btn btn-2" to={{ pathname: `/audycje`, }} title="Audycje">Kliknij tutaj</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MorePrograms;