import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LoginPage from '../../src/Pages/LoginPage'
import RegisterPage from '../../src/Pages/RegisterPage'
import HomePage from '../../src/Pages/HomePage'
import TransferPix from '../../src/Pages/TransferPix'
import RegisterKeyPix from '../../src/Pages/RegisterKeyPix'
import HomePageClient from '../Pages/HomePageClient';

export default function Routes (){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={LoginPage} />
                <Route path="/homepage/:id" exact component={HomePage} />
                <Route path="/registerpage" exact component={RegisterPage} />
                <Route path="/transferpix" exact component={TransferPix} />
                <Route path="/registerkeypix" exact component={RegisterKeyPix} />
                <Route path="/homepageclient/:id" exact component={HomePageClient} />
            </Switch>
        </BrowserRouter>
    )
}