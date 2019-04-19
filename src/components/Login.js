import React, {Component} from 'react';
import '../App.css';
import {Row, Col, Form,Button} from 'react-bootstrap';
import '../logIn.css'
import 'bootstrap/dist/css/bootstrap.css';


class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            currentStep: this.props.currentStep,
            onAddStep : this.props.onAddStep,
            onBackStep: this.props.onBackStep,
            onAddStepNumber: this.props.onAddStepNumber,
            goLive: this.props.goLive,
            username: '',
            password: '',
            id: 0
        }
    }

    handleUsername = (event) =>{
        this.state.username = event.target.value;
        console.log(this.state.username);
    };

    handlePassword = (event) =>{
        this.state.password = event.target.value;
        console.log(this.state.password);
    };


    addStep = () =>{
        let user = {
            username : this.state.username,
            password: this.state.password,
            id: this.state.goLive.ID
        };
        this.state.onAddStep(user);

    };

    addStepNumber = () =>{
        this.state.onAddStepNumber();
    };

    reset = () =>{
        this.state.onBackStep();
    };



    render() {
        return (
            <div className="logInContainer">
            <Row>
                <Col>
                    <div className="divWidder">TwittBox</div>
                </Col>
            </Row>
                <Row>
                    <Col>
                    </Col>
                    <Col>
                            <Row>
                                <Col xl={12} lg={12}>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control onChange={this.handleUsername} type="text" placeholder="Username"/>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={12} lg={12}>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control onChange={this.handlePassword} type="password" placeholder="Password" />
                                </Col>
                            </Row>
                        <Row>
                            <Col xl={6} lg={6}>
                                <div className={this.state.goLive.CurrentStep === 1 ? "hide" : "buttonContainer"}>
                                <span onClick={this.addStepNumber}  >Do you have already account ?</span>
                                </div>
                            </Col>
                            <Col >
                                <div className="buttonContainer">
                            <Button onClick={this.addStep}  variant="primary" size="xl" active>
                                {this.state.goLive.CurrentStep === 1 ? "Sign up" : "Log in"}
                            </Button>
                                </div>
                            </Col>
                            <Col>
                                <div className="buttonContainer">
                                    <Button onClick={this.reset}  variant="primary" size="xl" active>
                                        Back
                                    </Button>
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

export default Login;
