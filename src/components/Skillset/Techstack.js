import React from "react";
import {
  BsFiletypeCss,
  BsFiletypeScss,
  BsGit
} from "react-icons/bs";
import {
  DiJavascript1,
  DiReact,
} from "react-icons/di";
import {
  SiRedux,
  SiTypescript,
  SiHtml5,
  SiPython,
  SiPhp,
  SiMysql
} from "react-icons/si";
import {
  FaNode,
  FaAws
} from "react-icons/fa"
import "./Techstack.scss";
import { Col, Row } from "react-bootstrap";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    
        <Col xs={4} md={2} className="tech-icons">
          <SiHtml5 />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <BsFiletypeCss />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <BsFiletypeScss />
        </Col>

        <Col xs={4} md={2} className="tech-icons">
          <DiJavascript1 />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiTypescript />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiReact />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiRedux />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiPhp />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiMysql />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <FaNode />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiPython />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <BsGit />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <FaAws />
        </Col>
    </Row>
  );
}

export default Techstack;
