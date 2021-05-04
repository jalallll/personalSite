import React from "react";
import hello from "../../assets/hello.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Hero = () => {
  return (
    <Container className="hero">
      <Row className="pt-5">
        <Col sm={true} className="text-center">
          <img src={hello}></img>
        </Col>
        <Col sm={true} className="pt-5 mt-5">
          <h2>Hello, I'm Jalal.</h2>
          <h2>I'm a Full Stack Software Developer</h2>
          <button class="font-semibold bg-green-600 text-black-900 pt-2 pb-2 pr-3 pl-3 rounded-full hover:bg-green-400 ring-2 ">
            Github
          </button>
          <button class="font-semibold bg-green-600 text-black-900 pt-2 pb-2 pr-3 pl-3 rounded-full hover:bg-green-400 ring-2 ">
            Resume
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
