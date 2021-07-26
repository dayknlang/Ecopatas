import React from 'react'
import styled from 'styled-components';
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


const SFooter = styled.footer`
  background-color: #007A68;
  margin-top:70px;
  padding-top: 50px;
  width: 375px;
  height: 236px;
  text-align: center;
  
`

const SIcon = styled.div`
  padding:20px;
  a {
    padding: 10px;
  }
  &:hover {
    color: pink;
    transition: 200ms ease-in;
  }
`

const SText = styled.p`
    width: 80vw;
    height: 21px;
    padding-left:28px;
    font-family: 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 130%;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.16px;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #F6F7EB;
`



const Footer = () => {
 

  return (
    <SFooter>
      <SText>Nos acompanhe nas redes sociais</SText>

      <SIcon> 
        <a href = {"https://www.instagram.com/ecopatas.sp/"}> <FaInstagramSquare color = '#F6F7EB' size = {30}/> </a>
        <a href = {"https://fb.me/ecopatas.sp/"}> <FaFacebook color = '#F6F7EB' size = {30}/> </a>
      </SIcon>

      <SText>Avenida Cangaíba, altura do 4188,
          caixa d’água da Sabesp
          CEP: 03712006 - São Paulo, SP
      </SText>
    </SFooter>
  )
}

export default Footer;