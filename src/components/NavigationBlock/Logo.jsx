import { NavLink } from "react-router-dom";
import * as S from "./styles";

const Logo = () => {
  return (
    <NavLink to = "/">
      <S.Contain>
      <img src="/img/logo.svg" alt="logo" />
    </S.Contain>
    </NavLink>

  );
};

export default Logo;
