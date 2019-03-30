import axios from "./http";
import qs from "qs";
const common = {
  search(params) {
    return axios.get("/api/Service/index", { params });
  },
  getques(params) {
    return axios.get("/api/Questionnaire/getNaires", { params });
  },
  sendques(params) {
    return axios.post("/api/Questionnaire/nairesAnswer", params);
  },
  // 下载
  getdown(params) {
    return axios.get("/api/Certification/index", { params });
  },
  // 进度查询
  getjindu(params) {
    return axios.get("/api/Verification/index", { params });
  },
  getyijian(params) {
    return axios.post("/api/Feedback/index", params);
  },
  getposition(params) {
    return axios.get("/api/Expatriate/index", { params });
  },
  getcontact(params) {
    return axios.get("/api/contactus/index", { params });
  }
};

export default common;
