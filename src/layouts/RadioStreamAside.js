import React from 'react';
import RadioStreamButton from '../components/RadioStreamButton';


const RadioStreamAside = (props) => {

    return (
        <div>
            <RadioStreamButton bg={'#fff'} color={'#000'} streamActive={props.streamActive} click={props.click} />
            <div className="content">
                {props.streamActive ? <span>Kliknij by wyłączyć <strong>radio</strong></span> :
                    <span>Kliknij i&nbsp;słuchaj <strong>Naszego Radia</strong></span>}
            </div>
        </div>
    );
}

export default RadioStreamAside;