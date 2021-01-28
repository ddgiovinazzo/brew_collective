import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import {createBrewery, fetchAllBreweries} from './actions/brewery_actions'
import {fetchAllBeers} from './actions/beer_actions'


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.createBrewery = createBrewery;
  window.fetchAllBreweries = fetchAllBreweries;
  window.fetchAllBeers = fetchAllBeers;
  
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});