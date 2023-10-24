import { Col, Container, Row, Image } from "react-bootstrap";
import Basket1 from "../assets/Basket 1.png";
import Basket2 from "../assets/Basket 2.png";

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
              src={Basket1}
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
              src={Basket2}
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
