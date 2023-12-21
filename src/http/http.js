/* eslint-disable prettier/prettier */
import axios from "axios";
import * as api from "./config";

export const databaseURL = axios.create({
  baseURL: api.BASE_URL,
  validateStatus: (status) => status < 500
});

export default databaseURL;
