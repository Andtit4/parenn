import axios from "axios";
import { API_URL } from "../config";

const AxiosRequestConfig = {
  API_URL
};

const request = axios.create(AxiosRequestConfig);

export default request;
