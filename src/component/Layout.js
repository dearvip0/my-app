import React, { Component } from 'react';
import Toggle from './Toggle/Toggle';
import LoggingButton from './LoggingButton/LoggingButton';
import LoginControl from './LoginControl/LoginControl';
function FormattedDate(props) {
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>
}
export default class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 1000
        );
    }
    componentWillMount() {
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h2>Cities</h2>
                </header>
                <section className="App-section">
                    <nav className="App-nav">
                        <ul className="App-nav-ul">
                            <li><a href="#">London</a></li>
                            <li><a href="#">Paris</a></li>
                            <li><a href="#">Tokyo</a></li>
                        </ul>
                    </nav>
                    <article>
                        <FormattedDate date={this.state.date} />
                        {/* <Toggle /> */}
                        {/* <LoggingButton /> */}

                        <div><LoginControl /></div>
                    </article>
                </section>

                <footer className="App-footer">
                    <p>Footer</p>
                </footer>
            </div>
        )
    }
}