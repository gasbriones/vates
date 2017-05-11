import React from 'react';

export default class Clicker extends React.Component {
    constructor (props){
        super (props);

        this.state = {
            click:0
        }
    }

    handleClick = (evt) => {
        this.setState({
            click: this.state.click + 1
        })
    };

    handleReset = () => {
        this.setState ({
            click: 0
        })
    };

    render (){
        return (
            <div>
                <h1>Clicks: {this.state.click}</h1>
                <img src="http://s3.bypaulshen.com/buildwithreact/cow.png" onClick={this.handleClick}  />
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}