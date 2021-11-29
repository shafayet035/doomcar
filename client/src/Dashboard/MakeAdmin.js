import React, { useEffect, useState } from "react";
import Axios from "../config/instance";

const MakeAdmin = () => {
  const [email, setEmail] = useState();
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage("");
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    Axios.put(`/user/${email}`).then((res) => {
      console.log(res.data);
      setMessage("Admin Created");
      setEmail("");
    });
  };

  return (
    <div>
      <p className="text-center">{message ? message : ""}</p>
      <form
        onSubmit={submitHandler}
        className="d-flex justify-content-center align-items-center"
      >
        <input
          type="text"
          className="form-control w-50"
          placeholder="Enter Email to Make Admin"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="btn btn-primary ms-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default MakeAdmin;
