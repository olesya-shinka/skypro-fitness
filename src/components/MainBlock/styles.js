/* eslint-disable prettier/prettier */
import styled from "styled-components";


export const WrapperStyle = styled.div`
width: 100%;
min-height: 100%;
overflow: scroll;
background-color: (${(props) => props.color});

`

export const ContainerStyle = styled.div`

height: 100vh;
margin: 0 auto;
position: relative;
background-color: (${(props) => props.color});

`
export const White = styled.div`
background-color: #fafafa;
`
export const Violet = styled.div`
background-color: #271a58;
`