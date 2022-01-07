import React from 'react';
import AppRouting from './routes/AppRouting';
import { routesMap } from './routes/routesMap';

const App = () => <AppRouting routes={routesMap} />

export default App;
