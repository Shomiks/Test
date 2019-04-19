import React, {Component} from 'react';
import '../App.css';
import '../logIn.css'
import 'bootstrap/dist/css/bootstrap.css';
import {Row, Col, Form, Button} from 'react-bootstrap';


class AddMessage extends Component {
    constructor(props) {
        super(props);
        this.state={
            goLive: this.props.goLive,
            onAddMessage:this.props.onAddMessage,
            text: '',
            msgid: 0,
        }
    }

    handleText = (event) =>{
        this.state.text = event.target.value;
        console.log(this.state.text);
    };

    addMessage= ()=>{
        let message = {
            text : this.state.text,
            userid : this.state.goLive.CurrentID,
            id: this.state.goLive.MessageID
        };
        this.state.onAddMessage(message);
    };

    removeMessage= () =>{

    }


    render() {

        let username = "";
        for (let i = 0; i < this.state.goLive.Users.length; i++) {
            if(this.state.goLive.CurrentID === this.state.goLive.Users[i].UserID){
                username = this.state.goLive.Users[i].Username;
            }
        }

        return (

            <div id="addMessageContainer" className="addMessageContainer">
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
                                <Form.Label>Your message </Form.Label>
                                <Form.Control onChange={this.handleText} as="textarea" rown="3" placeholder="Message"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col xl="8">

                            </Col>
                            <Col xl="4">
                                <div className="buttonContainer">

                                    <Button onClick={this.addMessage} variant="primary" size="xl" active>
                                        Add Message
                                    </Button>
                                </div>
                            </Col>
                            <Col>
                                <Button onClick={this.removeMessage} variant="primary" size="xl" active>
                                    Delete messages
                                </Button>
                            </Col>

                        </Row>

                    </Col>
                    <Col>

                    </Col>
                </Row>
            </div>

        )
    }

}

export default AddMessage;
