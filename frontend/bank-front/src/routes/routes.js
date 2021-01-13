import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LoginPage from '../../src/Pages/LoginPage'
import RegisterPage from '../../src/Pages/RegisterPage'

export default function Routes (){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={LoginPage} />
                <Route path="/registerpage" exact component={RegisterPage} />
            </Switch>
        </BrowserRouter>
    )
}