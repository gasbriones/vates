import React from 'react';

export default class Blink extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showText:true
        };

        setInterval(()=>{
            this.setState({
                showText:!this.state.showText
            })
        },1000)

    }

    render (){
        let display = this.state.showText ? 'Este es el texto a mostrar' : '';

        return (
            <div>{display}</div>
        );
    }
}