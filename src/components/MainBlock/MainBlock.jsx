import NavigateBlock from "../NavigationBlock/Navi.jsx"
import * as S from "./styles.js"
export default function MainBlock({children}){
return (<>
    <S.GlobalStyle />
        <S.WrapperStyle>
        <S.ContainerStyle>
            <NavigateBlock/>
              {children}
        </S.ContainerStyle>
        </S.WrapperStyle>
        </>
)
}