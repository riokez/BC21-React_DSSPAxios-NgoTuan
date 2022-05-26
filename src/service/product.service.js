import axios from "axios";
import { BASE_URL } from "../ListProduct/configURL";

export let productService = {
  getDataProduct: () => {
    return axios({
      url: BASE_URL,
      method: "GET",
    });
  },
  postDataProduct: (data) => {
    return axios({
      url: BASE_URL,
      method: "POST",
      data: data,
    });
  },
  deleteDataProduct: (id) => {
    return axios({
      url: `${BASE_URL}/${id}`,
      method: "DELETE",
    });
  },
  getIdDataProduct: (id) => {
    return axios({
      url: `${BASE_URL}/${id}`,
      method: "GET",
    });
  },
  putDataProduct: (id, data) => {
    return axios({
      url: `${BASE_URL}/${id}`,
      method: "PUT",
      data: data,
    });
  },
};
