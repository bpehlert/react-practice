import React from "react";

const Card = ({ name, birth }) => {
  return (
    <div className="card">
      <img
        src={`https://robohash.org/${name}?size=150x150`}
        alt="profile_photo"
      />
      <div>
        <h2>{name}</h2>
        <p>Birth: {birth}</p>
      </div>
    </div>
  );
};

export default Card;
