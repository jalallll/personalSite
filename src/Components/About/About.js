import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "@material-ui/core/Button";
const About = () => {
  return (
    <Container className="d-flex flex-col align-items-center">
      <Row className="d-flex">
        <h2>Here's a little bit about me.</h2>
      </Row>
      <Row className="d-flex flex-col align-items-center">
        <h4>My first interaction with a computer left me fascinated.</h4>
        <h4>
          Since I was young, I dreamt of the day I would write software. Now I
          can.
        </h4>
        <Button variant="outlined" color="primary" className="btn">
          My Expertise
        </Button>
      </Row>
    </Container>
  );
};

export default About;
