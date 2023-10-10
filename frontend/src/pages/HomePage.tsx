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
import background from "../assets/Retro-Background.png";
import { useEffect, useState } from "react";


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
  const [posts, setPosts] = useState<PostType[]>([]);
  useEffect(() => {
    fetch("http://localhost:3001/post")
      .then((response) => response.json())
      .then((postsData) => {
        setPosts(postsData);
      });
  }, []);

  

  return (
    <div >
      <div
        className="homepage pt-5"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="thumbnail pb-5 py-5">
          <Container className="py-5">
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

      <div className="background-color">
        <div className="headlineNews">
          <div className="info text-center">
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

          <div className="about">
            <Container className="text-center">
              <h1>About</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
                illum porro eius. Sapiente dolore, non eos deserunt aut vitae
                magnam ipsam eius libero aliquid repellat reiciendis tenetur!
                At, eius maxime.
              </p>
            </Container>
          </div>

          <div>
            <Container className="my-5 place-items-center">
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

          <div>
            <Container className="text-center mb-5">
              <h1>Merch</h1>
              <Row>
                <Col>
                  <img src={DummyImage} alt="" className="img-size" />
                  <h4>Merch Description</h4>
                </Col>
                <Col>
                  <img src={DummyImage} alt="" className="img-size" />
                  <h4>Merch Description</h4>
                </Col>
                <Col>
                  <img src={DummyImage} alt="" className="img-size" />
                  <h4>Merch Description</h4>
                </Col>
              </Row>
            </Container>
          </div>

          <div>
            <Container className="pb-5">
              <h1 className="text-center mb-3">Schedule</h1>
              <h3>Opening</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusamus optio incidunt dolor quod corrupti facilis dolores
                perspiciatis! Incidunt cumque maiores dolor omnis totam
                quibusdam eaque possimus aspernatur alias, ipsum sint asperiores
                quae, quo corporis numquam minima. Dolor impedit animi
                consequuntur consectetur ducimus quasi velit, odit totam,
                perferendis dolore porro? Quae, omnis earum quas exercitationem
                quis officiis. Architecto modi iusto quidem.
              </p>
              <h3>Recup</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusamus optio incidunt dolor quod corrupti facilis dolores
                perspiciatis! Incidunt cumque maiores dolor omnis totam
                quibusdam eaque possimus aspernatur alias, ipsum sint asperiores
                quae, quo corporis numquam minima. Dolor impedit animi
                consequuntur consectetur ducimus quasi velit, odit totam,
                perferendis dolore porro? Quae, omnis earum quas exercitationem
                quis officiis. Architecto modi iusto quidem.
              </p>
              <h3>Closing</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusamus optio incidunt dolor quod corrupti facilis dolores
                perspiciatis! Incidunt cumque maiores dolor omnis totam
                quibusdam eaque possimus aspernatur alias, ipsum sint asperiores
                quae, quo corporis numquam minima. Dolor impedit animi
                consequuntur consectetur ducimus quasi velit, odit totam,
                perferendis dolore porro? Quae, omnis earum quas exercitationem
                quis officiis. Architecto modi iusto quidem.
              </p>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
