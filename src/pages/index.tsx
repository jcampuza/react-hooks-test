import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from './Home';

export function Routes() {
  return <Route path="/" component={Home} />;
}
