import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import Chance from 'chance';
import localStorage from 'localStorage';

import 'bootstrap/dist/css/bootstrap.css';

import MessageListing from './components/MessageListing';
import AddMessage from "./components/AddMessage";
import Login from './components/Login'


const AppStyled = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
`;

const chance = new Chance();

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            users: JSON.parse(localStorage.getItem('users')) || [],
            messages: JSON.parse(localStorage.getItem('messages')) || [],
            config: JSON.parse(localStorage.getItem('config')) || {
                user: {},
                step: 0,
            }
        };
    }

    navigateTo = step => {
        const { config } = this.state;
        localStorage.setItem('config', JSON.stringify({...config, step}));
        this.setState({
            ...this.state,
            config: {...config, step},
         });
    };


    signUp = async ({username, password}) => {
        const {config, users} = this.state;

        const user = {id: chance.guid(), username, password};

        if (!_.some(users, {username, password})) {
            localStorage.setItem('config', JSON.stringify({...config, user}));
            localStorage.setItem('users', JSON.stringify([...users, user]));
          this.setState({
                ...this.state,
                config: {...config, user},
                users: [...users, user]
            },() => this.navigateTo(2) );
        }
    };

    login = async ({username, password}) => {
        const { config, users } = this.state;
        const foundUser = _.find(users, usr => { return usr.username === username &&  usr.password === password});

        if (foundUser) {
            this.setState({
                ...this.state,
                config: {...config, user: foundUser},
            },() => this.navigateTo(2) );
        }
    };

    addMessage = ({message}) => {
        this.setState({
            ...this.state,
            messages: [...this.state.messages, {
                id: chance.guid(),
                text: message,
                userId: this.state.config.user.id,
            }]
        }, () => localStorage.setItem('messages', JSON.stringify(this.state.messages)))
    };

    render(){
        const { config, messages, users} = this.state;

        return (
        <AppStyled>
            {config.step !== 2
                ? (<Login step={config.step} navigateTo={this.navigateTo} signUp={this.signUp} login={this.login}/>)
                :
                <React.Fragment>
                    <MessageListing messages={messages} users={users} navigateTo={this.navigateTo} user={config.user}/>
                    <AddMessage addMessage={this.addMessage} user={config.user}/>
                </React.Fragment>
            }
        </AppStyled>
    );
}
}

export default App;
