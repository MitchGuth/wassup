import React, { Component } from 'react';
import AppTitle from './AppTitle.js';
import NewChurpContainer from './NewChurpContainer.js';
import ChurpList from './ChurpList.js';

let Homepage = (props) =>
    <div className= 'whole-page'>
        <AppTitle/>
        <NewChurpContainer addChurp= {props.addChurp}/>
        <ChurpList wassupList= {props.wassupList}/>
    </div>

export default Homepage;