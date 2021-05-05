import React, { Component } from "react";
import NavBar from "./Components/Navbar/Navbar.js";
import Hero from "./Components/Hero/Hero.js";
import About from "./Components/About/About.js";
import hello from "./assets/hello.png";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "@material-ui/core/Button";
import { Link } from "react-scroll";
import Footer from "./Components/Footer/Footer.js";
const Home = () => {
  return (
    <div className="home ">
      <div className="hero-section">
        <NavBar />
        <Container className="wrapper ">
          <Row className="pt-5 hero">
            <Col
              sm={true}
              className="pt-5 mt-5 d-flex flex-col align-items-center text-center"
            >
              <h2>Hello, my name is Jalal.</h2>
              <h2>I develop software.</h2>
              <Link
                activeClass="active"
                to="Skills"
                spy={true}
                offset={0}
                duration={500}
              >
                <button class=" mt-3 font-semibold bg-green-600 text-black-900 pt-2 pb-2 pr-3 pl-3 rounded-full hover:bg-green-400 ring-2">
                  Learn More
                </button>
              </Link>
            </Col>
          </Row>
        </Container>
        <Container className="" id="Skills">
          <About />
        </Container>
      </div>
      <Footer />
    </div>
  );
};
export default Home;
