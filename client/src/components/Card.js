import React from "react";
import { useHistory } from "react-router";

const Card = ({ car }) => {
  const history = useHistory();

  const addToCart = () => {
    localStorage.setItem("cart", JSON.stringify(car));
    history.push("/purchase");
  };

  return (
    <div className="border-bottom  border-black border-2 mb-3">
      <img src={car.image} className="img-fluid" alt="" />
      <div className="card-body py-3 d-lg-flex align-items-end justify-content-between">
        <div>
          <h3 className="fs-light">
            {car.name} ---- ${car.price}
          </h3>
          <p>{car.description}</p>
        </div>
        <div className="p-3">
          <button onClick={addToCart} className="link">
            Buy Now <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
