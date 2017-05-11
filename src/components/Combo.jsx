
import  React from 'react'
export default class Combo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            color: 'pink'
        }
    }

    handleChange = (event) => {
        let newColor = event.target.value;
        this.setState({
            color: newColor
        })
    };


    render (){
        return(
            <div >
                <select onChange={this.handleChange}>
                    {this.props.data.map((item,index)=>{
                        return <option value={item} key={index}>{item}</option>;
                    })}
                </select>
                <div style={{background:this.state.color, width:'400px', height:'400px'}}>
                    <h1>{this.state.color}</h1>
                </div>
            </div>
        );
    }
}