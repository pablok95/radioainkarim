import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Loader from '../components/Loader';
import FormatDate from '../components/FormatDate';
import WpRadioAinKarim from '../apis/WpRadioAinKarim';




class LastReportsItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imageSrc: '',
            authorName: '',
            loaded: false,
        }
    }

    componentDidMount() {
        this.getImage(this.props.mediaID);
        this.getAuthor(this.props.author);
    }

    getImage = async (mediaID) => {

        const resp = await WpRadioAinKarim.get(`/media/${mediaID}`);

        this.setState({
            imageSrc: resp.data.media_details.sizes.medium.source_url,
            loaded: true
        });
    }


    getAuthor = async (authorID) => {

        const resp = await WpRadioAinKarim.get(`/users/${authorID}`);

        this.setState({
            authorName: resp.data.name,
        });
    }

    render() {

        const { title, excerpt, slug, date } = this.props;

        return (
            <div className="col-12 col-lg-10 offset-lg-1">
                {!this.state.loaded ? <Loader /> : (
                    <div className="item-wrapper last-reports-item">
                        <div className="img-wrapper">
                            <img className="img" src={this.state.imageSrc} alt="Zdjęcie" />
                        </div>
                        <div className="content">

                            <Link to={{ pathname: `/audycje/${slug}` }} title={title}><h3 className="title">{title}</h3>
                            </Link>

                            <h4><span className="author">{this.state.authorName}</span> <FormatDate date={date} /></h4>

                            <Link to={{ pathname: `/audycje/${slug}` }} title={title} className="btn btn-click-play">
                                <i className="play-icon"></i>
                                Kliknij by <span className="accent-color">odsłuchać</span>
                            </Link>

                            <div dangerouslySetInnerHTML={{
                                __html: excerpt.slice(0, 250) + " (...)"
                            }} />
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default LastReportsItem;