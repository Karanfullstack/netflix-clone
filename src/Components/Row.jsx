import React from "react";
import "./Styles/row.scss";

const imgUrl = "https://image.tmdb.org/t/p/w500";

const Card = ({ img }) => <img className="card" src={img} alt="cover" />;

const Row = ({ title, arr = [] }) => {
  return (
    <div className="row">
      <h2>{title}</h2>

      <div>
        {arr.map((item, index) => (
          <Card key={index} img={`${imgUrl}/${item.poster_path}`} />
        ))}
      </div>
    </div>
  );
};

export default Row;
