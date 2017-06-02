import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import Basic from './examples/basic';
import Fancy from './examples/extra';
import Provider from './examples/provider';

const examples = {
  Basic,
  Fancy,
  Provider
};

const App = () => (
  <Router>
    <div>
      <Route exact path="/" render={() => <h1>React Layout Core Examples!</h1>} />
      {Object.keys(examples).map(name => (
        <Link to={`/${name}`} key={name}>{name}</Link>
      ))}
      {Object.keys(examples).map(name => (
        <Route
          key={`route-${name}`}
          exact
          path={`/${name}`}
          component={examples[name]}
        />
      ))}
    </div>
  </Router>
);

export default App;