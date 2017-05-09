import  React from 'react'
export default class Combo extends React.Component {
    constructor(props){
        super(props);
    }

    render (){
        return(
            <div>
                <select>
                    {this.props.data.map((item)=>{
                        return <option value={item}>{item}</option>;
                    })}
                </select>
            </div>
        );
    }
}