import  React from 'react'
export default class Color extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            color:'blue'
        };

        this._colors = props.colors;
    }

    _handleChange = (event) =>{
        this.setState({
            color:event.target.value
        })
    }

    render (){
        return(
            <div>
                <select onChange={this._handleChange}>
                    {this._colors.map((color)=>{
                        return <option value={color}>{color}</option>;
                    })}
                </select>
                <div>{this.state.color}</div>
            </div>
        );
    }
}
