import React from 'react'
import * as S from './styles';

import Logo from '../../assets/logo-ecopatas.jpg';
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from "react-router-dom";


function RightNav(props) {

    return (
        <Router>
            <S.Ul open={props.open}>
                <S.LogoUl src={Logo} alt={'ONG Ecopatas'} />

                <NavLink to="/"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "#0DADEA"
                    }}
                >
                    <li>O que doar?</li>
                </NavLink>
                <NavLink to="/o-que-doar"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "#0DADEA"
                    }}
                >
                    <li>Pontos de Arrecadação</li>
                </NavLink>
                <NavLink to="/pontos-de-arrecadacaos"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "#0DADEA"
                    }}
                >
                    <li>Nossos Números</li>
                </NavLink>
                <NavLink to="/nossos-numeros"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "#0DADEA"
                    }}
                >
                    <li>Perguntas Frequentes</li>
                    <NavLink to="/faq"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "#0DADEA"
                        }}
                    >

                    </NavLink>
                </NavLink>
            </S.Ul>


            <Switch>
                <Route exact path="/">

                </Route>
                <Route exact path="/pontos-de-arrecadacaos" >

                </Route>
                <Route exact path="/nossos-numeros" >

                </Route>
                <Route exact path="/menu4" >

                </Route>

                <Redirect to='/HomePage' />
            </Switch>
        </Router >
    )
}

export default RightNav;