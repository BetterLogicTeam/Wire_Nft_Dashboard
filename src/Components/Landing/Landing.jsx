import React, { useEffect } from "react";
import "./Landing.css";
import { useRef, useState } from "react";
// import { Autoplay, EffectCards } from "swiper";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import "swiper/css";
// import "swiper/css/effect-cards";
// import { Swiper, SwiperSlide } from "swiper/react";
function Landing() {


  return (
    <div>
      <section class="banner-section home-4 mt-n5">
        <div class="container">
          <div class="banner-wrapper">
            <div class="row align-items-center g-5">
              <div class="col-lg-7">
                <div class="banner-content">
                  <h1>
                    {" "}
                    <span class="theme-color-4">Create</span>, Collect And
                    <span class="theme-color-4">
                      <br></br> Sell
                    </span>{" "}
                    Digital Items.
                  </h1>
                  <p className="Styelnone">
                    Digital Marketplace For Crypto Collectibles And Non-Fungible
                    Tokens. Buy, Sell, And Discover Exclusive Digital Assets.
                  </p>
                  <div class="banner-btns d-flex flex-wrap">
                    <a href="#" class="default-btn move-right">
                      <span>Explore</span>{" "}
                    </a>
                  </div>
                </div>
              </div>


              {/* <div class="swiper mySwiper">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">Slide 1</div>
                  <div class="swiper-slide">Slide 2</div>
                  <div class="swiper-slide">Slide 3</div>
                  <div class="swiper-slide">Slide 4</div>
                  <div class="swiper-slide">Slide 5</div>
                  <div class="swiper-slide">Slide 6</div>
                  <div class="swiper-slide">Slide 7</div>
                  <div class="swiper-slide">Slide 8</div>
                  <div class="swiper-slide">Slide 9</div>
                </div>
              </div> */}

              <div className="col-lg-5">
                <img src="./Assets/3.png" className="emg" width="100%" alt="" />

                {/* <Swiper
                  effect={"cards"}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  grabCursor={true}
                  loop={true}

                  modules={[EffectCards, Autoplay]}
                  className="mySwiper"
                >
                  <SwiperSlide className="carde">
                    <Card className="inner" style={{ width: "22rem" }}>
                      <Card.Img variant="top" className="emg" src="./Assets/1.png" />
                      <Card.Body className="bdy">
                        <Card.Title className="tittl">Wire NFT</Card.Title>
                      </Card.Body>
                    </Card>
                  </SwiperSlide>

                  <SwiperSlide className="carde">
                    <Card className="inner" style={{ width: "22rem" }}>
                      <Card.Img variant="top" className="emg" src="./Assets/2.png" />
                      <Card.Body className="bdy">
                        <Card.Title className="tittl">Wire NFT</Card.Title>
                      </Card.Body>
                    </Card>
                  </SwiperSlide>

                  <SwiperSlide className="carde">
                    <Card className="inner" style={{ width: "22rem" }}>
                      <Card.Img variant="top" className="emg" src="./Assets/3.png" />
                      <Card.Body className="bdy">
                        <Card.Title className="tittl">Wire NFT</Card.Title>
                      </Card.Body>
                    </Card>
                  </SwiperSlide>

                  <SwiperSlide className="carde">
                    <Card className="inner" style={{ width: "22rem" }}>
                      <Card.Img variant="top" className="emg" src="./Assets/4.png" />
                      <Card.Body className="bdy">
                        <Card.Title className="tittl">Wire NFT</Card.Title>
                      </Card.Body>
                    </Card>
                  </SwiperSlide>
                </Swiper> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="wallet-section padding-top padding-bottom">
        <div class="container">
          <div class="section-header style-4">
            <div class="header-shape">
              <span></span>
            </div>
            <h3>All Wallet Options</h3>
          </div>
          <div class="wallet-inner">
            <div class="row g-3">
              <div class="col-lg-2 col-sm-4 col-6">
                <div class="wallet-item home-4">
                  <div class="wallet-item-inner text-center">
                    <div class="wallet-thumb">
                      <a href="#">
                        <img src="./Assets/06.png" alt="wallet-img" />
                      </a>
                    </div>
                    <div class="wallet-content">
                      <h5>
                        <a href="#" className="Styelnone">Meta Mask</a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-sm-4 col-6">
                <div class="wallet-item home-4">
                  <div class="wallet-item-inner text-center">
                    <div class="wallet-thumb">
                      <a href="#">
                        <img src="./Assets/07.png" alt="wallet-img" />
                      </a>
                    </div>
                    <div class="wallet-content">
                      <h5>
                        <a href="#" className="Styelnone">Binance</a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-sm-4 col-6">
                <div class="wallet-item home-4">
                  <div class="wallet-item-inner text-center">
                    <div class="wallet-thumb">
                      <a href="#">
                        <img src="./Assets/08.png" alt="wallet-img" />
                      </a>
                    </div>
                    <div class="wallet-content">
                      <h5>
                        <a href="#" className="Styelnone">Formatic</a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-sm-4 col-6">
                <div class="wallet-item home-4">
                  <div class="wallet-item-inner text-center">
                    <div class="wallet-thumb">
                      <a href="#">
                        <img src="./Assets/01.png" alt="wallet-img" />
                      </a>
                    </div>
                    <div class="wallet-content">
                      <h5>
                        <a href="#" className="Styelnone">Autherum</a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-sm-4 col-6">
                <div class="wallet-item home-4">
                  <div class="wallet-item-inner text-center">
                    <div class="wallet-thumb">
                      <a href="#">
                        <img src="./Assets/03.png" alt="wallet-img" />
                      </a>
                    </div>
                    <div class="wallet-content">
                      <h5>
                        <a href="#" className="Styelnone">Coinbase</a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-sm-4 col-6">
                <div class="wallet-item home-4">
                  <div class="wallet-item-inner text-center">
                    <div class="wallet-thumb">
                      <a href="#">
                        <img src="./Assets/05.png" alt="wallet-img" />
                      </a>
                    </div>
                    <div class="wallet-content">
                      <h5>
                        <a href="#" className="Styelnone">Portis</a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css"
      />
    </div>


  );
}

export default Landing;
