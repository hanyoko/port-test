import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  LET ME <span className="purple"> INTRODUCE </span> MYSELF
                </h1>
                {/* <p className="home-about-body">
                 Hi, my name is <span className="purple">Md Abu Bakkar Siddiqe Sajib </span>
                 and I'm from <span className="purple"> Dhaka, Bangladesh.</span>
                <br />
                <br />
                I recently graduated with a Bachelor's degree in Computer Science and Engineering in 2021.
                <br />
                <br />
                  As a
                  <b className="purple"> Full-Stack </b>developer,  
                  I enjoy tackling new challenges and continuously expanding my skillset.
                  <br />
                  <br />I am proficient in
                    <b className="purple"> Javascript, </b>
                    as well as have knowledge in programming languages such as C, Java, Python,
                  <b className="purple"> GraphQL, and Solidity.</b>
                  <br />
                  <br />
                  I have a passion for working
                  with <b className="purple">Node.js, MongoDB,</b> and
                  <i>
                    <b className="purple">
                      {" "}
                      modern Javascript libraries and frameworks
                    </b>
                  </i>
                  &nbsp; like
                  <i>
                    <b className="purple"> React.js</b>
                  </i>
                  <br />
                  <br />
                  I am also interested in building new
                  <i>
                    <b className="purple"> Web Technologies and Products, </b>
                    as well as exploring areas related to
                    <b className="purple"> Artificial Intelligence.</b>
                  </i>
                  <br />
                  
                </p> */}
              </Col>
              {/* <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col> */}
            </Row>
        </Container>
    );
};

export default About;