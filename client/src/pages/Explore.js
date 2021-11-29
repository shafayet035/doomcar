import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Axios from "../config/instance";

const Explore = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Axios.get("/cars").then((res) => {
      if (res.status === 200) {
        setProducts(res.data);
      } else {
        setProducts([]);
      }
    });
  }, []);

  return (
    <div className="container-fluid my-3">
      <div className="row">
        {products.map((el) => (
          <div className="col-md-6" key={el._id}>
            <Card car={el} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
