import Merch1 from "../assets/2.png";
import Merch2 from "../assets/3.png";
import Merch3 from "../assets/4.png";
import { Col, Container, Row, Image } from "react-bootstrap";

const ShopPage = () => {
  return (
    <div className="merch merchPage">
      <Container className="text-center pb-5">
        <h1
          style={{ fontWeight: "600" }}
          className="animate__animated animate__fadeInLeft"
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
              className="img-size animate__animated animate__fadeInLeft"
            />
          </Col>
          <Col>
            <Image
              fluid
              src={Merch2}
              alt=""
              className="img-size animate__animated animate__fadeInLeft"
            />
          </Col>
          <Col>
            <Image
              fluid
              src={Merch3}
              alt=""
              className="img-size animate__animated animate__fadeInLeft"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ShopPage;
