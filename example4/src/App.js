// renderPagination() {
//   const { itemsPerPage } = this.state;
//   const pagesCount = Math.ceil(countries.length / itemsPerPage);
//   // const buttons = [];
//   //
//   // for (let i = 1; i <= pagesCount; i++) {
//   //   buttons.push(
//   //     <button key={i} onClick={() => this.handlePAgeChange(i)}>
//   //       {i}
//   //     </button>
//   //   );
//   // }
//   //
//   // return buttons;
//
//   return Array.from(Array(pagesCount), (v, i) => (
//     <button key={i} onClick={() => this.handlePAgeChange(i + 1)}>
//       {i + 1}
//     </button>
//   ));
// }

import React, { Component } from 'react';
import './App.css';
import countries from './countries';
import Pagination from './Pagination';

class App extends Component {

  state = {
    itemsPerPage = 10;
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
