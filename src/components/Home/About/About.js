import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import './About.css';

const About = () => {
    return (
        <section className="about-container">
            <Container fluid>
                <Row className="align-items-center justify-content-center banner">
                    <Col md={6}>
                        <Fade left duration={2000} distance="40px">
                            <Image src="https://static.independent.co.uk/2021/06/08/09/cricket%20bats.jpg?width=1200" fluid />
                        </Fade>
                    </Col>
                    <Col md={4} className="p-md-5 mt-md-0 mt-4">
                        <Fade right duration={2000} distance="40px">
                            <p>About Our Company</p>
                            <h3>How We Can Help you</h3>
                            <p className="text-muted my-4 pr-md-5"
                            >Cricket bat manufacturers in Pakistan and India offer zero warranty on cricket bats therefore we cannot offer you any warranty either. Cheaper bat will detriorate quicker than expensive ones. My recommendation is purchase ONLY high quality expensive bats for best results from reputable manufacturers..</p>
                            <Button
                                className="btn-main"
                                href="#pricing">
                                Learn More
                            </Button>
                        </Fade>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;