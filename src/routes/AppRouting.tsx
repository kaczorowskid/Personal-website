import React from 'react';
import { HashRouter as Router, Routes, Route, } from "react-router-dom";
import { IRouting } from '../types/IRouting';
import ScrollToTop from './ScrollToTop';

interface Props {
  routes: Array<IRouting>
}

const AppRouting: React.FC<Props> = ({ routes }) => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {routes.map((route: IRouting, i: number) => (
          <Route key={i} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  )
}

export default AppRouting;