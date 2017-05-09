import React from 'react';
export default class List extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.data.map((item)=>{
                    return <div>
                        {item.name}
                        </div>;
                })}
            </div>
        );
    }
}
