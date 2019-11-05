import React, { Component } from "react";
import { SWAPI } from "../config/keys";
import CardList from "./CardList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      members: [],
      searchField: ""
    };
  }

  componentDidMount() {
    const fetchData = async () => {
      try {
        const res = await fetch(SWAPI);
        const json = await res.json();
        this.setState({
          members: json.results
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }

  onSearchChange = e => {
    this.setState({
      searchField: e.target.value
    });
  };

  render() {
    console.log(this.state);
    const { members, searchField } = this.state;
    const filteredMembers = members.filter(member => {
      return member.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div>
        <h1>STAR WARD</h1>
        <input
          className="searchField"
          placeholder="Search member"
          onChange={this.onSearchChange}
        />
        <CardList members={filteredMembers} />
      </div>
    );
  }
}

export default App;
