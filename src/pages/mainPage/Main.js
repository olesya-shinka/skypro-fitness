import { Courses } from '../../components/Courses/Courses';
import * as S from  './MainStyle';
export const MainPage = () =>{
    return (
        <>
        <S.GlobalStyle />
    <S.Container>
        <S.Main>
            <S.Header>
                <S.Text>
                <S.Title >Онлайн-тренировки для занятий дома</S.Title>
                <S.Slogan>Начните заниматься спортом и улучшите качество жизни</S.Slogan>
                </S.Text>
                <S.SaleSticker>
                
                    <img src ='/img/saleSticker.svg' alt ='Sale Stiker'></img>
                
                </S.SaleSticker>
                
            </S.Header>
            <Courses />

            <S.ButtonUp>Наверх&#129045;</S.ButtonUp>
    

        </S.Main>  
    </S.Container>
        </>


    )
}