import React from 'react';
import {colors, fruits, users} from '../data/data'
import Cuadros from './Cuadros';




export  default class Main extends React.Component {
    constructor (props){
        super(props);

    }
    render (){
        return (
            <div>
               <Cuadros data={colors} />
            </div>

        );
    }
}