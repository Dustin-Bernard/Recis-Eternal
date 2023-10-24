import { Col, Container, Row, Image } from "react-bootstrap";
import Basket1 from "../assets/Basket 1.png";
import Basket2 from "../assets/Basket 2.png";

const TournamentPage = () => {
  return (
    <div className="tournament tournamentPage">
      <Container>
        <h1
          className="text-center"
          style={{ fontWeight: "600" }}
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          Tournament Bracket
        </h1>
        <Row xl={1} md={1} xs={1}>
          <Col className="text-center d-flex justify-content-center align-items-center">
            <Image
              style={{ height: "auto", maxWidth: "100%" }}
              src={Basket1}
              alt=""
              fluid
              className="animate__animated animate__fadeInUp z-1"
            />
          </Col>
          <Col className="text-center d-flex justify-content-center align-items-center">
            <Image
              style={{ height: "auto", maxWidth: "100%" }}
              src={Basket2}
              alt=""
              fluid
              className="animate__animated animate__fadeInUp z-1"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TournamentPage;
