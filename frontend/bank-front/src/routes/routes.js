import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LoginPage from '../../src/Pages/LoginPage'
import RegisterPage from '../../src/Pages/RegisterPage'
import HomePage from '../../src/Pages/HomePage'
import TransferPix from '../../src/Pages/TransferPix'
import RegisterKeyPix from '../../src/Pages/RegisterKeyPix'
import HomePageClient from '../Pages/HomePageClient'
import RegisterBank from '../../src/Pages/RegisterBank'

export default function Routes (){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={LoginPage} />
                <Route path="/registerpage" exact component={RegisterPage} />
                <Route path="/homepageclient/:id" exact component={HomePageClient} />
                <Route path="/registerbank/:bank/:id" exact component={RegisterBank} />
                <Route path="/homepage/:id" exact component={HomePage} />                
                <Route path="/transferpix" exact component={TransferPix} />
                <Route path="/registerkeypix" exact component={RegisterKeyPix} />
            </Switch>
        </BrowserRouter>
    )
}