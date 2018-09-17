import React, { Component } from 'react';
let NewChurpForm = (props) =>{
    return <form className='new-churp-form'
            onSubmit= { (event) => {
                event.preventDefault();
                props.addChurp(props.newChurp);
            }
        }>
            <input
                type= 'text'
                value= {props.newChurp} 
                onChange= {(event)=> {
                    let value = event.target.value;
                    props.setNewChurp(value)
                }
            }/>
            <button type='submit'>Submit</button>
        </form>
}

export default NewChurpForm;