import React, { Component } from 'react';
import NewsNav from '../components/NewsNav';
import Loader from '../components/Loader';
import WpRadioAinKarim from '../apis/WpRadioAinKarim';
// import NewsNav from './NewsNav';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            news: [],
        }
    }

    componentDidMount() {
        this.getPosts();
    }

    getPosts = async () => {

        const resp = await WpRadioAinKarim.get(`/posts`, {
            per_page: 8,
        });

        this.setState({
            loaded: true,
            posts: resp.data
        });
    }

    render() {

        return (
            <aside className="sidebar">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-12">
                        <h3 className="title-side ts-first">Najnowsze wpisy</h3>
                        <div className="content">
                            {!this.state.loaded ? <Loader /> : <NewsNav news={this.state.posts} />}
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-12">
                        <h3 className="title-side">Transmisje</h3>
                        <div className="content">
                            <h4>Msze święte</h4>

                            <p><b>Dni powszednie:</b> 7:00 - 18:00</p>
                            <p><b>Niedziela:</b> 7:00, 8:30, 11:00 (suma), 18:00</p>

                            <h4>Adoracja Najświętszego Sakramentu</h4>
                            <p>Zapraszamy na adorację w każdy czwartek od 20:00 do 21:00</p>
                        </div>
                    </div>
                </div>
            </aside>
        );
    }
}

export default Sidebar;