import DummyImage from "../assets/-Insert_image_here-.svg.png";
import { Col, Container, Row } from "react-bootstrap";

const ShopPage = () => {
  return (
    <div className="padding-top background-color">
      <Container className="text-center py-5">
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
  );
};

export default ShopPage;
