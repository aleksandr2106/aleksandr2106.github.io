import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import TogglMain from '../TogglMain';
import Dashboard from '../Dashboard';
import Reports from '../Reports';
import EasterEgg from '../EasterEgg';
import Insights from '../Insights';
import SavedReports from '../SavedReports';
import Projects from '../Projects';
import Clients from '../Clients';
import Team from '../Team';
import Workspaces from '../Workspaces';
import Tags from '../Tags';

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={TogglMain} exact />
        <Route path="/dashboard" component={Dashboard} exact />
        <Route path="/reports" component={Reports} exact />
        <Route path="/help" component={EasterEgg} exact />
        <Route path="/insights" component={Insights} exact />
        <Route path="/saved-reports" component={SavedReports} exact />
        <Route path="/projects" component={Projects} exact />
        <Route path="/clients" component={Clients} exact />
        <Route path="/team" component={Team} exact />
        <Route path="/workspaces" component={Workspaces} exact />
        <Route path="/tags" component={Tags} exact />
      </div>
    );
  }
}

export default App;
