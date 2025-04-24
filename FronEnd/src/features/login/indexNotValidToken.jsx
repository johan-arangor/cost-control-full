import React from 'react';
import { Col, Container, Image } from 'react-bootstrap';
import imageLogo from '../../assets/images/loginPrincipal.png';

export function NotToken() {
    return (
        <Col className="p-5 text-center">
            <h1>Token inválido o vencido</h1>
            <p>
                Solicita de nuevo <a href="/renewPassword">aquí</a>
            </p>
            <Image src={imageLogo} fluid />
        </Col>
    );
}