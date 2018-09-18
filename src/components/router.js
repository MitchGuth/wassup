import React, {Component} from 'react';
import { HashRouter, Route, NavLink } from 'react-router-dom';
// import Homepage from './Homepage.js';
import HomepageContainer from '../App.js'

let NavBar = () =>{
    return <div>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/profile">Profile</NavLink>
    </div>
};
let About = () =>
    <h1>This is the story of a girl, cried a river and drowned the whole world.</h1>

let Profile = () =>
    <h1>She looks so sad in photographs, I absolutely love her... When she smiles</h1>


let Router = () =>{
    return <HashRouter>
                <div>
                    <NavBar/>
                    <Route path="/home" component={HomepageContainer}/>
                    <Route path="/about" component={About}/>
                    <Route path="/profile" component={Profile}/>
                </div>
            </HashRouter>
}

export default Router;