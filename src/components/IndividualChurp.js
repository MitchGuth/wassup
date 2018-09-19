import React, { Component } from 'react';
let IndividualChurp = (props) => 
    <li>
        <p className='individual-churp'>Wassup: {props.wassup.content}</p>
        {/* <Link to="`/feed/${props.churp.id}`">Show More</Link> */}
    </li>
export default IndividualChurp;