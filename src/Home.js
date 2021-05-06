import React, { Component } from "react";
import NavBar from "./Components/Navbar/Navbar.js";
import Hero from "./Components/Hero/Hero.js";
import About from "./Components/About/About.js";
import hello from "./assets/hello.png";
import Skills from "./Components/Skills/Skills.js";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "@material-ui/core/Button";
import { Link } from "react-scroll";
import Footer from "./Components/Footer/Footer.js";
const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <NavBar />
        <div className="wrapper d-flex flex-col hero">
          <Hero />

          <div className="d-flex justify-content-center btn">
            <Link
              activeClass="active"
              to="About"
              spy={true}
              offset={0}
              duration={1000}
              smooth={true}
            >
              <Button variant="outlined" color="primary" className="">
                Learn More
              </Button>
            </Link>
          </div>
        </div>

        <div className="wrapper d-flex flex-col hero" id="About">
          <About />

          <div className="d-flex justify-content-center btn">
            <Link
              activeClass="active"
              to="Skills"
              spy={true}
              offset={0}
              duration={1000}
              smooth={true}
            >
              <Button variant="outlined" color="primary" className="">
                My Skills
              </Button>
            </Link>
          </div>
        </div>

        <div className="wrapper d-flex flex-col hero" id="Skills">
          <Skills />

          <div className="d-flex justify-content-center btn">
            <Link
              activeClass="active"
              to="footer"
              spy={true}
              offset={0}
              dduration={1000}
              smooth={true}
            >
              <Button variant="outlined" color="primary" className="">
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Home;
