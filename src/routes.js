import React from "react";
import {Switch, Route } from 'react-router-dom';

import Home from "./Pages/Home";
import Reservas from './Pages/Reservas';

export default function Routes(){
    return(
        <Switch>
         <Route path='/' exact component={Home} />
         <Route path='/reservas' component={Reservas} />
        </Switch>
    );
}