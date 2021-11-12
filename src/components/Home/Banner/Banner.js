import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

const Banner = () => {
    return (
        <Container fluid>
            <Row className="align-items-center justify-content-center banner">
                <Col md={6} className="p-md-5 order-2 order-md-1">
                    <Fade left duration={2000} distance="40px">
                        <h1>Explore Your Best bat</h1>
                        <p className="text-muted my-4 pr-md-5">Discover your next weapon adventure, become an explorer to get started!</p>
                        <Button
                            className="btn-main"
                            href="#services">
                            Get Started
                        </Button>
                    </Fade>
                </Col>
                <Col md={5} className="order-1 order-md-2">
                    <Fade right duration={2000} distance="40px">
                        <Image src="https://www.sportscounty.com/wp-content/uploads/2020/04/best-cricket-bats-in-the-world.jpg" fluid />
                    </Fade>
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;