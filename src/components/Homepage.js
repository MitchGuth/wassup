import React, { Component } from 'react';
import AppTitle from './AppTitle.js';
import NewChurpContainer from './NewChurpContainer.js';
import ChurpList from './ChurpList.js';

let Homepage = (props) =>{
    return <div className= 'whole-page'>
            <AppTitle/>
            <NewChurpContainer addChurp= {props.addChurp}/>
            <ChurpList churps= {props.churps}/>
            </div>
}

export default Homepage;