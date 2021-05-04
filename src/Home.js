import React, { Component } from "react";
import NavBar from "./Components/Navbar/Navbar.js";
import Hero from "./Components/Hero/Hero.js";
import Projects from "./Components/Projects/Projects.js";
import hello from "./assets/hello.png";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Link } from "react-scroll";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Container className="wrapper ">
        <Row className="pt-5 hero">
          <Col sm={true} className="text-center">
            <img src={hello}></img>
          </Col>
          <Col sm={true} className="pt-5 mt-5">
            <h2>Hello, I'm Jalal.</h2>
            <h2>I'm a Full Stack Software Developer</h2>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              offset={0}
              duration={500}
            >
              <button class="font-semibold bg-green-600 text-black-900 pt-2 pb-2 pr-3 pl-3 rounded-full hover:bg-green-400 ring-2 ">
                Lets go on an adventure
              </button>
            </Link>
          </Col>
        </Row>
      </Container>
      <Container className="" id="projects"></Container>
    </div>
  );
};
export default Home;
