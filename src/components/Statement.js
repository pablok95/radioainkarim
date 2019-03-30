import React from 'react';
import Loader from '../components/Loader';

const Statement = (props) => {
    return (
        <div className="statement">
            {props.sending && <Loader />}
            <h3>{props.statement}</h3>
        </div>
    );
}

export default Statement;