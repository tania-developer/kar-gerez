import React from 'react';
import {Button, Col, Container, Image, Row} from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

const Banner = () => {
    return (
        <Container fluid>
            <Row className="align-items-center justify-content-center">
                <Col>
                    <Fade left>
                       <h1>We Repair Car <br/> WithOut Any Hassle</h1>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit amet veniam voluptate, illo maxime vel cum error temporibus qui ullam ipsam nesciunt repudiandae nobis culpa natus dignissimos. Ipsam, inventore nesciunt!</p>
                       <Button
                            className="btn-main"
                            href="#services">
                           Get Started
                       </Button>
                    </Fade>
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;