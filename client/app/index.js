import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import axios from 'axios';
import Root from './quizzical/containers/Root';
import { configureStore, history } from './store/configureStore';
import './scss/main.global.scss';
import apiConfig from './config/api';

const store = configureStore();

axios.defaults.baseURL = apiConfig.baseUrl;

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./quizzical/containers/Root', () => {
    const NextRoot = require('./quizzical/containers/Root'); // eslint-disable-line global-require
    render(
      <AppContainer>
        <NextRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
