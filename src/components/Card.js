import React from "react";

const Card = ({ name }) => {
  return (
    <div className="card">
      <img
        src={`https://robohash.org/${name}starward?size=150x150`}
        alt="profile_image"
      />
      <h3>{name}</h3>
    </div>
  );
};

export default Card;
