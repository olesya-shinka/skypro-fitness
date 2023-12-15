/* eslint-disable prettier/prettier */
export const emailSelector = (store) => store.user.email;

export const tokenSelector = (store) => store.user.token;

export const idSelector = (store) => store.user.id;

export const passwordSelector = (store) => store.user.password;

export const selectUser = (state) => state.user;
