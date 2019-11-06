import React from "react";

const Card = ({ name, birth }) => {
  return (
    <div className="card">
      <img
        src={`https://www.robohash.org/${name}/?size=150x150`}
        alt="profile_img"
      />
      <h3>{name}</h3>
      <h5>{birth}</h5>
    </div>
  );
};

export default Card;
