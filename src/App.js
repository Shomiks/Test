import React, {Component} from 'react';
import './App.css';
import Login from './components/Login'
import 'bootstrap/dist/css/bootstrap.css';
import AddMessage from "./components/AddMessage";
import Message from "./components/Message";
import {GoLiveStruct} from "./Generic";
import MessageListing from './components/MessageListing';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goLive: GoLiveStruct.LoadFromLocalStorage(),
            id: 0
        }
    }



    checkUser = (user) => {

        for (let i = 0; i < this.state.goLive.Users.length; i++) {
            console.log(user.username);
            console.log(user.password);
            if (user.username === this.state.goLive.Users[i].Username && user.password === this.state.goLive.Users[i].Password ) {
                    this.state.goLive.CurrentID = this.state.goLive.Users[i].UserID;
                    this.state.goLive.SaveToLocalStorage();
                    return true;
            }

        }

        return false;

    };


    addStep = (user) => {
        if (this.state.goLive.CurrentStep === 1) {
            this.state.goLive.addUser();
            this.state.goLive.ID++;
            this.state.goLive.Users[this.state.goLive.Users.length - 1].changeUser(user);
            this.state.goLive.CurrentStep++;
            this.state.goLive.CurrentID = this.state.goLive.Users[this.state.goLive.Users.length - 1].UserID;
            console.log(this.state.goLive.UserID, "peca");
            this.state.goLive.SaveToLocalStorage();
            console.log(this.state.goLive.UserID)
        } else {
            if (this.checkUser(user)) {
                console.log("success");
                this.state.goLive.CurrentStep+=2;
                this.forceUpdate();
            } else {
                alert("error");
            }
        }

        this.forceUpdate();
    };

    addMessage = (message) =>{
        this.state.goLive.addMessage();
        this.state.goLive.MessageID++;

        this.state.goLive.Messages[this.state.goLive.Messages.length - 1].changeMessage(message);
        this.state.goLive.SaveToLocalStorage();
        this.forceUpdate();
        console.log(this.state.goLive.Messages)
    };

    justAdd = () =>{
      this.state.goLive.CurrentStep++;
        this.forceUpdate();
    };

    backStep = () => {
        this.state.goLive.CurrentStep = 0;
        this.forceUpdate();
    };


    render() {
    console.log(this.state.goLive.CurrentStep);

        let html = [];
        switch (this.state.goLive.CurrentStep) {
            case 2:
                html.push(<MessageListing goLive={this.state.goLive} onLogout={this.backStep}/>);

                html.push(<AddMessage goLive={this.state.goLive} onAddMessage={this.addMessage}/>);
                break;
            default:
                html.push(<Login  goLive={this.state.goLive} onAddStep={this.addStep} onBackStep={this.backStep}
                                 currentStep={this.state.currentStep} onAddStepNumber={this.justAdd}/>);
                break;

        }

        console.log(this.state.goLive.CurrentStep);
        return (
            <div className="App">
                {html}
            </div>
        );
    }
}

export default App;
