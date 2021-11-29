import { useState } from "react";
import useFirebaseContext from "../hooks/useFirebaseContext";
import Axios from "../config/instance";
import { useHistory } from "react-router";

const AddProduct = () => {
  const [imDis, setImDis] = useState(false);
  const [imLoading, setImgLoading] = useState(false);

  const { uploadImage } = useFirebaseContext();
  const history = useHistory();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
    price: 0,
  });

  const uploadImageHandler = async (image) => {
    setImgLoading(true);
    const result = await uploadImage(image);
    setFormData({ ...formData, image: result });
    setImgLoading(false);
    setImDis(true);
  };

  const onFormChangeHandler = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    Axios.post("/car", formData)
      .then((res) => {
        if (res.data.acknowledged) {
          history.push("/explore");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={submitHandler} className="row g-3 shadow p-3 ">
        <div className="col-md-12">
          <label>Car Name</label>
          <input
            name="name"
            type="text"
            className="form-control"
            placeholder="Car Name"
            onChange={(e) => onFormChangeHandler(e.target.name, e.target.value)}
          />
        </div>
        <div className="col-md-12">
          <label>Car Cost</label>
          <input
            name="price"
            type="number"
            className="form-control"
            placeholder="Car Cost"
            onChange={(e) => onFormChangeHandler(e.target.name, e.target.value)}
          />
        </div>
        <div className="col-md-12">
          <label>Car Description</label>
          <textarea
            className="form-control"
            rows="4"
            required
            name="description"
            onChange={(e) => onFormChangeHandler(e.target.name, e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label>Upload Cover Image</label>
          <input
            type="file"
            accept="image/png, image/gif, image/jpeg, image/jpg, image/webp"
            disabled={imLoading}
            onChange={(e) => uploadImageHandler(e.target.files[0])}
            className="form-control"
          />
          {imLoading ? <p>Uploading Image....</p> : ""}
        </div>
        <div className="col-md-6">
          <label>Or Enter Image Url</label>
          <input
            type="text"
            className="form-control"
            placeholder="Cover Url"
            required
            name="image"
            value={formData.image}
            onChange={(e) => onFormChangeHandler(e.target.name, e.target.value)}
            disabled={imDis || imLoading}
          />
        </div>
        <div className="col-md-6">
          <button type="submit" disabled={imLoading} className="btn btn-white">
            Add Event
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
