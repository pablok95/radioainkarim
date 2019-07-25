import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import About from '../pages/About';
import Program from '../pages/Program';
import Volunteers from '../pages/Volunteers';
import Management from '../pages/Management';
import Contact from '../pages/Contact';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import Post from '../pages/Post';
import ErrorPage from '../pages/ErrorPage';
import Posts from './Posts';


const Page = (props) => {
    const { data } = props;

    return (
        <>
            <Switch>
                <Route path="/" exact component={
                    () => <HomePage
                        news={data.news}
                        reports={data.reports}
                        archiveAuditions={data.archiveAuditions}
                        donate={data.donate}
                        concert={data.concert} />
                } />

                <Route path="/o-radiu" exact component={
                    () => <About about={data.about} />
                } />

                <Route path="/ramowka" exact component={Program} />

                <Route path="/aktualnosci" exact component={
                    () => <Posts title="Aktualności" items={data.allNews} limit={8} isPagination={true} />} />

                <Route path="/audycje" exact component={
                    () => <Posts title="Audycje" items={data.allAuditions} limit={8} isPagination={true} />} />
                } />

                <Route path="/wolontariusze" exact component={Volunteers} />
                <Route path="/zarzad" exact component={Management} />
                <Route path="/kontakt" exact component={Contact} />

                <Route path="/polityka-prywatnosci" exact component={
                    () => <PrivacyPolicy privacyPolicy={data.privacyPolicy} />
                } />

                <Route path="/aktualnosci/:news" exact component={Post} />
                <Route path="/audycje/:auditions" exact component={Post} />
                <Route component={ErrorPage} />
            </Switch>
        </>
    );
}

export default Page;