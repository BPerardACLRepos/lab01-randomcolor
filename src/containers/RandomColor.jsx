import React, { Component } from 'react';
import Display from '../components/display/Display';

export default class RandomColor extends Component {
    state = {
        background: 'green',
    };

    handleBackgroundChange = (color) => {
        this.setState({ background: color });
    };

    randomColor = () => {
        const colors = ['pink', 'red', 'yellow', 'green', 'blue'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        this.handleBackgroundChange(color);
    };

    cycleColor = () => {
        setInterval(this.randomColor, 1000);
    };

    componentDidMount = () => {
        this.cycleColor();
    }

    render() {
        const { background } = this.state;
        console.log(this.state.background)
        return (
            <>
                <Display background={background} />
            </>
        );
    }
}