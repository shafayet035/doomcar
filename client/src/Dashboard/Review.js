import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import Axios from "../config/instance";
import useFirebaseContext from "../hooks/useFirebaseContext";

const Review = () => {
  const { register, handleSubmit } = useForm();

  const { user } = useFirebaseContext();

  const history = useHistory();

  const onSubmit = async (data) => {
    const result = await Axios.post("/review", data);

    if (result.data) {
      history.push("/");
    }
  };

  return (
    <div>
      <h2 className="text-center">Write a Review</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="w-50 mx-auto">
        <input
          type="text"
          placeholder="Full Name"
          className="form-control mb-3"
          {...register("fullName")}
          defaultValue={user.displayName}
        />
        <textarea
          {...register("review")}
          placeholder="Write Review"
          className="form-control mb-3"
        />
        <label>Rating</label>
        <select {...register("rating")} className="form-select mb-3">
          <option value="5">5</option>
          <option value="4">4</option>
          <option value="3">3</option>
          <option value="2">2</option>
          <option value="1">1</option>
        </select>
        <button className="btn btn-black">Submit</button>
      </form>
    </div>
  );
};

export default Review;
