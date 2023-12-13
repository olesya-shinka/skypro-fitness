/* eslint-disable prettier/prettier */
import styled from "styled-components";


export const WrapperStyle = styled.div`
width: 100%;
min-height: 100%;
overflow: scroll;

`

export const ContainerStyle = styled.div`

height: 100vh;
margin: 0 auto;
position: relative;
background-color: ${props => {
    switch (props.yourProps) {
          case "Main_Page":
              return "#271a58";
          case "Other":
              return "#271a58";
          default:
  }
 }};


`
