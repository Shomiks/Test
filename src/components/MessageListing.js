import React, {Component} from 'react';
import '../App.css';
import '../logIn.css'
import 'bootstrap/dist/css/bootstrap.css';

import {Row, Col, Form, Button} from 'react-bootstrap';
import {GoLiveStruct} from "../Generic";
import Message from "./Message";

class MessageListing extends Component {
    constructor(props){
        super(props);
        this.state={
            currentStep: this.props.currentStep,
            onAddStep : this.props.onAddStep,
            onBackStep: this.props.onBackStep,
            onLogout: this.props.onLogout,
            goLive: this.props.goLive
              }
    }
    logout = () =>{
        this.state.onLogout();
    };

    render() {
        let messages = [];
        let username = ""

        for (let i = 0; i < this.state.goLive.Messages.length; i++) {
            messages.push(<Message goLive={this.state.goLive} key={i} id={i} />)
        }
       // let messagesLastTen = messages.map(messages =>{
       //    return messages.slice(9, messages[messages.length-1]);
       // });

        for (let i = 0; i < this.state.goLive.Users.length; i++) {
            if(this.state.goLive.CurrentID === this.state.goLive.Users[i].UserID){
                username = this.state.goLive.Users[i].Username;
            }
        }

        return (
            <div className="containerListing">
                <Row>
                    <Col>
                        <Button onClick={this.logout} variant="primary" size="xl" active>
                            Logout
                        </Button>
                        <span>You are logged in as {username}  </span>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="messagesContainer">
                            {messages}
                        </div>
                    </Col>
                </Row>
                <Row>

                </Row>
            </div>
        );
    }
}

export default MessageListing;