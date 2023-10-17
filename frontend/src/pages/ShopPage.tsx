import Merch1 from "../assets/2.png";
import Merch2 from "../assets/3.png";
import Merch3 from "../assets/4.png";
import { Col, Container, Row } from "react-bootstrap";

const ShopPage = () => {
  return (
    <div className="merch merchPage">
      <Container className="text-center pb-5">
        <h1 style={{ fontWeight: "600" }}>Merch</h1>
        <br />
        <Row>
          <Col>
            <img src={Merch1} alt="" className="img-size" />
          </Col>
          <Col>
            <img src={Merch2} alt="" className="img-size" />
          </Col>
          <Col>
            <img src={Merch3} alt="" className="img-size" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ShopPage;
