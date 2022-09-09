import React from "react";
import { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Autoplay, EffectCards } from "swiper";

// import Card from "react-bootstrap/Card";
import "./Explore.css";

function Explore() {
  return (
    <div>
      <section class="auction-section padding-bottom">
        <div class="container">
          <div class="section-header style-4">
            <div class="header-shape">
              <span></span>
            </div>
            <h3> Explore</h3>
          </div>

          <div className="desktop_div">
            <div className="section-wrapper">
              {/* <Swiper
                slidesPerView={4}
                spaceBetween={30}
                        loop={true}

                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Autoplay]}
                className="mySwiper"
              >
                <SwiperSlide className="carde2">
                  <Card className="inner2" style={{ width: "12rem" }}>
                    <Card.Img variant="top" className="emg2" src="1.png" />
                  </Card>
                </SwiperSlide>

                <SwiperSlide className="carde2">
                  <Card className="inner2" style={{ width: "12rem" }}>
                    <Card.Img variant="top" className="emg2" src="2.png" />
                  </Card>
                </SwiperSlide>

                <SwiperSlide className="carde2">
                  <Card className="inner2" style={{ width: "12rem" }}>
                    <Card.Img variant="top" className="emg2" src="3.png" />
                  </Card>
                </SwiperSlide>

                <SwiperSlide className="carde2">
                  <Card className="inner2" style={{ width: "12rem" }}>
                    <Card.Img variant="top" className="emg2" src="4.png" />
                  </Card>
                </SwiperSlide>

                <SwiperSlide className="carde2">
                  <Card className="inner2" style={{ width: "12rem" }}>
                    <Card.Img variant="top" className="emg2" src="1.png" />
                  </Card>
                </SwiperSlide>

                <SwiperSlide className="carde2">
                  <Card className="inner2" style={{ width: "12rem" }}>
                    <Card.Img variant="top" className="emg2" src="2.png" />
                  </Card>
                </SwiperSlide>

                <SwiperSlide className="carde2">
                  <Card className="inner2" style={{ width: "12rem" }}>
                    <Card.Img variant="top" className="emg2" src="3.png" />
                  </Card>
                </SwiperSlide>

                <SwiperSlide className="carde2">
                  <Card className="inner2" style={{ width: "12rem" }}>
                    <Card.Img variant="top" className="emg2" src="4.png" />
                  </Card>
                </SwiperSlide>
              </Swiper> */}
            </div>
          </div>

          <div className="res_div">
            <div className="section-wrapper">
              {/* <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}

                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Autoplay]}
                className="mySwiper"
              >
                <SwiperSlide className="carde2">
                  <Card className="inner2" style={{ width: "12rem" }}>
                    <Card.Img variant="top" className="emg2" src="1.png" />
                  </Card>
                </SwiperSlide>

                <SwiperSlide className="carde2">
                  <Card className="inner2" style={{ width: "12rem" }}>
                    <Card.Img variant="top" className="emg2" src="2.png" />
                  </Card>
                </SwiperSlide>

                <SwiperSlide className="carde2">
                  <Card className="inner2" style={{ width: "12rem" }}>
                    <Card.Img variant="top" className="emg2" src="3.png" />
                  </Card>
                </SwiperSlide>

                <SwiperSlide className="carde2">
                  <Card className="inner2" style={{ width: "12rem" }}>
                    <Card.Img variant="top" className="emg2" src="4.png" />
                  </Card>
                </SwiperSlide>

                <SwiperSlide className="carde2">
                  <Card className="inner2" style={{ width: "12rem" }}>
                    <Card.Img variant="top" className="emg2" src="1.png" />
                  </Card>
                </SwiperSlide>

                <SwiperSlide className="carde2">
                  <Card className="inner2" style={{ width: "12rem" }}>
                    <Card.Img variant="top" className="emg2" src="2.png" />
                  </Card>
                </SwiperSlide>

                <SwiperSlide className="carde2">
                  <Card className="inner2" style={{ width: "12rem" }}>
                    <Card.Img variant="top" className="emg2" src="3.png" />
                  </Card>
                </SwiperSlide>

                <SwiperSlide className="carde2">
                  <Card className="inner2" style={{ width: "12rem" }}>
                    <Card.Img variant="top" className="emg2" src="4.png" />
                  </Card>
                </SwiperSlide>
              </Swiper> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Explore;
