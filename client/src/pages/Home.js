import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import ReviewCard from "../components/ReviewCard";
import Axios from "../config/instance";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    Axios.get("/cars?limit=6").then((res) => {
      if (res.status === 200) {
        setProducts(res.data);
      } else {
        setProducts([]);
      }
    });

    Axios.get("/reviews").then((res) => setReviews(res.data));
  }, []);

  return (
    <div>
      <Hero />
      <div className="container-fluid">
        <div className="row mb-3">
          {products.map((el) => (
            <div className="col-md-6" key={el._id}>
              <Card car={el} />
            </div>
          ))}
        </div>

        <div className="container pt-5">
          <h5 className="text-center">Customer Reviews</h5>
          <div className="reviews pb-5 d-flex align-items-center text-center justify-content-center">
            {reviews.map((el) => (
              <ReviewCard review={el} key={el._id} />
            ))}
          </div>
        </div>

        <Gallery />

        <div className="cta my-3">
          <h2>Largest Car Collection</h2>
          <p>
            Checkout New Releases SUV, Sedan, Hypercars, Supercars, Sports Cars
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
