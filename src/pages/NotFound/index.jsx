import { NavLink } from "react-router-dom";
import * as S from "./styles";

export const NotFound = () => {
  return (
    <S.Wrapper>
      <S.Text>The page was not found</S.Text>
      <S.Error>404</S.Error>
      <NavLink to={"/"}>Go HOME</NavLink>
    </S.Wrapper>
  );
};

export default NotFound;
