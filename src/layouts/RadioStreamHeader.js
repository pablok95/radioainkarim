import React from 'react';
import RadioStreamButton from '../components/RadioStreamButton';
import RadioStreamProgramInfo from '../components/RadioStreamProgramInfo';


const RadioLiveHeader = (props) => {
    return (
        <header className="header-player">
            <span>Kliknij by <strong>posłuchać radia</strong></span>

            <RadioStreamButton bg={'#1996ff'} color={'#ffffff'} streamActive={props.streamActive} click={props.click} />

            <div className="content">
                <span className="accent-color text-uppercase font-weight-bold">Teraz na antenie</span>
                <RadioStreamProgramInfo />
            </div>

        </header>
    );
}

export default RadioLiveHeader;