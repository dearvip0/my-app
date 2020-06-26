import React, { Component } from 'react';

export default class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };

        this.handeClick = this.handeClick.bind(this);
    }
    handeClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }
    render() {
        return (
            <button onClick={this.handeClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}