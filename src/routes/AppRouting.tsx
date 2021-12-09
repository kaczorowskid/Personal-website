import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { IRouting } from '../types/IRouting';

interface Props {
    routes: Array<IRouting>
}

const AppRouting: React.FC<Props> = ({ routes }) => {

    return (
        <Router>
            <Routes>
                {routes.map((route: IRouting, i: number) => (
                    <Route key = {i} path = {route.path} element = {route.element} />
                ))}
            </Routes>
        </Router>
    )
}

export default AppRouting;