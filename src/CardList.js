import React from "react";
import Card from "./Card";

const CardList = ({ people }) => {
  return (
    <div className="listContainer">
      {people.map((person, i) => {
        return <Card key={i} name={person.name} birth={person.birth_year} />;
      })}
    </div>
  );
};

export default CardList;
