import React from 'react';

const FormatDate = (props) => {

    const formatDate = () => {
        const nameMounth = ['stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia', 'wrzesnia', 'października', 'listopada', 'grudnia'];

        const date = new Date(props.date);

        return `${date.getDate()} ${nameMounth[date.getMonth()]} ${date.getFullYear()}`;
    }

    return (
        <span className="date-item">{formatDate()}</span>
    );
}

export default FormatDate;