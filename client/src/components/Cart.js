import React from "react";

const Cart = ({ cart }) => {
  return (
    <div>
      <hr />
      <h5>Order Summery</h5>
      <ul className="list-group">
        <li className="list-group-item">Car Name: {cart.name}</li>
        <li className="list-group-item">Price: ${cart.price}</li>
        <li className="list-group-item">Dilevery: $500</li>
        <li className="list-group-item">Total: ${Number(cart.price) + 500}</li>
      </ul>
      <hr />
    </div>
  );
};

export default Cart;
