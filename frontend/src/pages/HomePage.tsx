// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { Col, Container, Row, Image } from "react-bootstrap";

import DummyImage from "../assets/-Insert_image_here-.svg.png";
import Card from "react-bootstrap/Card";
import LogoHivi from "../assets/1.png";
import background from "../assets/Background-Final.png";

import Merch1 from "../assets/2.png";
import Merch2 from "../assets/3.png";
import Merch3 from "../assets/4.png";
import BasketPutri from "../assets/Basket Putri D2.png";
import BasketPutra from "../assets/Basket Putra D2.png";
import Voli from "../assets/Voli D2.png";
import FutsalAB from "../assets/Futsal AB D0.png";
import FutsalCD from "../assets/Futsal CD D0.png";
import FutsalEF from "../assets/Futsal EF D0.png";
import FutsalGH from "../assets/Futsal GH D0.png";

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <div
        className="homepage pt-5"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="padding-top thumbnail pb-5 py-5">
          <Container>
            <Row id="thumb" xl={2} md={2} xs={1}>
              <Col className="fluid text-center d-flex justify-content-center align-items-center flex-column">
                <h1
                  id="ETERNAL"
                  style={{ fontSize: "13vw", color: "white" }}
                  className="animate__animated animate__fadeInLeft"
                >
                  ETERNAL
                </h1>
                <p
                  style={{ fontSize: "3vw", color: "white" }}
                  className="animate__animated animate__fadeInLeft"
                >
                  18 November 2023
                </p>
              </Col>
              <Col className="text-center d-flex justify-content-center align-items-center">
                <Image
                  style={{ height: "auto", maxWidth: "80%" }}
                  src={LogoHivi}
                  alt=""
                  fluid
                  className="animate__animated animate__fadeInUp z-1"
                />
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <div className="backgroundColor">
        <div>
          <div className="headlineNews info text-center">
            <Container className="mb-5 pt-5">
              <h1>Headline News</h1>
              <Row>
                <Col className="d-flex justify-content-center">
                  HEADLINE NEWS HEADLINE NEWS HEADLINE NEWS HEADLINE NEWS
                  HEADLINE NEWS HEADLINE NEWS HEADLINE NEWS HEADLINE NEWS
                  HEADLINE NEWS
                </Col>
                <Col>
                  <img src={DummyImage} alt="" />
                </Col>
              </Row>
            </Container>
          </div>

          <div className="about py-5">
            <Container className="text-center">
              <h1
                style={{ fontWeight: "600" }}
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                About
              </h1>
              <br />
              <p
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="300"
                id="aboutP"
              >
                Recis Eternal adalah susunan acara perlombaan dan pentas seni
                (pensi) yang diselenggarakan oleh SMA Regina Pacis Bogor pada
                tahun 2023. Pelaksanaan pensi merupakan suatu tradisi yang telah
                dilakukan setiap tahunnya oleh SMA Regina Pacis. Tetapi dari
                beberapa tahun terakhir, pelaksanaan pensi terpaksa tidak
                terjalankan karena adanya kendala pandemi Covid-19. Setelah tiga
                tahun tidak diadakan, akhirnya pensi hadir kembali sebagai Recis
                Eternal. Pelaksanaan Pensi akan didahului oleh adanya
                pelaksanaan lomba Eternal Cup yang dilaksanakan pada tanggal 24
                Oktober sampai 3 November 2023. Pada tanggal 18 November 2023,
                akan terlaksanakan Closing Ceremony yang dilaksanakan di Sekolah
                Regina Pacis sebagai finalisasi acara dan pertunjukan pensi.
              </p>
            </Container>
          </div>

          <div className="news">
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
              <Row id="parent-grid">
                <Col className="text-center p-3 justify-content-center align-items-center d-flex">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={DummyImage} />
                    <Card.Body>
                      <Card.Title>News</Card.Title>
                      <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dignissimos nihil ut repudiandae in ducimus deleniti.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="text-center p-3 justify-content-center align-items-center d-flex">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={DummyImage} />
                    <Card.Body>
                      <Card.Title>News</Card.Title>
                      <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dignissimos nihil ut repudiandae in ducimus deleniti.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="text-center p-3 justify-content-center align-items-center d-flex">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={DummyImage} />
                    <Card.Body>
                      <Card.Title>News</Card.Title>
                      <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dignissimos nihil ut repudiandae in ducimus deleniti.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="text-center p-3 justify-content-center align-items-center d-flex">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={DummyImage} />
                    <Card.Body>
                      <Card.Title>News</Card.Title>
                      <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dignissimos nihil ut repudiandae in ducimus deleniti.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>

          <div className="merch">
            <Container className="text-center pb-5">
              <h1
                style={{ fontWeight: "600" }}
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                Merch
              </h1>
              <br />
              <Row xs={1} xl={3} md={3} gap={3}>
                <Col>
                  <Image
                    fluid
                    src={Merch1}
                    alt=""
                    className="img-size"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-delay="300"
                  />
                </Col>
                <Col>
                  <Image
                    fluid
                    src={Merch2}
                    alt=""
                    className="img-size"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-delay="300"
                  />
                </Col>
                <Col>
                  <Image
                    fluid
                    src={Merch3}
                    alt=""
                    className="img-size"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-delay="300"
                  />
                </Col>
              </Row>
            </Container>
          </div>

          <div className="schedule">
            <Container className="pb-5">
              <h1
                className="text-center mb-3"
                style={{ fontWeight: "600" }}
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                Schedule
              </h1>
              <br />
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="300"
                id="aboutP"
              >
                <h3>Opening</h3>
                <p>
                  23 Oktober 2023 - Aula SMA <br />
                  (09.00 - 13.30)
                </p>
                <h3>Recup</h3>
                <p>
                  MEDOR <br />
                  24 Oktober - 1 November <br />
                  • Basket (24 - 27 Oktober, 30 - 31 Oktober) <br />
                  • Voli Putri (24 - 26 Oktober) <br />• Futsal Putra (27 - 28
                  Oktober, 30-31 Oktober, 1 November) <br />
                  <br />
                  MEDOS <br />• Fotografi (24 - 28 Oktober pengumpulan melalui
                  google form) <br />
                  • EDC (26-27 Oktober) <br />
                  • Modern Dance (28 Oktober) <br />
                  • Band (28 Oktober) <br />
                  <br />
                  *Jamnya serentak mulai pukul 08.00 - 16.00 <br />
                  <br />
                  Untuk tempat lombanya : <br />
                  1. Basket Putra & Putri (Aula SMA) <br />
                  2. Futsal Putra & Voli Putri (Lapangan SD) <br />
                  3. MD & Band (Aula SMA) <br />
                  4. Fotografi dan EDC (online melalui google form dan zoom)
                </p>
                <h3>Closing</h3>
                <p>
                  18 November 2023 di SMA Regina Pacis Bogor <br />
                  (08.00 - 17.00)
                </p>
              </div>
            </Container>
          </div>

          <div className="tournament">
            <Container>
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
        </div>
      </div>
    </div>
  );
};

export default HomePage;
