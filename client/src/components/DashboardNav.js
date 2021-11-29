import { NavLink, useRouteMatch } from "react-router-dom";
import useFirebaseContext from "../hooks/useFirebaseContext";

const DashboardNav = () => {
  const { url } = useRouteMatch();

  const { isAdmin } = useFirebaseContext();

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white px-3">
        <div className="">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarExample01"
            aria-controls="navbarExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarExample01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to={`${url}/pay`}>
                  Pay
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={`${url}/my-orders`}>
                  My Orders
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={`${url}/reviews`}>
                  Reviews
                </NavLink>
              </li>
              {isAdmin && (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={`${url}/add-product`}>
                      Add Product
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={`${url}/make-admin`}>
                      Make Admin
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={`${url}/manage-orders`}>
                      Manage Orders
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={`${url}/manage-products`}>
                      Manage Products
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default DashboardNav;
