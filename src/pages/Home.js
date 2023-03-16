import React from 'react';
import "./Home.scss";
import { Col, Container, Row } from 'react-bootstrap';
import About from '../components/Home/About';
import Type from '../components/Home/Type';
import Particle from '../components/Particle';

const Home = () => {
    return (
        <section>
            <Container className="home-section">
                <Particle />
                <Container className="home-content">
                <Row>
                    <Col md={7} className="home-header">
                    <h1 style={{ paddingBottom: 15 }} className="heading">
                        Hi There!{" "}
                        <span className="wave" role="img" aria-labelledby="wave">
                        👋🏻
                        </span>
                    </h1>

                    <h1 className="heading-name">
                        I'M
                        <strong className="purple"> YOHAN KO</strong>
                    </h1>

                    <div style={{ padding: 50, textAlign: "left" }}>
                        <Type />
                    </div>
                    </Col>

                    <Col md={5} style={{ paddingBottom: 20 }}>
                    <img
                        // src={homeLogo}
                        alt="home pic"
                        className="img-fluid"
                        style={{ maxHeight: "450px" }}
                    />
                    </Col>
                </Row>
                </Container>
                <About />
            </Container>
        </section>
    );
};

export default Home;