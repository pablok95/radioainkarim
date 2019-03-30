import React, { Component } from 'react';
import Loader from '../components/Loader';
import ArchiveProgramsItem from './ArchiveProgramsItem';



class ArchivePrograms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            archives: [],
        }
    }


    componentDidMount() {

        const archives = [...this.props.items].slice(0, 2);

        this.setState({
            archives,
        });
    }


    render() {

        const archives = this.state.archives.map(post =>
            <ArchiveProgramsItem
                key={post.id}
                id={post.id}
                slug={post.slug}
                title={post.title.rendered}
                author={post.author}
                date={post.date}
                excerpt={post.excerpt.rendered}
                content={post.content.rendered}
                mediaID={post.featured_media}
            />
        );

        return (
            <section className="section-padding" style={{background: '#fdfdfd'}}>
                <div className="container">
                    <h2 className="section-header">Archiwum <strong>audycji</strong></h2>

                    <div className="row">
                        {this.state.archives ? archives : <Loader />}
                    </div>
                </div>
            </section>
        );
    }
}

export default ArchivePrograms;