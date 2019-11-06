import React from "react";
import Card from "./Card";

const CardList = ({ members }) => {
  return (
    <div className="listContainer">
      {members.map((member, i) => {
        return <Card key={i} name={member.name} birth={member.birth_year} />;
      })}
    </div>
  );
};

export default CardList;
