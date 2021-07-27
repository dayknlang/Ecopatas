import React from 'react'
import * as S from './styles';
import propTypes from 'prop-types';
import Logo from '../../assets/imgs/logoecopatas.jpg';

import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from "react-router-dom";

import HomePage from '../../pages/home/HomePage';
import DonationPage from '../../pages/donation/DonationPage';
import PointsPage from '../../pages/points/PointsPage';
import DataPage from '../../pages/data/DataPage';
import VolunteeerPage from '../../pages/volunteer/VolunteerPage';
import FaqPage from '../../pages/faq/FaqPage';

  
function RightNav(props) {

    return (
        <Router>
            <S.Ul open={props.open}>
            <S.LogoUl src={Logo} alt={'ONG EcoPatas'} />
               
                <NavLink to= "/o-que-doar"
                    activeStyle={{ fontWeight: "bold", color: "#0DADEA" }}
                >
                    <li>O que doar?</li>
                </NavLink>

                <NavLink to= "/pontos-de-arrecadacaos"
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


            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>

                <Route exact path="/o-que-doar">
                    <DonationPage />
                </Route>

                <Route exact path="/pontos-de-arrecadacaos" >
                    <PointsPage />
                </Route>

                <Route exact path="/quero-ser-voluntario" >
                    <VolunteeerPage />
                </Route>

                <Route exact path="/nossos-numeros" >
                    <DataPage />
                </Route>

                <Route exact path="/faq">
                    <FaqPage />
                </Route>

                <Redirect to='/HomePage' />
            </Switch>
        </Router >
    )
}

export default RightNav;


