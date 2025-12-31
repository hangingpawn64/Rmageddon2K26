import React from "react";
import "./Card.css";

const Card = ({ title, description, image }) => {
  return (
    <div className="card">
      <div className="card-img-shadow">
        <img src={image} alt={title} />
      </div>

      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>

        <div className="button-shadow">
          <div className="card-button">View More</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
