/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import NavigateBlock from "../NavigationBlock/Navi.jsx";
import * as S from "./styles.js";
import { Outlet } from "react-router-dom";
export default function MainBlock({ children }) {
  return (
    <>
      <S.WrapperStyle>
        <S.ContainerStyle>
          <NavigateBlock />
          <Outlet />
          {children}
        </S.ContainerStyle>
      </S.WrapperStyle>
    </>
  );
}
