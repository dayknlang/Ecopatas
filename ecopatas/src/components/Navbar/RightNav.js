import React from 'react'
import * as S from './styles';
import Logo from '../../assets/imgs/logoecopatas.jpg';

import { NavLink } from "react-router-dom";
  
function RightNav(props) {

    return (
            <S.Ul open={props.open}>
            <S.LogoUl src={Logo} alt={'ONG EcoPatas'} />
               
                <NavLink to= "/o-que-doar"
                    activeStyle={{ fontWeight: "bold", color: "#0DADEA" }}
                >
                    <li>O que doar?</li>
                </NavLink>

                <NavLink to= "/pontos-de-arrecadacao"
                    activeStyle={{ fontWeight: "bold", color: "#0DADEA" }}
                >
                    <li>Pontos de Arrecadação</li>
                </NavLink>

                <NavLink  to= "/quero-ser-voluntario"
                    activeStyle={{ fontWeight: "bold", color: "#0DADEA" }}
                >
                    <li>Quero ser Voluntário!</li>
                </NavLink>

                <NavLink to= "/nossos-numeros"
                    activeStyle={{ fontWeight: "bold", color: "#0DADEA" }}
                >
                     <li>Nossos Números</li>
                </NavLink>    
                    
                <NavLink to= "/faq"
                    activeStyle={{ fontWeight: "bold", color: "#0DADEA" }}
                >
                    <li>Perguntas Frequentes</li>
                    <NavLink to= "/faq"
                        activeStyle={{ fontWeight: "bold", color: "#0DADEA" }}
                    >
                    </NavLink>
                </NavLink>
            </S.Ul>
    )
}

export default RightNav;


