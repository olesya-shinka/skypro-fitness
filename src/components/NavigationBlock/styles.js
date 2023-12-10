import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Sidebar = styled.div`
  max-width: 1200px;
  min-height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 10px;
  row-gap: 10px;
  margin: 0 auto;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const Enter = styled.button`
  border: none;
  border-radius: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  line-height: 24px;
  letter-spacing: -0.05px;
  width: 77px;
  height: 36px;
  background-color: #140d40;
  color: #fff;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  :hover {
    background-color: #2d1f79;
  }
  :active {
    background-color: #3b29a1;
  }
  a {
    text-decoration: none;
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  justify-content: flex-end;
  margin-left: 750px;
  max-width: 200px;
  :hover {
    cursor: pointer;
  }
`;

export const NameUser = styled.p`
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  border: 2px
`;

export const Contain = styled.div`
  background-color: transparent;
  place-self: center start;
  cursor: pointer;
`;
export const MainNav = styled.div`
width: 244px;
background-color: #181818;
padding: 20px 0 20px 36px;
`

export const NavBurger = styled.div`
width: 20px;
height: 36px;
padding: 13px 0;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
-webkit-box-pack: justify;
-ms-flex-pack: justify;
justify-content: space-between;
`
export const BurgerLine = styled.span`
display: inline-block;
width: 100%;
height: 1px;
background-color: #d3d3d3;
`

export const NavMenu = styled.div`
display: block;
visibility: visible;

`

export const MenuList = styled.ul`
padding: 18px 0 10px 0;
`

export const MenuItem = styled.li`
padding: 5px 0;
margin-bottom: 16px;
position: absolute;
`

export const Menulink = styled(NavLink)`
color: black;
font-weight: 400;
font-size: 16px;
line-height: 24px;
text-decoration: none;
`
export const DropdownContent= styled.ul`    
overflow-y: auto;
box-sizing: border-box;
height: 200px;
width: auto;
background-color: #313131;
border-radius: 20px;
position: absolute;

`