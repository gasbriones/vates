import React from 'react';

export default class Clicker extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            clicks: 0
        };
    }

    onCowClick = (evt) => {
        this.setState({
            clicks: this.state.clicks + 1
        });
    }

    render() {
        return (
            <div>
                <div>Clicks: {this.state.clicks}</div>
                <img
                    src="http://s3.bypaulshen.com/buildwithreact/cow.png"
                    onClick={this.onCowClick}
                    className="cow"
                />
                <p>Click the cow</p>
            </div>
        );
    }
};