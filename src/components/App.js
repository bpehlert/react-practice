import React, { Component } from "react";
import { SWAPI } from "../config/keys";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Loading from "./Loading";

class App extends Component {
  constructor() {
    super();
    this.state = {
      members: [],
      searchField: ""
    };
  }

  componentDidMount() {
    const fetchData = async url => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        this.setState({
          members: data.results
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData(SWAPI);
  }

  onSearchChange = e => {
    this.setState({
      searchField: e.target.value
    });
  };

  render() {
    console.log(this.state.members.length > 0 ? "Members" : "Loading...");
    const { members, searchField } = this.state;

    const filteredMembers = members.filter(member => {
      return member.name
        .toLowerCase()
        .includes(searchField.toLocaleLowerCase());
    });

    return (
      <div>
        <h1>Star Ward</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        {members.length > 0 ? (
          <CardList members={filteredMembers} />
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}

export default App;
