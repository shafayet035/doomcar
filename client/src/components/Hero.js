import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="py-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center">
            <div className="ps-3">
              <h2 className="display-3">Doom Cars</h2>
              <p className="lead">In Doom Cars, You Can Find Best Deal</p>
              <Link to="/explore" className="btn btn-black">
                Explore Cars
              </Link>
            </div>
          </div>
          <div className="col-md-6 ">
            <img
              src="https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg"
              alt=""
              className="img-fluid d-md-block d-none rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
