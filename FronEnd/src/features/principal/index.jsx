import { Fragment, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { BarGraphComponent } from '../../components/charts/bar';
import { DonutGraphComponent } from '../../components/charts/Doughnut';
import "react-big-calendar/lib/css/react-big-calendar.css";
// import imageIngreso from '../../assets/images/ingresos.png';
// import imageGasto from '../../assets/images/gastos.png';
import '../../../src/assets/css/principal.css';
import { Container, Card, Row, Col, InputGroup, Form, Image } from 'react-bootstrap';
// import Revenues from './Revenues';

const dataBar = {
  labels: ["Previsto","Real"],
  datasets: [{
    label: 'GASTOS',
    data: [500.000, 450.000],
    fill: false,
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)'
    ],
    borderWidth: 1
  }]
};

const dataDonut = {
    labels: [
        'Ocio',
        'Transporte',
        'Vivienda'
      ],
      datasets: [{
        label: 'Detalle Gastos',
        data: [300.000, 500.000, 100.000],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]    
};

const localizer = momentLocalizer(moment)

export default function Principal() {
    const [getModalRevenues, setModalRevenues] = useState(false);
    const stateModalRevenue = () => {
        setModalRevenues(!getModalRevenues);
    }

    return(
        <Fragment>
            <Row>
                <Col xs={{ order: 'first' }}>
                    <Row className='centered-text' style={{ height: '50vh', textAlign: '-webkit-center' }}>
                        <Col xs={12} md={12} lg={12} style={{width:"100%", height:"100%"}}>
                            <DonutGraphComponent 
                                data={dataDonut}
                            />
                        </Col>
                    </Row>
                    <Row className='centered-text' style={{ marginTop: '4vh', height: '30vh', textAlign: '-webkit-center' }}>
                        <Col xs={12} md={12} lg={12} style={{width:"100%", height:"100%"}}>
                            <BarGraphComponent
                                data={dataBar} 
                            />
                        </Col>
                    </Row>
                    <Row style={{marginTop: '4vh'}}>
                        <Col xs={12} md={12} lg={12} style={{paddingRight: '30vh', paddingLeft: '30vh'}}>
                        <InputGroup>
                            <InputGroup.Text id="btnGroupAddon2">Efectivo Disponible</InputGroup.Text>
                                <Form.Control
                                    disabled
                                    placeholder="$ 50.000"
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                </Col>
                <Col xs={{ order: 'last' }}>
                    <Row>
                        <Col xs={6} md={6} lg={6}>
                            <Card className="text-center">
                                <Card.Header>Objetivos</Card.Header>
                                <Card.Body>
                                    <Card.Title>$ 345.000</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={6} md={6} lg={6}>
                            <Card className="text-center">
                                <Card.Header>Pagos Programados</Card.Header>
                                <Card.Body>
                                    <Card.Title>$ 105.000</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row style={{marginTop: '4vh'}}>
                        <Col xs={12} md={12} lg={12}>
                            <Calendar 
                                localizer={localizer}
                                style={{ height: '77vh' }}
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Fragment>
    );
}