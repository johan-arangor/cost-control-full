import { Fragment, useState } from 'react';
import ModalLoading from '../../components/loading/loadingModal';
import imageLogo from '../../assets/images/loginPrincipal.png';
import { Row, Col, Form, Button, Container, Image, Card } from 'react-bootstrap';
import axios from 'axios';
import Swal from "sweetalert2";
import { url } from "../../globals";
import { useNavigate  } from 'react-router-dom';

const initialForm = {
    user: "",
    password: ""
};

export default function Login() {
	const [getForm, setForm] = useState(initialForm);
    const [getShow, setShow] = useState(false);
    const navigate  = useNavigate ();

    const handleChangeForm = (e) => {
		setForm({
		  ...getForm,
		  [e.name]: e.value,
		});
	};

    async function sendForm(e){
        e.preventDefault();

        axios.post(`${url}/user/login`, { user: getForm.user, password: getForm.password } )
            .then((response) => {
                Swal.fire(response.data.message)
                // .finally(() => {
                //     setForm({
                //         ...getForm,
                //         user: "",
                //         password: ""
                //     });
                //     localStorage.setItem('Token-costControl', response.data.data.token);
                //     localStorage.setItem('User-costControl', response.data.data.user);

                //     navigate('/principal');
                // });
            })
            .catch((err) => {
                Swal.fire(err.response.data)
            });
    }

    return(
        <Fragment>
            <Container>
                <Card border='0' className='m-5 shadow-lg'>
                    <Row className='justify-content-center'>
                        <Col lg='6' md='6' sm='12'>
                            <Container fluid style={{height: '100%'}} className='justify-content-center p-5'>
                                <h1 class='text-center'>Bienvenid@</h1>
                                <Form fluid style={{height: '100%'}} className='justify-content-center p-3' onSubmit={ sendForm }>
                                    <Form.Group className="mb-3" controlId="email">
                                        <Form.Label>Dirección email</Form.Label>
                                        <Form.Control size="lg" type="email" placeholder="Ingrese email" name="user" onChange={(e) => handleChangeForm(e.target)} value={getForm.user} required autoComplete='off'/>
                                            <Form.Text className="text-muted">
                                                Nunca compartiremos su correo electrónico con nadie más.
                                            </Form.Text>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="password">
                                        <Form.Label>Contraseña</Form.Label>
                                        <Form.Control size="lg" type="password" placeholder="Contraseña" name="password" onChange={(e) => handleChangeForm(e.target)} value={getForm.password} required/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="password">
                                        <Row>
                                            <Button size="lg" variant="outline-primary btn-block" type="submit" block>
                                                Inresar
                                            </Button>
                                        </Row>
                                    </Form.Group>
                                    <p>
                                        No tienes una cuenta? <span><a href='/signup'>registrarte aquí</a></span>
                                    </p>
                                    <p>
                                        Olvidaste tu contraseña? <span><a href='/renewPassword'>recuperala aquí</a></span>
                                    </p>
                                </Form>
                            </Container>
                        </Col>
                        <Col lg='6' md='6' sm='12' className='p-5'>
                            <Container>
                                <Image src={ imageLogo } fluid />
                            </Container>
                        </Col>
                    </Row>
                </Card>
            </Container>
            {getShow && (
                <ModalLoading 
                    stateShow = { getShow }
                />
            )}
        </Fragment>
    );
}