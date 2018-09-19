import React, { Component } from 'react';
import { connect } from 'react-redux';
let NewChurpForm = (props) =>{
    return <form className='new-churp-form'
            onSubmit= { (event) => {
                event.preventDefault();
                // props.addChurp(props.newChurp);
                props.dispatch({
                    type: "ADD_WASSUP",
                    newChurp: props.newChurp
                })
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
let ConnectedChurp = connect()(NewChurpForm);
export default ConnectedChurp;