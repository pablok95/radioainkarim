import React, { Component } from 'react';
import LastReportsItem from './LastReportsItem';
import Loader from '../components/Loader';




class LastReports extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reports: [],
        }
    }


    componentDidMount() {

        const reports = [...this.props.items].slice(0, 2);

        this.setState({
            reports,
        });
    }


    render() {

        const reports = this.state.reports.map(post =>
            <LastReportsItem
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
            <section className="last-reports section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                            <h2 className="section-header">Ostatnie <strong>reportaże</strong></h2>
                            <p>Nie zdążyłeś wysłuchać audycji, reportażu wydarzenia z naszej okolicy. Nic się nie martw wszystkie audycje i reportaże dostępne przez dłuższy czas możesz posłuchać na naszej stronie.</p>
                        </div>

                        {this.state.reports ? reports : <Loader />}
                    </div>
                </div>
            </section>
        );
    }
}

export default LastReports;