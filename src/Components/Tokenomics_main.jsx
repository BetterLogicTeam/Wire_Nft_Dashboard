import React from 'react';
import { Link } from "react-router-dom";
import { Header } from '../Routes';
import Tokenomics from './Tokenomics/Tokenomics';


function Tokenomics_main() {
  return (
    <div>
        <Header/>
        <section class="page-header-section style-1">
        <div class="container">
            <div class="page-header-content">
                <div class="page-header-inner">
                    <div class="page-title">
                        <h2>Tokenomics </h2>
                    </div>
                    <ol class="breadcrumb">
                        <li><Link to="/">Home</Link></li>
                        <li class="active">Tokenomics</li>
                    </ol>
                </div>
            </div>
        </div>
    </section>
    <Tokenomics />
    </div>
  )
}

export default Tokenomics_main