import { Fragment } from "react";
import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';

export default function Menu(){
    return(
        <Fragment>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">FINANCIFY APP</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <NavDropdown title="Ingresos" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/1.1">Registrar Nuevo</NavDropdown.Item>
                                <NavDropdown.Item href="#action/1.2">Ver Historial</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Gastos" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/2.1">Registrar Nuevo</NavDropdown.Item>
                                <NavDropdown.Item href="#action/2.2">Ver Historial</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Vehículos" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Ingreso</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Gasto</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Ingresar Nuevo</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Ver Historial</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Fragment>
    );
}