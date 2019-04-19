import React, { useState } from 'react';
import styled from 'styled-components';
import {Row, Col, Form, Button} from 'react-bootstrap';

// Component types
// 1. Complex (state, lifecycle methods)
// 2. Functional or Stateless component

// Re-rendering
// 1. State changes
// 2. Props changes

const Container = styled.div`
    margin-top: 200px;
`

const AddMessage = ({user, addMessage}) => {
    const [ message, setMessage ] = useState('');

    return (
        <Container>
            <Row>
                <Col />
                <Col>
                    <Row>
                        <Col>
                            <span>{user.username}</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Label>Your message </Form.Label>
                            <Form.Control
                                onChange={event => setMessage(event.target.value)}
                                as="textarea"
                                rown="3"
                                placeholder="Message" />
                        </Col>
                    </Row>
                    <Row>
                        <Col xl="8" />
                        <Col xl="4">
                            <div className="buttonContainer">
                                {user.username}
                                <Button onClick={() => addMessage({message})} variant="primary" size="xl" active>
                                    Add Message
                                </Button>
                            </div>
                        </Col>
                        <Col>
                            <Button onClick={() => {}} variant="primary" size="xl" active>
                                Delete messages
                            </Button>
                        </Col>
                    </Row>
                </Col>
                <Col />
            </Row>
    </Container>)
};

export default AddMessage;
