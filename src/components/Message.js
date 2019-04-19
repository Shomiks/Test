import React, {Component} from 'react';
import '../App.css';
import {Row, Col, Form,Button} from 'react-bootstrap';
import '../logIn.css'
import 'bootstrap/dist/css/bootstrap.css';


class Message extends Component {
    constructor(props){
        super(props);
        this.state={
            currentStep: this.props.currentStep,
            onAddStep : this.props.onAddStep,
            onBackStep: this.props.onBackStep,
            text: '',
            id: this.props.id,
            goLive: this.props.goLive
        }
    }

    render() {
        let username = "";
        for (let i = 0; i < this.state.goLive.Users.length; i++) {
            if(this.state.goLive.Messages[this.state.id].UserID === this.state.goLive.Users[i].UserID){
                console.log(this.state.goLive.Users[i]);
                username = this.state.goLive.Users[i].Username;
        }
        }

        return (
            <div className="addMessageContainer">
                <Row>
                    <Col>

                    </Col>
                    <Col>
                        <Row>
                            <Col>
                            <span>
                                {username}
                            </span>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="messageText">
                                    {this.state.goLive.Messages[this.state.id].Text}
                                </div>
                            </Col>
                        </Row>


                    </Col>
                    <Col>

                    </Col>
                </Row>
            </div>
        );
    }
}

export default Message;
