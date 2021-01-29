import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LoginPage from '../../src/Pages/LoginPage'
import RegisterPage from '../../src/Pages/RegisterPage'
import HomePage from '../../src/Pages/HomePage'
import TransferPix from '../../src/Pages/TransferPix'
import RegisterKeyPix from '../../src/Pages/RegisterKeyPix'
import HomePageClient from '../Pages/HomePageClient'
import RegisterBank from '../../src/Pages/RegisterBank'
import Transfer from '../Pages/Transfer'; 
import Sacar from '../Pages/Sacar';
import HomePageAdmin from '../Pages/HomePageAdmin';

export default function Routes (){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={LoginPage} />
                <Route path="/registerpage" exact component={RegisterPage} />
                <Route path="/homepageclient/:id" exact component={HomePageClient} />
                <Route path="/registerbank/:bank/:id" exact component={RegisterBank} />
                <Route path="/homepage/:id/:bank" exact component={HomePage} />                
                <Route path="/transferpix/:id/:index/:bank" exact component={TransferPix} />
                <Route path="/registerkeypix/:id/:index/:bank" exact component={RegisterKeyPix} />
                <Route path="/transfer/:id/:index/:bank" exact component={Transfer}/>
                <Route path="/sacar/:id/:index/:bank" exact component={Sacar}/>
                <Route path="/adminpage" exact component={HomePageAdmin}/>
            </Switch>
        </BrowserRouter>
    )
}