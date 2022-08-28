import React from 'react'
import { Link } from 'react-router-dom'
import About from './About/About'
import Headers from './Header/Header'

function About_main() {
  return (
    <div>
        <Headers/>
        <section class="page-header-section style-1 ">
        <div class="container">
            <div class="page-header-content">
                <div class="page-header-inner">
                    <div class="page-title">
                        <h2>About Us </h2>
                    </div>
                    <ol class="breadcrumb">
                        <li><Link to="/">Home</Link></li>
                        <li class="active">About Us</li>
                    </ol>
                </div>
            </div>
        </div>
    </section>
    <About />
    </div>
  )
}

export default About_main