import React from 'react';
import Home from './HomeComponent';
import {EMPLOYEE} from '../shared/employee';

class Main extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            employee : EMPLOYEE,
        }
    }

    render(){
        return(
        <>
        <Home employee = {this.state.employee}/>
        </>
        )
    }
}

export default Main;