// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { Col, Container, Row, Image } from "react-bootstrap";
import BasketPutri from "../assets/Basket Putri.png";
import BasketPutra from "../assets/Basket Putra.png";
import Voli from "../assets/Voli.png";
import FutsalAB from "../assets/Futsal AB.png";
import FutsalCD from "../assets/Futsal CD.png";
import FutsalEF from "../assets/Futsal EF.png";
import FutsalGH from "../assets/Futsal GH.png";

const TournamentPage = () => {
  return (
    
      <div className="backgroundColor">
            <Container className="py-5 place-items-center">
              <h1 className="text-center p-3">News</h1>
              <div className="pb-3">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={10}
                  pagination={{
                    clickable: true,
                  }}
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 1,
                      spaceBetween: 40,
                    },
                    992: {
                      slidesPerView: 1,
                      spaceBetween: 50,
                    },

                    1200: {
                      slidesPerView: 1,
                      spaceBetween: 50,
                    },
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div>
                      <img src={DummyImage} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <img src={DummyImage} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <img src={DummyImage} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <img src={DummyImage} alt="" />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
        <h1
          className="text-center pb-5"
          style={{ fontWeight: "600" }}
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          Eternal Cup
        </h1>
        <Row xl={1} md={1} xs={1}>
          <h3
            className="text-center responsiveT"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Basket Putri
          </h3>
          <Col className="text-center d-flex justify-content-center align-items-center">
            <Image
              style={{ height: "auto", maxWidth: "100%" }}
              src={BasketPutri}
              alt=""
              fluid
              data-aos="fade-up"
              data-aos-duration="1000"
            />
          </Col>

          <h3
            className="text-center responsiveT"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Basket Putra
          </h3>
          <Col className="text-center d-flex justify-content-center align-items-center">
            <Image
              style={{ height: "auto", maxWidth: "100%" }}
              src={BasketPutra}
              alt=""
              fluid
              data-aos="fade-up"
              data-aos-duration="1000"
            />
          </Col>

          <h3
            className="text-center responsiveT"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Voli Putri
          </h3>
          <Col className="text-center d-flex justify-content-center align-items-center">
            <Image
              style={{ height: "auto", maxWidth: "100%" }}
              src={Voli}
              alt=""
              fluid
              data-aos="fade-up"
              data-aos-duration="1000"
            />
          </Col>

          <h3
            className="text-center responsiveT"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Futsal Putra
          </h3>
          <Col className="text-center d-flex justify-content-center align-items-center">
            <Image
              style={{ height: "auto", maxWidth: "100%" }}
              src={FutsalBracket}
              alt=""
              fluid
              data-aos="fade-up"
              data-aos-duration="1000"
            />
          </Col>

          <Col className="text-center d-flex justify-content-center align-items-center">
            <Image
              style={{ height: "auto", maxWidth: "100%" }}
              src={FutsalAB}
              alt=""
              fluid
              data-aos="fade-up"
              data-aos-duration="1000"
            />
          </Col>

          <Col className="text-center d-flex justify-content-center align-items-center">
            <Image
              style={{ height: "auto", maxWidth: "100%" }}
              src={FutsalCD}
              alt=""
              fluid
              data-aos="fade-up"
              data-aos-duration="1000"
            />
          </Col>

          <Col className="text-center d-flex justify-content-center align-items-center">
            <Image
              style={{ height: "auto", maxWidth: "100%" }}
              src={FutsalEF}
              alt=""
              fluid
              data-aos="fade-up"
              data-aos-duration="1000"
            />
          </Col>

          <Col className="text-center d-flex justify-content-center align-items-center">
            <Image
              style={{ height: "auto", maxWidth: "100%" }}
              src={FutsalGH}
              alt=""
              fluid
              data-aos="fade-up"
              data-aos-duration="1000"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TournamentPage;
