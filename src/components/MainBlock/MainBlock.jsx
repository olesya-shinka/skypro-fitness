// /* eslint-disable prettier/prettier */
// /* eslint-disable react/prop-types */
// /* eslint-disable prettier/prettier */

import NavigateBlock from "../NavigationBlock/Navi.jsx";
import * as S from "./styles.js";

export default function MainBlock({ children }) {
  return (
    <>
      <S.WrapperStyle>
        <S.ContainerStyle>
          <NavigateBlock />
          {children}
        </S.ContainerStyle>
      </S.WrapperStyle>
    </>
  );
}
