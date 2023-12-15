/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import Button from "../Button/Button";
import * as S from "./styles";

export const ButtonMain = ({ colorBtn, content, ...attrs }) => {
  const color = colorBtn === S.White ? S.White : S.Violet;

  return <Button {...attrs}>{content}</Button>;
};

export default ButtonMain;
