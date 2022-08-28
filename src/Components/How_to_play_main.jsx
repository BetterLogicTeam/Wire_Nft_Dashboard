import React from 'react'
import How_to_play from './How_to_play/How_to_play';
import { Link } from "react-router-dom";
import { Header } from '../Routes';


function How_to_play_main() {
  return (
    <div>
        <Header/>
        <section class="page-header-section style-1">
        <div class="container">
            <div class="page-header-content">
                <div class="page-header-inner">
                    <div class="page-title">
                        <h2>How To Play </h2>
                    </div>
                    <ol class="breadcrumb">
                        <li><Link to="/">Home</Link></li>
                        <li class="active">How To Play</li>
                    </ol>
                </div>
            </div>
        </div>
    </section>
    <How_to_play />
    </div>
  )
}

export default How_to_play_main