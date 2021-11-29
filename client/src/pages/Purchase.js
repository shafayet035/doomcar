import React, { useEffect, useState } from "react";
import Cart from "../components/Cart";
import { useForm } from "react-hook-form";
import useFirebaseContext from "../hooks/useFirebaseContext";
import Axios from "../config/instance";
import { useHistory } from "react-router";

const Purchase = () => {
  const [cart, setCart] = useState();

  const { user } = useFirebaseContext();
  const history = useHistory();

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    const item = localStorage.getItem("cart");
    setCart(JSON.parse(item));
  }, []);

  const onSubmit = async (data) => {
    if (!cart) return alert("No Product to checkout");

    const result = await Axios.post("/order", {
      ...data,
      status: "pending",
      item: cart,
    });

    if (result.data.acknowledged) {
      localStorage.removeItem("cart");
      return history.push("/dashboard/my-orders");
    }
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-8">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="mb-4">Checkout Form</h2>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="mb-1">Full Name</label>
                <input
                  name="fullName"
                  required
                  type="text"
                  className="form-control"
                  placeholder="Full Name"
                  {...register("fullName")}
                  defaultValue={user.displayName}
                />
              </div>
              <div className="col-md-6">
                <label className="mb-1">E-mail</label>
                <input
                  name="email"
                  required
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  {...register("email")}
                  defaultValue={user.email}
                />
              </div>
              <div className="col-md-6">
                <label className="mb-1">Phone</label>
                <input
                  name="phone"
                  required
                  type="number"
                  className="form-control"
                  placeholder="Phone Number"
                  {...register("phone")}
                />
              </div>
              <div className="col-md-6">
                <label className="mb-1">Address</label>
                <input
                  name="address"
                  required
                  type="text"
                  className="form-control"
                  placeholder="Address"
                  {...register("address")}
                />
              </div>
              <div className="col-md-12">
                <label className="mb-1">Your Message (Optional)</label>
                <textarea
                  name="message"
                  className="form-control "
                  rows="5"
                  {...register("message")}
                />
              </div>
              <div className="col-md-12">
                <button
                  type="submit"
                  disabled={!cart ? true : false}
                  className="btn btn-primary"
                >
                  Place Order
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-4">
          <div className="shadow p-3 rounded">
            {cart ? (
              <Cart cart={cart} />
            ) : (
              <p>
                No Car Selected to Checkout. Please Select a Car and Checkout
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
