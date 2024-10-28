import { Fragment } from "react";
import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import showModalIncomesAdd from "../modals/addIncome";
import showModalExponcesAdd from "../modals/addExpense";
import showModalVehiculeAdd from "../modals/addVehicule";

export default function Menu(){
    const openIncomesAdd = () => {
        showModalIncomesAdd();
    };

    const openExponsesAdd = () => {
        showModalExponcesAdd();
    };

    const openVehiculeAdd = () => {
        showModalVehiculeAdd();
    };

    return(
        <Fragment>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">FINANCIFY APP</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/Principal">Home</Nav.Link>
                            <NavDropdown title="Ingresos" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#" onClick={openIncomesAdd}>Registrar Nuevo</NavDropdown.Item>
                                <NavDropdown.Item href="#action/1.2">Ver Historial</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Gastos" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#" onClick={openExponsesAdd}>Registrar Nuevo</NavDropdown.Item>
                                <NavDropdown.Item href="#action/2.2">Ver Historial</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Vehículos" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Ingreso</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Gasto</NavDropdown.Item>
                                <NavDropdown.Item href="#" onClick={openVehiculeAdd}>Ingresar Nuevo</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Ver Historial</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Fragment>
    );
}