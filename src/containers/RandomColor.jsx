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
        console.log(this.state.background);
    };

    cycleColor = () => {
        setInterval(this.randomColor, 1000);
    };

    componentDidUpdate(_prevPropts, prevState) {
        console.log(prevState.background, this.state.background);
        if (prevState.background === this.state.background) {
            this.setState({
                background: 'url("https://i.pinimg.com/originals/8a/51/24/8a512473dbb09a4e11107b33da78f2dc.jpg")'
            });
            console.log('match');
        }
    };

    componentDidMount = () => {
        this.cycleColor();
    }

    render() {
        const { background } = this.state;
        return (
            <>
                <Display background={background} />
            </>
        );
    }
}