import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Hero(props) {
    return (
        <Jumbotron>
            <Container>
                <Row>
                    <Col md={8} sm={12} className="mt-5 ">
                        <h1 className="py-2 px-4 d-flex text-4xl text-white font-extrabold">
                            Projects that make a difference
                        </h1>
                        <h3 className='py-2 px-4 pb-16 text-2xl text-white  '>
                            Check out my projects below
                        </h3>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}