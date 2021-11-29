import React, { useEffect, useState } from "react";
import Axios from "../config/instance";
import useFirebaseContext from "../hooks/useFirebaseContext";

const Orders = () => {
  const { user } = useFirebaseContext();

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getData(user.email);
  }, [user.email]);

  const getData = async (email) => {
    const { data } = await Axios.get(`/orders/${email}`);
    return setOrders(data);
  };

  const deleteHandler = (id) => {
    const r = window.confirm("Are you Sure?");
    if (r) {
      Axios.delete(`/order/${id}`).then((result) => {
        console.log(result.data);
        getData(user.email);
      });
    }
  };

  return (
    <div>
      <div className="table-responsive">
        <table className="table shadow-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Car Name</th>
              <th scope="col">Price</th>
              <th scope="col">User</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((el, index) => (
              <tr key={el._id}>
                <td>{index + 1}</td>
                <td>{el.item.name}</td>
                <td>${el.item.price}</td>
                <td>{el.fullName}</td>
                <td>{el.status}</td>
                <td>
                  <button
                    onClick={() => deleteHandler(el._id)}
                    className="btn btn-sm btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
