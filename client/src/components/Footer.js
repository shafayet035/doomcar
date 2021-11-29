import React from "react";

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-dark py-4 text-muted">
      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">DoomCars</h6>
              <p>In Doom Cars you can find all kinds of Reseller Cars</p>
            </div>

            <div className="col-md-4 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>Home</p>
              <p>Contact</p>
              <p>About</p>
              <p>Help</p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>info@doomcars.ink</p>
              <p>+ 01 234 567 88</p>
              <p>+ 01 234 567 89</p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-4">
        ©2021 All Copyright Reserved to Doom Cars
      </div>
    </footer>
  );
};

export default Footer;
