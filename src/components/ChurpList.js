import React, { Component } from 'react';
import IndividualChurp from './IndividualChurp.js';

let ChurpList = (props) =>
    <ul className='churp-list'>
        {props.churps.map(churp =>
        <IndividualChurp churp= {churp} key= {churp.id} />)
    }
    </ul>
export default ChurpList;