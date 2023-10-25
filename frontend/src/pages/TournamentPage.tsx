import { Col, Container, Row, Image } from "react-bootstrap";
import BasketPutri from "../assets/Basket Putri D2.png";
import BasketPutra from "../assets/Basket Putra D2.png";
import Voli from "../assets/Voli D2.png";
import FutsalAB from "../assets/Futsal AB D0.png";
import FutsalCD from "../assets/Futsal CD D0.png";
import FutsalEF from "../assets/Futsal EF D0.png";
import FutsalGH from "../assets/Futsal GH D0.png";

const TournamentPage = () => {
  return (
    <div className="tournament tournamentPage">
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
            Voli
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
            Futsal Group AB
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

          <h3
            className="text-center responsiveT"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Futsal Group CD
          </h3>
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

          <h3
            className="text-center responsiveT"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Futsal Group EF
          </h3>
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

          <h3
            className="text-center responsiveT"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Futsal Group GH
          </h3>
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
