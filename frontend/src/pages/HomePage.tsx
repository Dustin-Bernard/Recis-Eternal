// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { Col, Container, Row } from "react-bootstrap";

import DummyImage from "../assets/-Insert_image_here-.svg.png";

import Card from "react-bootstrap/Card";

const HomePage = () => {
  return (
    <div>
      <div className="homepage">
        <div className="thumbnail pb-5">
          <Container className="my-5">
            <h2 className="text-center mt-5">Thumbnail</h2>
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
          </Container>
        </div>
      </div>

      <div className="aboutpage">
        <div className="info text-center">
          <Container className="my-5">
            INFO GENERAL INFO GENERAL INFO GENERAL INFO GENERAL INFO GENERAL
            INFO GENERAL INFO GENERAL INFO GENERAL INFO GENERAL INFO GENERAL
          </Container>
        </div>
        <div className="panitiapensi">
          <Container className="my-5 place-items-center">
            <h2 className="text-center p-3">Panitia</h2>
            <Row id="parent-grid">
              <Col className="text-center p-3 justify-content-center align-items-center d-flex">
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={DummyImage} />
                  <Card.Body>
                    <Card.Title>Panitia</Card.Title>
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
                    <Card.Title>Panitia</Card.Title>
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
                    <Card.Title>Panitia</Card.Title>
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
                    <Card.Title>Panitia</Card.Title>
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
      </div>
    </div>
  );
};

export default HomePage;
