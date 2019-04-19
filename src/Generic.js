import React, {Component} from 'react';

class UserStruct {
    Username = '';
    Password = '';
    UserID = 0;

    constructor(data) {
        if (data !== undefined) {
            const keys = Object.keys(data);
            keys.forEach(key => {
                this[key] = data[key];
            });
        }
    }

    changeUser = (user) =>{
        this.UserID = user.id;
        this.Username = user.username;
        this.Password = user.password;
    }



}

class MessageStruct {
    Text = '';
    UserID = 0;
    MessageID = 0;

    constructor(data) {
        if (data !== undefined) {
            const keys = Object.keys(data);
            keys.forEach(key => {
                this[key] = data[key];
            });
        }
    }


    changeMessage = (message) =>{
        this.MessageID = message.id;
        this.Text = message.text;
        this.UserID = message.userid;
    }
}




class GoLiveStruct {
    CurrentStep = 0;
    ID = 0;
    CurrentID = 0;
    MessageID = 0;



    Messages = [];
    Users = [];


    constructor(data) {
        if (data !== undefined) {


            data.Users.forEach(user => {
                const newUser = new UserStruct(user);
                this.Users.push(newUser);
            });
            data.Messages.forEach(message => {
                const newMessage = new MessageStruct(message);
                this.Messages.push(newMessage);
            });

            this.CurrentStep = data.CurrentStep;
        }
    }



    addUser = () => {
        this.Users.push(new UserStruct());
    };

    addMessage = () =>{
        this.Messages.push(new MessageStruct());
    };

    SaveToLocalStorage = () => {
        window.localStorage.setItem('goliveconfig', JSON.stringify(this));
    };

    static getNew = () => {
        let data = new GoLiveStruct();

        data.Users.push(new UserStruct());
        data.Messages.push(new MessageStruct());

        data.Users = [];
        data.Messages = [];



        return data;
    };

    static LoadFromLocalStorage = () => {
        let data = window.localStorage.getItem('goliveconfig');

        if (data == null) {
            data = GoLiveStruct.getNew();
        } else {
            data = new GoLiveStruct(JSON.parse(data));
        }

        return data;
    }
}

export {GoLiveStruct};
export {UserStruct}