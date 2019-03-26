import React, { Component } from "react";
import Pagination from "../Pagination";
import { connect } from "react-redux";
import * as personActions from "../../redux/actions/person";
import axios from "axios";
import person from "./person";
import "./App.scss";
import "./reset.css";

class App extends Component {
  itemsPerPage = 5;
  state = {
    currentPage: 1,
    itemsPerPage: this.itemsPerPage,
    countPage: Math.ceil(person.users.length / this.itemsPerPage)
  };

  handlePageNumberButton = number => {
    this.setState({
      currentPage:
        number > 0 && number <= this.state.countPage
          ? number
          : this.state.currentPage
    });
  };

  componentDidMount() {
    person.users.map(userInfo => this.props.fetchUserInfo(userInfo));
  }

  render() {
    const { currentPage, itemsPerPage } = this.state;

    const itemStart = (currentPage - 1) * itemsPerPage;
    const itemEnd = itemStart + itemsPerPage;

    const personToShow = this.props.persons.slice(itemStart, itemEnd);

    return (
      <div className="app">
        <ul className="full_list">
          {personToShow.map(c => (
            <li className="person_info" key={c["id"]}>
              <p>
                Full Name: {c["name"]} {c["surname"]}
              </p>
              <p>{c["desc"]}</p>
            </li>
          ))}
        </ul>
        <div>
          <Pagination
            perPage={itemsPerPage}
            total={person.users.length}
            onChange={this.handlePageNumberButton}
            activePage={currentPage}
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  persons: state.persons
});

const mapDispatchToProps = {
  fetchUserInfo: personActions.addPerson
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
