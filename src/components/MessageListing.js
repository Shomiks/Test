import React from 'react';
import _ from 'lodash';
import '../logIn.css'

import { Row, Col, Button } from 'react-bootstrap';

import Message from "./Message";

const MessageListing = ({messages, navigateTo, user, users}) => (
    <div className="containerListing">
        <Row>
            <Col>
                <Button onClick={() => navigateTo(1)} variant="primary" size="xl" active>
                    Logout
                </Button>
                <span>You are logged in as {user.username}</span>
            </Col>
        </Row>
        <Row>
            <Col>
                <div className="messagesContainer">
                    {messages.map(message =>
                        <Message message={message} creatorUser={_.find(users, usr => usr.id === message.userId)}  />)}
                </div>
            </Col>
        </Row>
        <Row />
    </div>
);


export default MessageListing;
