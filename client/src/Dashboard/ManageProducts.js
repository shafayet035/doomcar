import { useEffect, useState } from "react";
import Axios from "../config/instance";
import useFirebaseContext from "../hooks/useFirebaseContext";

const ManageProducts = () => {
  const { user } = useFirebaseContext();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await Axios.get(`/cars/`);
    return setProducts(data);
  };

  const deleteHandler = (id) => {
    const r = window.confirm("Are you Sure?");
    if (r) {
      Axios.delete(`/car/${id}`).then((result) => {
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
              <th scope="col">Image</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((el, index) => (
              <tr key={el._id}>
                <td>{index + 1}</td>
                <td>{el.name}</td>
                <td>
                  <img src={el.image} alt="" style={{ width: 80 }} />
                </td>
                <td>${el.price}</td>
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

export default ManageProducts;
