import React from 'react';
import {render} from 'react-dom';

import App from './components/App';

import {Store} from 'react-chrome-redux';
import {WrapStore} from 'react-chrome-redux';

import {createStore} from './store';

import {Provider} from 'react-redux';

const proxyStore = new Store({portName: 'example'});

setInterval(() => {
    proxyStore.dispatch({type: 'INCREMENT'});
}, 1000);

proxyStore.subscribe(() => {
    console.log('increment');
});

render(
    <Provider store={proxyStore}><App /></Provider>
  , document.getElementById('app')
);
