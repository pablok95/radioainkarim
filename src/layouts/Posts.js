import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import TitleSection from '../components/TitleSection';
import PostItem from './PostItem';
import Loader from '../components/Loader';


class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            limit: this.props.limit,
        }
    }

    componentDidMount() {
        const posts = [...this.props.items].slice(0, this.props.limit);
        this.setState({
            posts,
        });
    }

    handleClick = () => {
        const limit = this.state.limit + this.props.limit;
        const posts = [...this.props.items].slice(0, limit);


        this.setState({
            posts,
            limit,
        })
    }

    render() {
        const {title, isPagination} = this.props;

        const posts = this.state.posts.map(post =>
            <PostItem
                key={post.id}
                id={post.id}
                slug={post.slug}
                categories={post.categories}
                title={post.title.rendered}
                author={post.author}
                date={post.date}
                excerpt={post.excerpt.rendered}
                content={post.content.rendered}
                mediaID={post.featured_media}
            />
        );

        return (
            <section className="section-padding fade">
                <div className="container">
                    {isPagination && 
                        (<Helmet>
                            <title>{title} - Radio Ain Karim</title>
                            <meta name="description" content="Katolickie radio działające przy parafii pw. Nawiedzenia NMP w Skomielnej Czarnej. Na antenie radia program stanowią refleksje, modlitwa i katecheza chrześcijańska, część czasu wypełnia jednak także muzyka - religijna i świecka. Rozgłośnia przełącza się na retransmisję programów innych, większych stacji diecezjalnych." />
                        </Helmet>)
                    }

                    <TitleSection title={title} description="Bądź na bieżąco" />

                    {!this.state.posts ? <Loader /> : (
                        <div className="row">
                            {posts}
                            {this.props.items.length > this.state.limit && isPagination ?
                                <button onClick={this.handleClick} className="btn btn-1 block-center" title="Więcej aktualności">Więcej aktualności</button> : null}
                        </div>
                    )}

                </div>
            </section>
        );
    }
}

export default Posts;