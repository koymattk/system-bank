import React from 'react';
import './style.css';
function HomePageClient() {

    return(
        <div className="containerHomePageClient">
            <div className="contentHomePageClient">
                <div className="cardHomePageClient">
                        <h2>Nubank</h2>
                        <button type="button">ENTRA NA CONTA</button>
                        <button type="button">CRIAR CONTA </button>

                </div>
                <div className="cardHomePageClient">
                        <h2>Bradesco</h2>
                        <button type="button">ENTRA NA CONTA</button>
                        <button type="button">CRIAR CONTA </button>
                </div>
                <div className="cardHomePageClient">
                    <h2>Bs2</h2>
                    <button type="button">ENTRA NA CONTA</button>
                    <button type="button">CRIAR CONTA </button>

                </div>
                <div className="cardHomePageClient">
                    <h2>Inter</h2>
                    <button type="button">ENTRA NA CONTA</button>
                    <button type="button">CRIAR CONTA </button>

                </div>
            </div>
        </div>
    );

}

export default HomePageClient;