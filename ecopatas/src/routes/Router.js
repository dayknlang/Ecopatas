import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import HomePage from '../pages/home/HomePage'
import PointsPage from '../pages/points/PointsPage'
import DataPage from '../pages/data/DataPage'
import VolunteeerPage from '../pages/volunteer/VolunteerPage'
// import VolunteeerPage from '../pages/volunteer/VolunteerPage'
// import DonationPage from '../pages/donation/DonationPage'
import DonationPage from '../pages/donation/DonationPage'
import FaqPage from '../pages/faq/FaqPage'
import ErrorPage from '../pages/error/ErrorPage'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"}>
                    <HomePage />
                </Route>
                <Route exact path={"/pontos-de-arrecadacao"}>
                    <PointsPage />
                </Route>
                <Route exact path={"/nossos-numeros"}>
                    <DataPage />
                </Route>
                <Route exact path={"/faq"}>
                    <FaqPage />
                </Route>
                <Route exact path={"/quero-ser-voluntario"}>
                    <VolunteeerPage />
                </Route>
                <Route exact path={"/o-que-doar"}>
                    <DonationPage />
                </Route>
                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;