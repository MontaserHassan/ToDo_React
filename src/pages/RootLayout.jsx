import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
const RootLayout = () => {
    return (
    <Container>
        <Header />
        <Row>
            <Col xs={{ span: 10, offset: 1 }}>
                <Outlet/>
            </Col>
        </Row>
    </Container>
    );
}

export default RootLayout;
