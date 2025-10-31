import React, { Component } from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = this._getCurrentTime();
    }

    _getCurrentTime() {
        const now = new Date();
        return {
            hours: now.getHours(),
            minutes: now.getMinutes(),
            seconds: now.getSeconds(),
            tick: this.state ? this.state.tick + 1 : 1
        }
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState(this._getCurrentTime());
        }, 1000);
    }

    componentWillUnmount() {
        console.log("unmount");
        clearInterval(this.intervalId);
    }

    render() {
        return (
                
            this.state.tick % 10 === 0 ?
                null : 
                <Clock
                    title={`Clock Component I: ${this.state.tick}`}
                    hours={this.state.hours}
                    minutes={this.state.minutes}
                    seconds={this.state.seconds} />
                
        );
    }
}