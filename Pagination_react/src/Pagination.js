import React, { Component } from 'react';

class Pagination extends Component {
  renderButtons() {
    const { perPage, total, onChange } = this.props;

    const pagesCount = Math.ceil(total / perPage);

    return Array.from(Array(pagesCount), (v, i) => (
      /*  i + 1 === this.props.activePage ? (
        <button
          className="active-page list-button"
          key={i}
          onClick={() => onChange(i + 1)}
        >
          {i + 1}
        </button>
      ) : (
        <button className="list-button" key={i} onClick={() => onChange(i + 1)}>
          {i + 1}
        </button>
      )*/

      <button
        className={
          i + 1 === this.props.activePage
            ? 'active-page list-button'
            : 'list-button'
        }
        key={i}
        onClick={() => onChange(i + 1)}
      >
        {i + 1}
      </button>
    ));
  }

  render() {
    return (
      <div>
        <button
          className="prev-next-button"
          onClick={() => this.props.onChange(this.props.activePage - 1)}
          disabled={this.props.activePage === 1}
        >
          Prev
        </button>

        {this.renderButtons()}

        <button
          className="prev-next-button"
          onClick={() => this.props.onChange(this.props.activePage + 1)}
          disabled={
            this.props.activePage ===
            Math.ceil(this.props.total / this.props.perPage)
          }
        >
          Next
        </button>
      </div>
    );
  }
}

export default Pagination;
