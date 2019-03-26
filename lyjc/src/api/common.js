import axios from "./http";
import qs from "qs";
const common = {
  login(params) {
    return axios.get("/api/login/index", { params });
  },
  refresh(params) {
    return axios.post("/api/login/getSubscribe", qs.stringify(params));
  }
};

export default common;
