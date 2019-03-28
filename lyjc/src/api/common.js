import axios from "./http";
// import qs from "qs";
const common = {
  search(params) {
    return axios.get("/api/index/inquire", { params });
  },
  getques(params) {
    return axios.get("/api/Questionnaire/getNaires", { params });
  },
  sendques(params) {
    return axios.post("/api/Questionnaire/nairesAnswer", params);
  }
};

export default common;
