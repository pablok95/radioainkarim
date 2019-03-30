import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import HeaderPage from '../components/HeaderPage';
import image from '../images/o-radiu.jpg';


class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
        }
    }

    componentDidMount() {
        this.props.about.forEach(item => {
            const title = item.title.rendered;
            const content = item.content.rendered;

            this.setState({
                title,
                content,
            })
        })
    }

    render() {
        const { title, content } = this.state;

        return (
            <>
                <Helmet>
                    <title>O radiu - Radio Ain Karim</title>
                    <meta name="description" content="Katolickie radio działające przy parafii pw. Nawiedzenia NMP w Skomielnej Czarnej. Na antenie radia program stanowią refleksje, modlitwa i katecheza chrześcijańska, część czasu wypełnia jednak także muzyka - religijna i świecka. Rozgłośnia przełącza się na retransmisję programów innych, większych stacji diecezjalnych." />
                </Helmet>

                <HeaderPage title={title} srcImage={image} />

                <section className="section-padding">
                    <div className="container">
                        <div dangerouslySetInnerHTML={{
                            __html: content
                        }} />
                    </div>
                </section>
            </>
        );
    }
}

export default About;