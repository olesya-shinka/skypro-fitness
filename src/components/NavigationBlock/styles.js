import styled from "styled-components";
import { NavLink } from "react-router-dom";

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
  background-color: ${(props) => {
    switch (props.page) {
      case "Main_Page":
        return "#271a58";
      case "Other":
        return "#271a58";
      default:
    }
  }};
  @media (max-width: 1024px) {
    max-width: 1000px;
    min-height: 100px;
  }
  @media (max-width: 1274px) {
    max-width: 1200px;
  }
`;

export const Enter = styled.button`
  border: none;
  border-radius: 46px;
  margin-left: 750px;
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
  @media (max-width: 1024px) {
    margin-left: 450px;
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
  color: ${(props) => props.color || "#fff"};
  @media (max-width: 1274px) {
    margin-left: 480px;
  }
  @media (max-width: 1024px) {
    margin-left: 260px;
  }
  @media (max-width: 768px) {
    margin-left: 186px;
  }
`;

export const NameUser = styled.p`
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  border: 2px;
  color: ${(props) => props.$color || "#fff"};
  @media (max-width: 1024px) {
    font-size: 20px;
  }
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
`;

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
`;
export const BurgerLine = styled.span`
  display: inline-block;
  width: 100%;
  height: 1px;
  background-color: #d3d3d3;
`;

export const NavMenu = styled.div`
  display: block;
  visibility: visible;
  position: absolute;
`;

export const MenuList = styled.ul`
  padding: 18px 0 10px 0;
  position: absolute;
  box-sizing: border-box;
  list-style-type: none;
  float: left;
`;

export const MenuItem = styled.li`
  padding: 2px 0;
  margin-bottom: 16px;
  z-index: 9999;
  position: relative;
  color: ${(props) => props.color || "#fff"};
`;

export const Menulink = styled(NavLink)`
  color: black;
  font-weight: 400;
  text-decoration: none;
  font-weight: 400;
  font-size: 18px;
  color: ${(props) => props.color || "#fff"};
  @media (max-width: 1024px) {
    font-size: 14px;
  }
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
