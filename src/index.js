import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './routes/App';
import * as serviceWorker from './serviceWorker';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faPhone, faMapMarkerAlt, faFileInvoiceDollar, faDonate, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faEnvelope, faPhone, faMapMarkerAlt, faFileInvoiceDollar, faDonate, faExclamationCircle);


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
