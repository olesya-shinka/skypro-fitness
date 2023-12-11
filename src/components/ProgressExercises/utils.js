/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
export const calculator = (done, quantity) => {
  return Math.ceil((done / quantity) * 100) <= 100
    ? Math.ceil((done / quantity) * 100)
    : 100;
};
