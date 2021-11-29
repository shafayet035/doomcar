import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import Login from "../components/Login";
import Register from "../components/Register";
import useFirebaseContext from "../hooks/useFirebaseContext";

const Auth = () => {
  const [login, setLogin] = useState(true);

  const { user } = useFirebaseContext();

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (user) {
      history.push(location?.state?.from || "/dashboard");
    }
  }, [user, history, location?.state?.from]);

  return (
    <div className=" py-4 auth">
      {login ? <Login /> : <Register />}
      {login ? (
        <span className="pointer" onClick={() => setLogin(false)}>
          Create an Account
        </span>
      ) : (
        <span className="pointer" onClick={() => setLogin(true)}>
          Already have an Account? Login
        </span>
      )}
    </div>
  );
};

export default Auth;
