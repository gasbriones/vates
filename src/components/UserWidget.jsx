import React from 'react';

export default class UserWidget extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            fullName: `${props.firstName} ${props.lastName}`
        };
    }

    render () {
        return (
            <div>
                <h2>{this.state.fullName}</h2>
            </div>
        );
    }
}