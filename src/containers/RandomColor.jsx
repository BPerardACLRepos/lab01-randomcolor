import React, { Component } from 'react';

export default class RandomColor extends Component {
    state = {
        background: '#FFF',
    };

    handleBackgroundChange = (color) => {
        this.setState({ background: color });
    };

    randomColor = () => {
        const colors = ['pink', 'red', 'yellow', 'green', 'blue'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        this.handleBackgroundChange(color);
    }

    cycleColor = setInterval(this.randomColor, 1000);

    render() {
        const { background } = this.state;

        return (
            <>
                <Display background={background} />
            </>
        );
    }
}