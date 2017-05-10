import React from 'react';

export default class Blink extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showText: true};

        // Toggle the state every second
        setInterval(() => {
            this.setState({ showText: !this.state.showText });
        }, 1000);
    }

    render() {
        let display = this.state.showText ? 'Hola mundo' : ' ';
        return (
            <div>{display}</div>
        );
    }
}