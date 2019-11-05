import React from "react";
import Card from "./Card";

const CardList = ({ members }) => {
  return (
    <div className="listContainer">
      {members.map((person, i) => {
        return <Card key={i} name={person.name} />;
      })}
    </div>
  );
};

export default CardList;
