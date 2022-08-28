import React from "react";
import Explore from "./Explore/Explore";
import { Link } from "react-router-dom";
import { Header } from "../Routes";

function Explore_main() {
  return (
    <div>
      <Header/>
      <section class="page-header-section style-1">
        <div class="container">
          <div class="page-header-content">
            <div class="page-header-inner">
              <div class="page-title">
                <h2>Explore </h2>
              </div>
              <ol class="breadcrumb">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li class="active">Explore</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

   
      <Explore />

      {/* <section class="auction-section padding-bottom padding-top">
         <div class="container">
            <div class="section-header style-4">
               <div class="header-shape"><span></span></div>
               <h3> Explore</h3>
            </div>
            <div class="section-wrapper">
               <div class="auction-holder">
                  <div class="swiper-wrapper">
                     <div class="swiper-slide">
                        <div class="nft-item home-4">
                           <div class="nft-inner">
                              
                              <div class="nft-item-top d-flex justify-content-between align-items-center">
                                 <div class="author-part">
                                    <ul class="author-list d-flex">
                                       <li class="single-author">
                                          <a href="author.html"><img src="011.png"
                                             alt="author-img"/></a>
                                       </li>
                                       <li class="single-author d-flex align-items-center">
                                          <a href="author.html" class="veryfied"><img
                                             src="011.gif" alt="author-img"/></a>
                                          <h6><a href="author.html">Jhon Doe</a></h6>
                                       </li>
                                    </ul>
                                 </div>
                                 <div class="more-part">
                                    <div class=" dropstart">
                                       <a class=" dropdown-toggle" href="#" role="button"
                                          data-bs-toggle="dropdown" aria-expanded="false"
                                          data-bs-offset="25,0">
                                       <i class="icofont-flikr"></i>
                                       </a>
                                       <ul class="dropdown-menu">
                                          <li><a class="dropdown-item" href="#"><span>
                                             <i class="icofont-warning"></i>
                                             </span> Report </a>
                                          </li>
                                          <li><a class="dropdown-item" href="#"><span><i
                                             class="icofont-reply"></i></span> Share</a></li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                              
                              <div class="nft-item-bottom">
                                 <div class="nft-thumb">
                                    <img src="044.gif" alt="nft-img"/>
                                    
                                    <ul class="nft-countdown count-down" data-date="July 05, 2022 21:14:01"
                                       data-blast="bgColor">
                                       <li>
                                          <span class="days">34</span><span class="count-txt">D</span>
                                       </li>
                                       <li>
                                          <span class="hours">09</span><span class="count-txt">H</span>
                                       </li>
                                       <li>
                                          <span class="minutes">32</span><span class="count-txt">M</span>
                                       </li>
                                       <li>
                                          <span class="seconds">32</span><span class="count-txt">S</span>
                                       </li>
                                    </ul>
                                 </div>
                                 <div class="nft-content">
                                    <h4><a href="item-details.html">Walking On
                                       Air</a> 
                                    </h4>
                                    <div class="price-like d-flex justify-content-between align-items-center">
                                       <p class="nft-price">Price: <span class="yellow-color">0.34 ETH</span>
                                       </p>
                                       <a href="#" class="nft-like"><i class="icofont-heart"></i>
                                       230</a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="swiper-slide">
                        <div class="nft-item home-4">
                           <div class="nft-inner">
                              
                              <div class="nft-item-top d-flex justify-content-between align-items-center">
                                 <div class="author-part">
                                    <ul class="author-list d-flex">
                                       <li class="single-author">
                                          <a href="author.html"><img src="011.png"
                                             alt="author-img"/></a>
                                       </li>
                                       <li class="single-author">
                                          <a href="author.html"><img src="022.gif"
                                             alt="author-img"/></a>
                                       </li>
                                       <li class="single-author d-flex align-items-center">
                                          <a href="author.html" class="veryfied"><img
                                             src="022.png" alt="author-img"/></a>
                                          <h6><a href="author.html">Gucci L.</a></h6>
                                       </li>
                                    </ul>
                                 </div>
                                 <div class="more-part">
                                    <div class=" dropstart">
                                       <a class="dropdown-toggle" href="#" role="button"
                                          data-bs-toggle="dropdown" aria-expanded="false"
                                          data-bs-offset="25,0">
                                       <i class="icofont-flikr"></i>
                                       </a>
                                       <ul class="dropdown-menu">
                                          <li><a class="dropdown-item" href="#"><span>
                                             <i class="icofont-warning"></i>
                                             </span> Report </a>
                                          </li>
                                          <li><a class="dropdown-item" href="#"><span><i
                                             class="icofont-reply"></i></span> Share</a></li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                              
                              <div class="nft-item-bottom">
                                 <div class="nft-thumb">
                                    <img src="033.jpg" alt="nft-img"/>
                                    
                                    <ul class="nft-countdown count-down" data-date="July 05, 2022 21:14:01"
                                       data-blast="bgColor">
                                       <li>
                                          <span class="days">34</span><span class="count-txt">D</span>
                                       </li>
                                       <li>
                                          <span class="hours">09</span><span class="count-txt">H</span>
                                       </li>
                                       <li>
                                          <span class="minutes">32</span><span class="count-txt">M</span>
                                       </li>
                                       <li>
                                          <span class="seconds">32</span><span class="count-txt">S</span>
                                       </li>
                                    </ul>
                                 </div>
                                 <div class="nft-content">
                                    <h4><a href="item-details.html">EUPHORIA de</a> </h4>
                                    <div class="price-like d-flex justify-content-between align-items-center">
                                       <p class="nft-price">Price: <span class="yellow-color">0.34 ETH</span>
                                       </p>
                                       <a href="#" class="nft-like"><i class="icofont-heart"></i>
                                       230</a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="swiper-slide">
                        <div class="nft-item home-4">
                           <div class="nft-inner">
                              
                              <div class="nft-item-top d-flex justify-content-between align-items-center">
                                 <div class="author-part">
                                    <ul class="author-list d-flex">
                                       <li class="single-author d-flex align-items-center">
                                          <a href="author.html" class="veryfied"><img
                                             src="044.png" alt="author-img"/></a>
                                          <h6><a href="author.html">Rassel mrh</a></h6>
                                       </li>
                                    </ul>
                                 </div>
                                 <div class="more-part">
                                    <div class=" dropstart">
                                       <a class=" dropdown-toggle" href="#" role="button"
                                          data-bs-toggle="dropdown" aria-expanded="false"
                                          data-bs-offset="25,0">
                                       <i class="icofont-flikr"></i>
                                       </a>
                                       <ul class="dropdown-menu">
                                          <li><a class="dropdown-item" href="#"><span>
                                             <i class="icofont-warning"></i>
                                             </span> Report </a>
                                          </li>
                                          <li><a class="dropdown-item" href="#"><span><i
                                             class="icofont-reply"></i></span> Share</a></li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                              
                              <div class="nft-item-bottom">
                                 <div class="nft-thumb">
                                    <img src="044.jpg" alt="nft-img"/>
                                    
                                    <ul class="nft-countdown count-down" data-date="July 05, 2022 21:14:01"
                                       data-blast="bgColor">
                                       <li>
                                          <span class="days">34</span><span class="count-txt">D</span>
                                       </li>
                                       <li>
                                          <span class="hours">09</span><span class="count-txt">H</span>
                                       </li>
                                       <li>
                                          <span class="minutes">32</span><span class="count-txt">M</span>
                                       </li>
                                       <li>
                                          <span class="seconds">32</span><span class="count-txt">S</span>
                                       </li>
                                    </ul>
                                 </div>
                                 <div class="nft-content">
                                    <h4><a href="item-details.html">Futuristic cols</a> </h4>
                                    <div class="price-like d-flex justify-content-between align-items-center">
                                       <p class="nft-price">Price: <span class="yellow-color">0.34 ETH</span>
                                       </p>
                                       <a href="#" class="nft-like"><i class="icofont-heart"></i>
                                       130</a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="swiper-slide">
                        <div class="nft-item home-4">
                           <div class="nft-inner">
                              
                              <div class="nft-item-top d-flex justify-content-between align-items-center">
                                 <div class="author-part">
                                    <ul class="author-list d-flex">
                                       <li class="single-author">
                                          <a href="author.html"><img src="044.png"
                                             alt="author-img"/></a>
                                       </li>
                                       <li class="single-author">
                                          <a href="author.html"><img src="055.png"
                                             alt="author-img"/></a>
                                       </li>
                                       <li class="single-author d-flex align-items-center">
                                          <a href="author.html" class="veryfied"><img
                                             src="044.gif" alt="author-img"/></a>
                                          <h6><a href="author.html">Blexa z</a></h6>
                                       </li>
                                    </ul>
                                 </div>
                                 <div class="more-part">
                                    <div class=" dropstart">
                                       <a class=" dropdown-toggle" href="#" role="button"
                                          data-bs-toggle="dropdown" aria-expanded="false"
                                          data-bs-offset="25,0">
                                       <i class="icofont-flikr"></i>
                                       </a>
                                       <ul class="dropdown-menu">
                                          <li><a class="dropdown-item" href="#"><span>
                                             <i class="icofont-warning"></i>
                                             </span> Report </a>
                                          </li>
                                          <li><a class="dropdown-item" href="#"><span><i
                                             class="icofont-reply"></i></span> Share</a></li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                              
                              <div class="nft-item-bottom">
                                 <div class="nft-thumb">
                                    <img src="055.gif" alt="nft-img"/>
                                   
                                    <ul class="nft-countdown count-down" data-date="July 05, 2022 21:14:01"
                                       data-blast="bgColor">
                                       <li>
                                          <span class="days">34</span><span class="count-txt">D</span>
                                       </li>
                                       <li>
                                          <span class="hours">09</span><span class="count-txt">H</span>
                                       </li>
                                       <li>
                                          <span class="minutes">32</span><span class="count-txt">M</span>
                                       </li>
                                       <li>
                                          <span class="seconds">32</span><span class="count-txt">S</span>
                                       </li>
                                    </ul>
                                 </div>
                                 <div class="nft-content">
                                    <h4><a href="item-details.html">Space Crafts</a> </h4>
                                    <div class="price-like d-flex justify-content-between align-items-center">
                                       <p class="nft-price">Price: <span class="yellow-color">0.34 ETH</span>
                                       </p>
                                       <a href="#" class="nft-like"><i class="icofont-heart"></i>
                                       230</a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section> */}
    </div>
  );
}

export default Explore_main;
