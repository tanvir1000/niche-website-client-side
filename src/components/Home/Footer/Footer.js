import { faAngleUp, faFileContract, faMapMarkedAlt, faPaperPlane, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Button, Carousel, Col, Container, Form, Row } from 'react-bootstrap';
import { fadeOutEnabled } from 'react-reveal/globals';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const [scrolled, setScrolled] = useState(false);

    const scrollHandler = () => {
        window.scrollTo(500, 0);
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        })
    }, []);

    return (
        <footer id="dk-footer" className="dk-footer">
            <Container>
                <Row>
                    <Col md={12} lg={4}>

                    <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://okanaganhomes.com/wp-content/uploads/2019/05/contact-us.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      {/* <h3>History of cricket bat</h3> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.rumrock.tech/wp-content/uploads/2021/03/CUS.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      {/* <h3>History of cricket bat</h3> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.crictracker.com/wp-content/uploads/2019/09/Thomas-White-Wide-blade.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      {/* <h3>History of cricket bat</h3> */}
      {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
                
                    </Col>
                    <Col md={12} lg={8}>
                        {/* <Row>
                            <Col md={6}>
                               
                            </Col>
                        </Row> */}
                        <Row>
                            <Col md={12} lg={6}>
                                <div className="footer-widget footer-left-widget">
                                    <div className="section-heading">
                                        <h3>Useful Links</h3>
                                        <span className="animate-border border-black"></span>
                                    </div>
                                    <ul>
                                        <li>
                                            <Link to="/" onClick={scrollHandler}>About us</Link>
                                        </li>
                                        <li>
                                            <Link to="/" onClick={scrollHandler}>Services</Link>
                                        </li>
                                        <li>
                                            <Link to="/" onClick={scrollHandler}>Projects</Link>
                                        </li>
                                        <li>
                                            <Link to="/" onClick={scrollHandler}>Our Team</Link>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <Link to="/" onClick={scrollHandler}>Contact us</Link>
                                        </li>
                                        <li>
                                            <Link to="/" onClick={scrollHandler}>Blog</Link>
                                        </li>
                                        <li>
                                            <Link to="/" onClick={scrollHandler}>Testimonials</Link>
                                        </li>
                                        <li>
                                            <Link to="/" onClick={scrollHandler}>Faq</Link>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md={12} lg={6}>
                                <div className="footer-widget">
                                    <div className="section-heading">
                                        <h3>Subscribe</h3>
                                        <span className="animate-border border-black"></span>
                                    </div>
                                    <p>
                                       24~7~365 we are hare for you
                                        </p>
                                    <Form>
                                        <Form.Row>
                                            <Col className="dk-footer-form">
                                                <Form.Control type="email" placeholder="Email Address" />
                                                <button type="submit">
                                                    <FontAwesomeIcon icon={faPaperPlane} />
                                                </button>
                                            </Col>
                                        </Form.Row>
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <div className="copyright">
                <Container>
                    <Row>
                        <Col md={12} className="order-2 order-md-1">
                            <span>Copyright © {new Date().getFullYear()}, All Rights Reserved batMaster</span>
                        </Col>
                        {/* <Col md={6} className="order-1 order-md-2">
                            <div className="copyright-menu">
                                <ul>
                                    <li>
                                        <Link to="/" onClick={scrollHandler}>Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/" onClick={scrollHandler}>Terms</Link>
                                    </li>
                                    <li>
                                        <Link to="/" onClick={scrollHandler}>Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link to="/" onClick={scrollHandler}>Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </Col> */}
                    </Row>
                </Container>
            </div>
            <div className="back-to-top">
                <Button variant="dark" onClick={scrollHandler} title="Back to Top" className={scrolled ? "d-block" : "d-none"}>
                    <FontAwesomeIcon icon={fadeOutEnabled} />
                </Button>
            </div>
        </footer>
    );
};

export default Footer;