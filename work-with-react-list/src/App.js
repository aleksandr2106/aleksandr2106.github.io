import React, { Component } from 'react';
import countries from './countries';
import './App.css';

class App extends Component {
  state = {
    query: '',
    order: false,
  };

  handleClick = () => {
    this.setState({
      order: !this.state.order,
    });
  };

  clearInput = () => {
    this.setState({
      query: '',
    });
  };

  render() {
    const { query } = this.state;
    const filteredCountries = countries.filter(c =>
      c.toLowerCase().includes(query.toLowerCase())
    );
    let order = this.state.order ? (
      <ul>
        {filteredCountries.reverse().map(c => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    ) : (
      <ul>
        {filteredCountries.map(c => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    );
    return (
      <div>
        <input
          onChange={e => this.setState({ query: e.target.value })}
          value={query}
        />

        <button onClick={this.handleClick.bind(this)}>Reverse</button>
        <button onClick={this.clearInput.bind(this)}>Clear</button>
        {query && (
          <p>
            Found {filteredCountries.length} / {countries.length}; for "{query}"{' '}
          </p>
        )}
        <ul>
          {filteredCountries.map(c => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
