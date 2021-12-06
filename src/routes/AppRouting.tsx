import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { IRoutingTypes } from '../types/IRoutingType';

interface Props {
    routes: Array<IRoutingTypes>
}

const AppRouting: React.FC<Props> = ({ routes }) => {

    return (
        <Router>
            <Routes>
                {routes.map((route: IRoutingTypes, i: number) => (
                    <Route key = {i} path = {route.path} element = {route.element} />
                ))}
            </Routes>
        </Router>
    )
}

export default AppRouting;