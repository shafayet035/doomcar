import axios from "axios";

const Axios = axios.create({
  baseURL: "https://secure-tor-89698.herokuapp.com",
});

export default Axios;
