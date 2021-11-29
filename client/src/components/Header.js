import { Link, NavLink } from "react-router-dom";
import useFirebaseContext from "../hooks/useFirebaseContext";

const Header = () => {
  const { user, logOut } = useFirebaseContext();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Doom Cars
        </Link>
        <button
          className="navbar-toggler "
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/"
                exact
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/explore"
                exact
              >
                Explore
              </NavLink>
            </li>

            {!user ? (
              <>
                <li>
                  <NavLink
                    className="nav-link"
                    activeClassName="active"
                    to="/auth"
                    exact
                  >
                    Sign in
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeClassName="active"
                    to="/dashboard"
                    exact
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <span className="nav-link">{user.displayName}</span>
                </li>
                <li className="nav-item">
                  <span
                    onClick={logOut}
                    className="nav-link text-warning pointer"
                  >
                    Logout
                  </span>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
