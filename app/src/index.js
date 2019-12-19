import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './js/store/store';
import App from './js/App';

import './assets/scss/styles.scss';

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
