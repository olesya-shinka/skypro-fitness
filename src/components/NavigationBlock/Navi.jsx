/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import * as S from "./styles";
//import ButtonEnter from "./ButtonEnter";
import User from "./User";
import Logo from "./Logo";
import ButtonEnter from "./ButtonEnter";
import { useSelector } from "react-redux";
import { emailSelector } from "../../store/selectors/user";
import { useNavigate } from "react-router-dom";


export const NavigateBlock = () => {
const email = useSelector(emailSelector)
const navigate = useNavigate();

  return (
    <S.Sidebar>
      <Logo />
      {email !== null ? <User email={email}/> : <ButtonEnter onClick={()=>{navigate("/Login")}} />}
    </S.Sidebar>
  );
};

export default NavigateBlock;
