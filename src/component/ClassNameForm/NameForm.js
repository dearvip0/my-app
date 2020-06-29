import React, { Component } from 'react'

export default class NameForm extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlerChange = this.handlerChange.bind(this);
    }

    handlerChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert("HAKU: " + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                <input type="text" value={this.state.value} onChange={this.handlerChange}></input>
                    </label>
                    <input type="submit" value='submit'></input>
                </form>
            </div>
        );
    }
}
