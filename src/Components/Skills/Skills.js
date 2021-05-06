import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "@material-ui/core/Button";
import reactImg from "../../assets/react.svg";
import cImg from "../../assets/c.svg";
import pyImg from "../../assets/python.svg";
import javaImg from "../../assets/java.svg";
import javascriptImg from "../../assets/javascript.svg";

const Skills = () => {
  return (
    <div className="">
      <Row>
        <Col>
          <h4 className="text-center mb-4">My Expertise</h4>
        </Col>
      </Row>
      <Row className="">
        <Col className="d-flex flex-wrap ">
          <div className="bg-white shadow-xl rounded-full justify-center m-3 w-40 h-40 p-4 items-center image-container">
            <img className="img" src={reactImg} />
          </div>
          <div className="bg-white shadow-xl rounded-full justify-center m-3 w-40 h-40 p-4 items-center image-container">
            <img className="img" src={cImg} />
          </div>
          <div className="bg-white shadow-xl rounded-full justify-center m-3 w-40 h-40 p-4 items-center image-container">
            <img className="img" src={pyImg} />
          </div>
          <div className="bg-white shadow-xl rounded-full justify-center m-3 w-40 h-40 p-4 items-center image-container">
            <img className="img" src={javascriptImg} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Skills;
