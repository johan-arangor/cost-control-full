import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Container, Card } from 'react-bootstrap';
import axios from 'axios';
import Swal from "sweetalert2";
import { url } from "../../globals";
import { useNavigate } from 'react-router-dom';
import { ValidToken } from './indexValidToken';
import { NotToken } from './indexNotValidToken';

const initialForm = { password: '', confirmPassword: '' };

export default function ChangePassword() {
    const [form, setForm] = useState(initialForm);
    const [textError, setTextError] = useState(true);
    const [hasToken, setHasToken] = useState(false);
    const navigate = useNavigate();
    const token = window.location.pathname.split('/')[2];
    const mounted = useRef(false);

    useEffect(() => {
        if (!mounted.current) {
            axios
                .get(`${url}/user/changePasswordLink/${token}`)
                .then(() => setHasToken(true))
                .catch(err => Swal.fire(err.response.data));
            mounted.current = true;
        }
    }, [token]);

    useEffect(() => {
        const ok =
            form.password === form.confirmPassword &&
            form.password.length >= 8;
        setTextError(!ok);
    }, [form]);

    const handleChange = useCallback(e => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    }, []);

    const handleSubmit = useCallback(
        e => {
            e.preventDefault();
            axios
                .post(`${url}/user/changePassword`, {
                    password: form.password,
                    token,
                })
                .then(res =>
                    Swal.fire(res.data).then(() => {
                        setForm(initialForm);
                        navigate('/login');
                    })
                )
                .catch(err => Swal.fire(err.response.data));
        },
        [form, navigate, token]
    );

    return (
        <Container>
            <Card className="m-5 shadow-lg border-0">
                {hasToken ? (
                    <ValidToken
                        form={form}
                        textError={textError}
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                    />
                ) : (
                    <NotToken />
                )}
            </Card>
        </Container>
    );
}