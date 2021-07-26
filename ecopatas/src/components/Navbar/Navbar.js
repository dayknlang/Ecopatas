import React from 'react';
import * as S from './styles';
import Logo from '../../assets/imgs/logoecopatas.jpg';
import Burger from './Burger';

const Navbar = () => {
  return (
    <>
      <S.Nav>
        <S.Logo src={Logo} alt="ONG EcoPatas" />
      </S.Nav>
      <Burger />
      {props.children}
    </>
  )
}

export default Navbar;


