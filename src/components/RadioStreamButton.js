import React from 'react';


const RadioStreamButton = (props) => {

    return (

        <button
            title="Kliknij by posłuchać radia"
            onClick={() => props.click()}
            className="button"
            style={{
                background: props.bg,
                color: props.color,
            }}>

            {!props.streamActive ?
                <div className="play" style={{ borderLeftColor: `${props.color}` }}></div> :
                <div className="pause" style={{ borderColor: `${props.color}` }}></div>}

        </button>

    );
}

export default RadioStreamButton;