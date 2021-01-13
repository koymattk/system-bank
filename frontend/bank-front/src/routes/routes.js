import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '../../src/Pages/Main'
import Profile from '../../src/Pages/Profile'

export default function Routes (){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/profile" exact component={Profile} />
            </Switch>
        </BrowserRouter>
    )
}