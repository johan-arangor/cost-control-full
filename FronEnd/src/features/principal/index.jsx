import { Fragment, useState } from 'react';
import { BarGraph } from '../../components/charts/bar';
// import imageIngreso from '../../assets/images/ingresos.png';
// import imageGasto from '../../assets/images/gastos.png';
import '../../../src/assets/css/principal.css';
import { Container, Card, Row, Col, Image } from 'react-bootstrap';
// import Revenues from './Revenues';
import { BarChart, Bar } from 'recharts';

const dataFake = [
    {value: "Previsto", valor: 230000},
    {value: "Real", valor: 450000}
];

export default function Principal() {
    const [getModalRevenues, setModalRevenues] = useState(false);

    const stateModalRevenue = () => {
        setModalRevenues(!getModalRevenues);
    }

    return(
        <Fragment>
            <Row>
                <Col xs={{ order: 'first' }}>
                    <Row>
                        <Col xs={12} md={12} lg={12}>Grafico Torta</Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12} lg={12}>
                            <BarGraph 
                                data={dataFake} 
                                dataKeyName="value"
                                dataKeyValue="valor"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12} lg={12}>Efectivo Valor</Col>
                    </Row>
                </Col>
                <Col xs={{ order: 'last' }}>
                    <Row>
                        <Col xs={6} md={6} lg={6}>Objetivos</Col>
                        <Col xs={6} md={6} lg={6}>Pagos Programados</Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12} lg={12}>Calendario</Col>
                    </Row>
                </Col>
            </Row>
        </Fragment>
    );
}