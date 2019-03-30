import React from 'react';
import Loader from '../components/Loader';
import Sidebar from '../layouts/Sidebar';
import FormatDate from '../components/FormatDate';
import WpRadioAinKarim from '../apis/WpRadioAinKarim';


class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            author: '',
            content: '',
            date: '',
            imageSrc: '',
            title: '',
        }
    }

    componentDidMount() {
        this.getContent();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.url !== this.props.match.url) {
            this.getContent();
            this.setState({
                imageSrc: '',
                author: '',
                loaded: false,
            })
        }
    }

    getContent = async () => {
        const reg = /(\w+)([^/])+$/gi;
        const result = reg.exec(this.props.match.url);
        const slug = result[0];

        const resp = await WpRadioAinKarim.get('/posts', {
            params: {
                slug: slug,
            }
        });

        this.getImage(resp.data[0].featured_media);
        this.getAuthor(resp.data[0].author);

        this.setState({
            loaded: true,
            content: resp.data[0].content.rendered,
            date: resp.data[0].date,
            title: resp.data[0].title.rendered,
        });
    }

    getImage = async (imageID) => {
        const resp = await WpRadioAinKarim.get(`/media/${imageID}`);
        this.setState({ imageSrc: resp.data.source_url });
    }

    getAuthor = async (authorID) => {
        const resp = await WpRadioAinKarim.get(`/users/${authorID}`);
        this.setState({ author: resp.data.name });
    }

    render() {
        const { loaded, author, content, date, imageSrc, title } = this.state;

        return (
            <section className="section-padding post">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-8">
                            {!loaded ? <Loader /> : (
                                <div className="content">
                                    <img src={imageSrc} alt="Zdjecie" />
                                    <div className="info"><span className="accent-color">{author}</span> | <FormatDate date={date} /></div>
                                    <h2 className="title">{title}</h2>

                                    <div dangerouslySetInnerHTML={{
                                        __html: content
                                    }} />
                                </div>
                            )}
                        </div>

                        <div className="col-12 col-lg-4">
                            <Sidebar />
                        </div>

                    </div>

                </div>
            </section>

        );
    }
}

export default Post;