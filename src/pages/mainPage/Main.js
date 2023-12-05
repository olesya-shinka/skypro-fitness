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
            <S.Courses>
                <S.CourseYoga  >
                    <S.CourseName>Йога</S.CourseName>
                 
                
                </S.CourseYoga>
                <S.CourseStrech >
                <S.CourseName>Стретчинг </S.CourseName>
               
                </S.CourseStrech>
                <S.CourseDance>
                <S.CourseName>Танцевальный фитнес</S.CourseName>
                
                </S.CourseDance>
                <S.CourseStep >
                <S.CourseName>Степ-аэробика</S.CourseName>
                
                </S.CourseStep>
                <S.CourseBodyflex>
                <S.CourseName> Бодифлекс</S.CourseName>
                
                </S.CourseBodyflex>

            </S.Courses>
            <S.ButtonUp>Наверх&#129045;</S.ButtonUp>
    

        </S.Main>  
    </S.Container>
        </>


    )
}