import { Component } from 'react';
import './App.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: this.props.counter
        }
    }

    inc = () => {
        if (this.state.counter < 50) {
            this.setState(state => ({
                counter: state.counter + 1
            }))
        }
    }

    dec = () => {
        if (this.state.counter > -50) {
            this.setState(state => ({
                counter: state.counter - 1
            }))
        }
    }

    rnd = () => {
        const min = -50;
        const max = 50;
        const rand = Math.round(min + Math.random() * (max - min));
        this.setState(state => ({
            counter: 0 + rand
        }))
    }

    reset = () => {
        this.setState(state => ({
            counter: this.props.counter
        }))
    }

    render() {
        const { counter } = this.state;

        return (
            <div className="app">
                <div className="counter">{counter}</div>
                <div className="controls">
                    <button onClick={this.inc}>INC</button>
                    <button onClick={this.dec}>DEC</button>
                    <button onClick={this.rnd}>RND</button>
                    <button onClick={this.reset}>RESET</button>
                </div>
            </div>
        )
    }
}

export default App
