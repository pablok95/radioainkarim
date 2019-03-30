import React from 'react';

const TitleSection = (props) => {
    const { title, description, subtitle } = props;

    return (
        <div className="title-section">
            <span className="description">{description}</span>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
        </div>
    );
}

export default TitleSection;