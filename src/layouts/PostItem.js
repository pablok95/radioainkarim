import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import FormatDate from '../components/FormatDate';
import WpRadioAinKarim from '../apis/WpRadioAinKarim';
import altImage from '../images/koncert.jpg';


class PostItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageSrc: altImage,
        }
    }

    componentDidMount() {
        if (this.props.mediaID)
            this.getPostImage(this.props.mediaID);
    }

    getPostImage = async (mediaID) => {
        const resp = await WpRadioAinKarim.get(`/media/${mediaID}`);

        this.setState({
            imageSrc: resp.data.media_details.sizes.medium.source_url,
        });
    }

    render() {
        const { title, excerpt, slug, categories, date } = this.props;

        return (
            <div className="col-12 col-lg-6">
                {!this.state.imageSrc ? <Loader /> : (
                    <div className="news-item">
                        <div className="img-wrapper">
                            <img className="img" src={this.state.imageSrc} alt={title} />
                        </div>
                        <div className="content">
                            <Link to={{ pathname: `/${categories.filter(cat => cat === 2).length ? 'aktualnosci' : 'audycje'}/${slug}` }}
                                title={title} className="title-item">{title}&nbsp;<FormatDate date={date} />
                            </Link>

                            <div className="excerpt-item" dangerouslySetInnerHTML={{
                                __html: excerpt.slice(0, 150) + "..."
                            }} />
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default PostItem;