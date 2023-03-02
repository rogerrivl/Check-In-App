import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import image from "../components/cac.png";

function Home() {
  return (
    <Container>
      <Row className="mt-5">
        <Col md={6}>
          <h1>Scan Your ID card</h1>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in
            lorem tellus. Ut euismod nulla eget tellus venenatis imperdiet. Sed
            lacinia orci lectus, ac bibendum nibh finibus vel. Praesent aliquam
            purus sit amet elit bibendum malesuada.
          </p>
        </Col>
        <Col md={6}>
          <img src={image} alt="Scan Your ID card" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
