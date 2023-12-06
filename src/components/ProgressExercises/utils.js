export const calculator = (done, quantity) => {
  return Math.ceil((done / quantity) * 100) <= 100
    ? Math.ceil((done / quantity) * 100)
    : 100;
};
