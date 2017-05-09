import React from 'react';
import {colors, users, fruits} from '../data/data'
import Combo from './Combo';
import List from './List';


export  default class Main extends React.Component {
    constructor (props){
        super(props);

    }
    render (){
        return (
            <div>
                <Combo data={colors} />
                <Combo data={fruits} />
                <List data={users} />
            </div>

        );
    }
}