import { Fragment } from "react";
import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import ShowModalIncomesAdd from "../modals/addIncome";
import ShowModalExponcesAdd from "../modals/addExpense";
import ShowModalVehiculeAdd from "../modals/addVehicule";

export default function Menu(){
    const openIncomesAdd = () => {
        ShowModalIncomesAdd();
    };

    const openExponsesAdd = () => {
        ShowModalExponcesAdd();
    };

    const openVehiculeAdd = () => {
        ShowModalVehiculeAdd();
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
                                <NavDropdown.Item href="/incomes">Ver Historial</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Gastos" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#" onClick={openExponsesAdd}>Registrar Nuevo</NavDropdown.Item>
                                <NavDropdown.Item href="/expenses">Ver Historial</NavDropdown.Item>
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