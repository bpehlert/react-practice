import React, { useState } from "react";
import SearchField from "./SearchField";
import CardList from "./CardList";
import { SWAPI } from "./config/keys";

const App = () => {
  const [people, setPeople] = useState([]);
  const [searchField, setSearchField] = useState("");

  const fetchData = (async () => {
    const res = await fetch(SWAPI);
    const json = await res.json();
    setPeople(json.results);
  })();

  const onSearchChange = e => {
    setSearchField(e.target.value);
  };

  const filteredPeople = people.filter(person => {
    return person.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <div>
      <h1>Star Ward</h1>
      <SearchField onSearchChange={onSearchChange} />
      <CardList people={filteredPeople} />
    </div>
  );
};

export default App;

// class App extends Component {
//     constructor() {
//       super();
//       this.state = {
//         people: [],
//         searchField: ""
//       };
//     }

//     componentDidMount() {
//       this.fetchData();
//     }

//     fetchData = async () => {
//       const res = await fetch(SWAPI);
//       const json = await res.json();
//       this.setState({ people: json.results });
//     };

//     onSearchChange = e => {
//       this.setState({
//         searchField: e.target.value
//       });
//     };

//     render() {
//       const { people, searchField } = this.state;

//       const filteredPeople = people.filter(person => {
//         return person.name.toLowerCase().includes(searchField.toLowerCase());
//       });

//       return (
//         <div>
//           <h1>Star Ward</h1>
//           <SearchField onSearchChange={this.onSearchChange} />
//           <CardList people={filteredPeople} />
//         </div>
//       );
//     }
//   }

//   export default App;
