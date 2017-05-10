import  React from 'react'
export default class Combo extends React.Component {
    constructor(props){
        super(props);
    }

    render (){
        return(
            <div>
                <select>
                    {this.props.data.map((item,index)=>{
                        return <option value={item} key={index}>{item}</option>;
                    })}
                </select>
            </div>
        );
    }
}