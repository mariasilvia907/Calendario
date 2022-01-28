import React from 'react';
import CalendarScreen from '../Componentes/Calendario/CalendarScreen';
import LoginScreen from '../Componentes/Auth/LoginScreen';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  //Routes
} from "react-router-dom";

const AppRouter = () => {
  return (
        <>
        <Router>
            <div>
                    <Switch>
                    <Route exact path="/">
                        <CalendarScreen />
                    </Route>
                    <Route exact path="/login">
                        <LoginScreen />
                    </Route>
                    </Switch>

            </div>
        </Router>

{/*         <Routes>
            <div>
                    
                    <Route exact path="/" element={CalendarScreen} />
                    <Route exact path="/login" element={LoginScreen} />

            </div>
        </Routes> */}
        </>
  )
};

export default AppRouter;
