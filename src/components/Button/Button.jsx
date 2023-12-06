import * as S from "./styles";

const Button = ({ type, disabled, className, children, onClick, ...attrs }) => {
  return (
    <S.Btn {...attrs} type={type} disabled={disabled} onClick={onClick}>
      {children}
    </S.Btn>
  );
};

export default Button;
