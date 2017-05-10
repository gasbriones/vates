import  React from 'react'
export default class Cuadros extends React.Component {
    constructor(props){
        super(props);
    }

    _handleClick (e){
        let color = e.target.value;
        alert(color);
    }

    render (){
        return(
            <div>
                {this.props.data.map((item,index)=>{
                    return <div style={{backgroundColor:item, width:'100px', height:'100px'}} key={index} >
                        <button onClick={this._handleClick} value={item}>Add to cart</button>
                    </div>;
                })}
            </div>
        );
    }
}