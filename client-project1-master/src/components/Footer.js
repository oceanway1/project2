import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Footer() {

    return (
        <footer className="" style={{ background: "#272F46", opacity: "60%" }}>
            <Container fluid={true}>
                <Row className=" border-top flex justify-between p-3">
                    <Col className="text-white p-0" md={3} sm={12}>
                        Catherine Sutherland
                    </Col>
                    <Col className="text-white p-0 " md={6}>
                        This site was made by Luke N
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
