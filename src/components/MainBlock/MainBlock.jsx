/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
//import { useState } from "react";
import NavigateBlock from "../NavigationBlock/Navi.jsx";
import * as S from "./styles.js";
//import { useEffect } from "react";

export default function MainBlock({ children }) {
  return (
    <>
      <S.WrapperStyle>
        <S.ContainerStyle  >
          <NavigateBlock />
          {children}
        </S.ContainerStyle>
      </S.WrapperStyle>
    </>
  );
}

// export default function MainBlock({ children, backgroundColor }) {
//   //const[UrlBackgroundColor, setUrlBackgroundColor] = useState('');
//   // const getUrl = window.location.pathname;
//   // useEffect(() => {
//   //     if(getUrl === '/'){
//   //      // console.log("running")
//   //       setUrlBackgroundColor('#271a58');
//   //     }else{
//   //         setUrlBackgroundColor('#271a58');
//   //     }
//   //   },[getUrl]);// фон меняется только при ручном обновлении страницы
//     return (
//       <>
//         <S.WrapperStyle>
//           <S.ContainerStyle style={{backgroundColor: UrlBackgroundColor}}>
//             <NavigateBlock />
//             {children}
//           </S.ContainerStyle>
//         </S.WrapperStyle>
//       </>
//     );
//   }