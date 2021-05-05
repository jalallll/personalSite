import React from "react";
import hello from "../../assets/hello.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-scroll";
import Button from "@material-ui/core/Button";

const Hero = () => {
  return (
    <Container className=" ">
      <Row className="">
        <Col
          sm={true}
          className="d-flex flex-col align-items-center text-center"
        >
          <h2>Hello, my name is Jalal.</h2>
          <h2>I develop software.</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
