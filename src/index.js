import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux';

import './index.css'
import App from './App'
import {store} from './helpers/store';
import * as serviceWorker from './serviceWorker'
import {history} from "./helpers/history";
import {Router} from "react-router-dom";

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root'));
serviceWorker.unregister();
