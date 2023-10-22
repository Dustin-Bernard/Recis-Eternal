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
import { useEffect, useState } from "react";

import Merch1 from "../assets/2.png";
import Merch2 from "../assets/3.png";
import Merch3 from "../assets/4.png";

type PostType = {
  _id: string;
  title: string;
  desc: string;
  cover: string;
  content: string;
  createdAt: string;
  author: {
    username: string;
  };
};

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
              >
                <h3>Opening</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Accusamus optio incidunt dolor quod corrupti facilis dolores
                  perspiciatis! Incidunt cumque maiores dolor omnis totam
                  quibusdam eaque possimus aspernatur alias, ipsum sint
                  asperiores quae, quo corporis numquam minima. Dolor impedit
                  animi consequuntur consectetur ducimus quasi velit, odit
                  totam, perferendis dolore porro? Quae, omnis earum quas
                  exercitationem quis officiis. Architecto modi iusto quidem.
                </p>
                <h3>Recup</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Accusamus optio incidunt dolor quod corrupti facilis dolores
                  perspiciatis! Incidunt cumque maiores dolor omnis totam
                  quibusdam eaque possimus aspernatur alias, ipsum sint
                  asperiores quae, quo corporis numquam minima. Dolor impedit
                  animi consequuntur consectetur ducimus quasi velit, odit
                  totam, perferendis dolore porro? Quae, omnis earum quas
                  exercitationem quis officiis. Architecto modi iusto quidem.
                </p>
                <h3>Closing</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Accusamus optio incidunt dolor quod corrupti facilis dolores
                  perspiciatis! Incidunt cumque maiores dolor omnis totam
                  quibusdam eaque possimus aspernatur alias, ipsum sint
                  asperiores quae, quo corporis numquam minima. Dolor impedit
                  animi consequuntur consectetur ducimus quasi velit, odit
                  totam, perferendis dolore porro? Quae, omnis earum quas
                  exercitationem quis officiis. Architecto modi iusto quidem.
                </p>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
