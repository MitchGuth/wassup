import React, { Component } from 'react';
import IndividualChurp from './IndividualChurp.js';

let ChurpList = (props) =>
    <ul className='churp-list'>
        {props.wassupList.map(wassup =>
        <IndividualChurp wassup= {wassup} key= {wassup.id} />)
    }
    </ul>


export default ChurpList;
