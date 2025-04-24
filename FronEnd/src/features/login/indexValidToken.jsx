import React from 'react';
import { Row, Col, Form, Button, Container, Image } from 'react-bootstrap';
import imageLogo from '../../assets/images/loginPrincipal.png';

export function ValidToken({ form, textError, onChange, onSubmit }) {
    return (
        <Row>
            <Col lg={6} md={6} sm={12}>
                <Container className="p-5">
                    <h1 className="text-center">Cambiar contraseña</h1>
                    <Form onSubmit={onSubmit}>
                        <Form.Group controlId="password">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                size="lg"
                                type="password"
                                name="password"
                                minLength={8}
                                onChange={onChange}
                                value={form.password}
                                required
                            />
                            <Form.Text>8 caracteres mínimo</Form.Text>
                        </Form.Group>
                        <Form.Group controlId="confirmPassword">
                            <Form.Label>Confirmar</Form.Label>
                            <Form.Control
                                size="lg"
                                type="password"
                                name="confirmPassword"
                                onChange={onChange}
                                value={form.confirmPassword}
                                required
                            />
                            <Form.Text style={{ color: 'red' }}>
                                {textError && 'No coinciden'}
                            </Form.Text>
                        </Form.Group>
                        <Row className="mt-3">
                            <Col>
                                <Button
                                    size="lg"
                                    variant="outline-primary"
                                    type="submit"
                                    disabled={textError}
                                    className="w-100"
                                >
                                    Cambiar
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </Col>
            <Col lg={6} md={6} sm={12} className="p-5">
                <Image src={imageLogo} fluid />
            </Col>
        </Row>
    );
}