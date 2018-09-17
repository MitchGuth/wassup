import React, { Component } from 'react';
import NewChurpForm from './NewChurpForm.js';

class NewChurpContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            newChurp : ''
        }
    }
    render(){
        let setNewChurp =(value)=>{
            this.setState({newChurp: value})
        }
        return <NewChurpForm 
        {...this.state} 
        {...this.props} 
        setNewChurp= {setNewChurp} />
    }
};

export default NewChurpContainer;