import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Router from './components/router.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import generateId from './components/generateId.js';

let initialState = {
    wassupList: [
        {
            "id": 1,
            "content": "I am the content of the first churp.",
            "user": "Mitch"
        },
        {
            "id": 2,
            "content": "Second churp.",
            "user": "Emily"
        }
    ]
}

let reducer = (oldState, action) =>{
    if(action.type === 'ADD_WASSUP'){
        let newWassupList = oldState.wassupList.concat([
            {
                id: generateId(),
                content: action.newChurp
            }
        ])
        return{
            ...oldState, 
            wassupList: newWassupList
        }
    }
    else if (action.type === 'DELETE_WASSUP'){
        let newWassupList = oldState.wassupList.filter(wassup => 
            wassup.id !== action.id);
        return {
            ...oldState, 
            wassupList: newWassupList
        }
    }
    else{
        return {
            ...oldState
        }
    }
};

let store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
);

let app = 
    <Provider store = {store}>
        <Router />
    </Provider>

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();