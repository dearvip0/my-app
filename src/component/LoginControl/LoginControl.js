import React, { Component } from 'react';
export default class LoginControl extends Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handlerLogoutClick = this.handlerLogoutClick.bind(this);
        this.state = { isLoggedIn: false }
    }
    handleLoginClick() {
        this.setState({ isLoggedIn: true });
    }
    handlerLogoutClick() {
        this.setState({ isLoggedIn: false });
    }
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handlerLogoutClick}></LogoutButton>
        } else {
            button = <LoginButton onClick={this.handleLoginClick}></LoginButton>
        }

        return (
            <Greeting isLoggedIn={isLoggedIn}>
                {button}
            </Greeting>
        )
    }
}
function UserGreeting(props) {
    return (
        <h1>Welcome back!</h1>
    )
}
function GuestGreeting(props) {
    return (
        <h1>Please sign up</h1>
    )
}
function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}
function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}
function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}