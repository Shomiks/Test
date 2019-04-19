import React, { useState} from 'react';
import styled from 'styled-components';
import {Row, Col, Form,Button} from 'react-bootstrap';
import '../logIn.css'

const TitleStyled = styled.div`
    max-width: 100%;
    min-height: 300px;
    line-height: 300px;
    text-align: center;
`;
const LoginContainer = styled.div`
    width: 100%;
    height: auto;
    margin: 0;
`;

const Login = ({ step, navigateTo, signUp,login }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <LoginContainer>
        <Row>
            <Col>
                <TitleStyled>TwittBox</TitleStyled>
            </Col>
        </Row>
            <Row>
                <Col />
                <Col>
                    <Row>
                        <Col xl={12} lg={12}>
                            <Form.Label>Username</Form.Label>
                            <Form.Control onChange={event => setUsername(event.target.value)} type="text" placeholder="Username"/>
                        </Col>
                        </Row>
                        <Row>
                            <Col xl={12} lg={12}>
                                <Form.Label>Password</Form.Label>
                                <Form.Control onChange={event => setPassword(event.target.value)} type="password" placeholder="Password" />
                            </Col>
                        </Row>
                    <Row>
                        <Col xl={6} lg={6}>
                            {step === 0 &&  <span onClick={() => navigateTo(1)}>Do you have already account ?</span>}
                        </Col>
                        <Col >
                            {step === 1
                                ? <Button onClick={() => signUp({ username, password})} variant="primary" size="xl" active>Sign
                                    up</Button>
                                : <Button onClick={() => login({username, password})} variant="primary" size="xl" active>Log
                                    in</Button>
                            }
                        </Col>
                        <Col>
                            <Button onClick={() => navigateTo(0)}  variant="primary" size="xl" active>
                                Back
                            </Button>
                        </Col>
                    </Row>
                </Col>
                <Col>

                </Col>
            </Row>
        </LoginContainer>)
};

export default Login;
