import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { GlobalStyles } from './GlobalStyles';
import { Routes } from './pages';
import { Header } from './components/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'unstated';
import { CounterContainer } from './state/CounterContainer';

const counter = new CounterContainer();

function boot() {
  return (
    <Provider inject={[counter]}>
      <Router>
        <Fragment>
          <GlobalStyles />
          <Header />
          <Routes />
        </Fragment>
      </Router>
    </Provider>
  );
}

render(boot(), document.getElementById('root'));
