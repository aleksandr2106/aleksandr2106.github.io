import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Elements/Header';
import PageOne from './Views/PageOne';
import PageTwo from './Views/PageTwo';
import PageThree from './Views/PageThree';
import NotFound from './Views/NotFound';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Switch>
          <Route component={PageOne} path="/" exact />
          <Route component={PageTwo} path="/two/:itemId" />
          <Route component={PageThree} path="/three" exact />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
