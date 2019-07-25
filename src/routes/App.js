import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../styles/App.scss';
import RadioStream from '../layouts/RadioStream';
import Navigation from '../layouts/Navigation';
import Page from '../layouts/Page';
import Footer from '../layouts/Footer';
import Loader from '../components/Loader';
import WpRadioAinKarim from '../apis/WpRadioAinKarim';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      posts: [],
      news: [],
      archiveAuditions: [],
      reports: [],
      allNews: [],
      allAuditions: [],
      partners: [],
      about: [],
      concert: [],
      donate: [],
      privacyPolicy: [],
    }
  }

  componentDidMount() {
    this.getPosts();
    this.getPages();
  }

  componentDidUpdate(prevProps, prevState) {
    // Wyrenderuj się jeśli wszyskie dane będą pobrane
    if (this.state.posts.length === prevState.posts.length && this.state.about.length !== prevState.about.length)
      this.setState({ loaded: true });
    
  }

  getPosts = async () => {

    const resp = await WpRadioAinKarim.get('/posts', {
      params: {
        per_page: '50',
        status: 'publish'
      }
    });

    const news = resp.data.filter(item => item.categories.indexOf(7) !== -1);
    const allNews = resp.data.filter(item => item.categories.indexOf(2) !== -1);
    const allAuditions = resp.data.filter(item => item.categories.indexOf(3) !== -1);
    const archiveAuditions = resp.data.filter(item => item.categories.indexOf(5) !== -1);
    const reports = resp.data.filter(item => item.categories.indexOf(6) !== -1);
    const posts = resp.data;

    this.setState({
      posts,
      news,
      archiveAuditions,
      reports,
      allNews,
      allAuditions,
    });
  }

  getPages = async () => {
    const resp = await WpRadioAinKarim.get('/pages', {
      params: {
        status: 'publish'
      }
    });

    const about = resp.data.filter(item => item.id === 7);
    const concert = resp.data.filter(item => item.id === 15);
    const donate = resp.data.filter(item => item.id === 13);
    const privacyPolicy = resp.data.filter(item => item.id === 3);

    this.setState({
      about,
      concert,
      donate,
      privacyPolicy,
    });
  }

  render() {
    const { news, loaded } = this.state;

    return (
      <>
        <RadioStream />

        <Router>
          {!loaded ? <Loader /> : (
            <div className="App">
              {<Navigation />}
              {<Page data={this.state} />}
              {<Footer news={news} />}
            </div>
          )}
        </Router>

      </>
    );
  }
}

export default App;
