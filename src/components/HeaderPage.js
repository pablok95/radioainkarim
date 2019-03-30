import React from 'react';

const HeaderPage = (props) => {
    const { srcImage, title } = props;

    return (
        <header className="page-header fade">
            <img className="img" src={srcImage} alt={title} />

            <div className="content">
                {
                    title ? <h1>{title}</h1> :
                        <>
                            <h1>Radio Ain Karim</h1>
                            <p>przy parafii Nawiedzenia NMP w Skomielnej Czarnej</p>
                            <span>104.4 FM</span>
                        </>
                }
            </div>
        </header>
    );
}

export default HeaderPage;