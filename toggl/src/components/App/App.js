import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import TogglMain from '../TogglMain';
import Dashboard from '../Dashboard';
import Reports from '../Reports';
import EasterEgg from '../EasterEgg';
class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={TogglMain} exact />
        <Route path="/dashboard" component={Dashboard} exact />
        <Route path="/reports" component={Reports} exact />
        <Route path="/help" component={EasterEgg} exact />
      </div>
    );
  }
}

export default App;
