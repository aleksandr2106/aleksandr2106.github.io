import React, { Component } from 'react';

class List extends Component {
  state = {
    currentValue: '',
    items: [],
  };
  addItem = () => {
    const { currentValue, items } = this.state;

    this.setState({
      items: [
        ...items,
         currentValue
      ],
      currentValue: '',
    });
  };
  updateCurrentValue = (e) => {
    this.setState({
      currentValue: e.target.value,
    });
  };

  render() {
    const listItems = this.items.map((number) =>
    <li>{number}</li>);
    return (
      <div>
        <ul>
        {listItems}
        </ul>

        <input onChange={this.updateCurrentValue} />
        <button onClick={() => this.addItem()}>Add</button>
      </div>
    );
  }
}

export default List;
