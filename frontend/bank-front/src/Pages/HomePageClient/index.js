import React from 'react';
import './style.css';
import {Link} from 'react-router-dom'


export default function HomePageClient() {

    return(
        <div className="containerHomePageClient">
            <div className="contentHomePageClient">
                <div className="cardHomePageClient">
                        <h2>Nubank</h2>
                        <button type="button"><Link to="/homepage">ENTRA NA CONTA</Link></button>
                        <button type="button"><Link>CRIAR CONTA</Link></button>

                </div>
                <div className="cardHomePageClient">
                        <h2>Bradesco</h2>
                        <button type="button"><Link to="/homepage">ENTRA NA CONTA</Link></button>
                        <button type="button"><Link>CRIAR CONTA</Link></button>
                </div>
                <div className="cardHomePageClient">
                    <h2>Bs2</h2>
                    <button type="button"><Link to="/homepage" >ENTRA NA CONTA</Link></button>
                    <button type="button"><Link>CRIAR CONTA</Link></button>

                </div>
                <div className="cardHomePageClient">
                    <h2>Inter</h2>
                    <button type="button"><Link to="/homepage">ENTRA NA CONTA</Link></button>
                    <button type="button"><Link>CRIAR CONTA</Link></button>

                </div>
            </div>
        </div>
    );

}

