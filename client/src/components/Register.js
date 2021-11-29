import { useForm } from "react-hook-form";
import useFirebaseContext from "../hooks/useFirebaseContext";

const Register = () => {
  const { register, handleSubmit } = useForm();

  const { registerUser, error } = useFirebaseContext();

  const onSubmit = (data) => {
    registerUser(data.fullName, data.email, data.password);
  };

  return (
    <div>
      <h2 className="mb-4">Sign up with email and Password</h2>
      <form className="auth-form mb-3" onSubmit={handleSubmit(onSubmit)}>
        {error && <p>{error}</p>}
        <div>
          <label className="mb-2">Full Name</label>
          <input
            type="text"
            placeholder="Full Name"
            className="form-control mb-3"
            {...register("fullName")}
          />
        </div>
        <div>
          <label className="mb-2">Email</label>
          <input
            type="email"
            placeholder="Email"
            className="form-control mb-3"
            {...register("email")}
          />
        </div>
        <div>
          <label className="mb-2">Password</label>
          <input
            type="password"
            placeholder="Password"
            className="form-control mb-3"
            {...register("password")}
          />
        </div>
        <button className="btn btn-sm ">Reguster</button>
      </form>
    </div>
  );
};

export default Register;
