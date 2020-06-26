import React, { Component } from 'react'

export default class LoggingButton extends Component {
    handlerClick = () => {
        console.log('this is', this);

    }
    render() {
        return (
            <button onClick={() => this.handlerClick()}>
                Click me!
            </button>
        )
    }
}