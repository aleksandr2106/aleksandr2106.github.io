import React, { Component } from 'react';
import './App.css';
import countries from './countries';
import Pagination from './Pagination';

class App extends Component {
  itemsPerPage = 10;
  state = {
    currentPage: 1,
    itemsPerPage: this.itemsPerPage,
    countPage: Math.ceil(countries.length / this.itemsPerPage),
  };

  handlePageNumberButton = number => {
    this.setState({
      currentPage:
        number > 0 && number <= this.state.countPage
          ? number
          : this.state.currentPage,
    });
  };

  render() {
    const { currentPage, itemsPerPage } = this.state;

    const itemStart = (currentPage - 1) * itemsPerPage;
    const itemEnd = itemStart + itemsPerPage;

    const countriesToShow = countries.slice(itemStart, itemEnd);

    return (
      <div>
        <ul>
          {countriesToShow.map(c => (
            <li key={c}>{c}</li>
          ))}
        </ul>
        <div>
          <Pagination
            perPage={itemsPerPage}
            total={countries.length}
            onChange={this.handlePageNumberButton}
            activePage={currentPage}
          />
        </div>
      </div>
    );
  }
}

export default App;
