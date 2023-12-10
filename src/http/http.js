/* eslint-disable prettier/prettier */
import axios from "axios";
import * as api from "./config";
import { store } from "../store/store";
import { KJUR } from "jsrsasign";
import { auth } from "../firebase";

export const databaseURL = axios.create({
  baseURL: api.BASE_URL,
  validateStatus: (status) => status < 500
});

let refreshTokenRequest = null;

async function requestValidAccessToken() {
  const user = store.getState().user;
  let accessToken = user.token;

  const {
    payloadObj: { exp: accessTokenExpires }
  } = KJUR.jws.JWS.parse(accessToken);
  const expireTime = accessTokenExpires;
  const now = Math.floor(Date.now() * 0.001);

  if (now >= expireTime) {
    if (refreshTokenRequest === null) {
      refreshTokenRequest = auth.currentUser.getIdToken();
    }

    const data = await refreshTokenRequest;
    accessToken = data;

    refreshTokenRequest = null;
  }

  return accessToken;
}

databaseURL.interceptors.request.use(async (config) => {
  if (config.skipAuth) {
    return config;
  }

  const accessToken = await requestValidAccessToken();

  return {
    ...config,
    url: `${config.url}&auth=${accessToken}`
  };
});

databaseURL.interceptors.response.use(
  (response) => {
    const {
      data: { errors },
      status
    } = response;

    if (status === 401) {
      store.dispatch();
    } else if (errors) {
      console.log("ошибки", errors);
    }
    return response;
  },
  (error) => Promise.reject(error)
);
