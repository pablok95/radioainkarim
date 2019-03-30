import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Loader from '../components/Loader';
import WpRadioAinKarim from '../apis/WpRadioAinKarim';



class ArchiveProgramsItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            authorName: '',
            authorDesc: '',
            loaded: false,
        }
    }

    componentDidMount() {
        this.getAuthor(this.props.author);
    }


    getAuthor = async (authorID) => {
        const resp = await WpRadioAinKarim.get(`/users/${authorID}`);

        this.setState({
            authorName: resp.data.name,
            authorDesc: resp.data.description,
            loaded: true
        });
    }

    render() {

        const { title, excerpt, slug } = this.props;

        return (
            <div className="col-12 col-md-8 offset-md-2">
                {!this.state.loaded ? <Loader /> : (
                    <div className="item-wrapper archive-program-item">

                        <div className="content">
                            <Link to={{ pathname: `/audycje/${slug}` }} title={title}>
                                <h3 className="title">{title}</h3>
                            </Link>

                            <div dangerouslySetInnerHTML={{
                                __html: excerpt.slice(0, 320) + " (...)"
                            }} />

                            <h4 className="author-name">{this.state.authorName}</h4>
                            <p className="author-desc">{this.state.authorDesc}</p>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default ArchiveProgramsItem;