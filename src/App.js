import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from './routes';
import Header from './Components/Header';

import history from './Services/history';
import store from './Store';

export default function App() {
 return (
  <Provider store={store}> 
   <Router history={history}>
    <Header/>
    <Routes/>
   </Router>
  </Provider> 
 );
}