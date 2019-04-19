import React from 'react';
import styled from 'styled-components';
import {Row, Col } from 'react-bootstrap';

const MessageText = styled.div`
    background: #0084ff;
    color: #fff;
    border-radius: 30px;
    height: auto;
    display: inline-block;
    margin-bottom: 2px;
    padding: 12px;
`;

const Message = ({message, creatorUser}) =>  {
    return (
        <div className="addMessageContainer">
            <Row>
                <Col/>
                    <Col>
                    <Row>
                        <Col>
                        <span>{creatorUser.username}</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <MessageText>{message.text}</MessageText>
                        </Col>
                    </Row>
                </Col>
                <Col/>
            </Row>
        </div>
    );
};

export default Message;
