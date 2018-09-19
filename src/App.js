import React from 'react';
import generateId from './components/generateId.js';
import Homepage from './components/Homepage.js';
import {connect} from 'react-redux';

class HomepageContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            churps: []
        }
    }
    // componentDidMount() {
    //     let retrievePosts = () =>
    //         fetch(`http://0.tcp.ngrok.io:11140/wassups.json`)
    //             .then(response =>{
    //                 return response.json()})
    //                 .then(data =>{
    //                     this.setState({churps: data});
    //                 })
    //     retrievePosts();
    // }
    render() {
        
        // let addChurp = (newChurp) => {
        //     this.setState({churps: this.state.churps.concat([
        //             {
        //                 userId: 1,
        //                 id: generateId(),
        //                 content: newChurp
        //             }
        //         ])
        //     })
        // }
// {...this.state} 
// addChurp ={addChurp}
        return <Homepage {...this.props} />

    };
};

let AppSmart = connect(state=> state)(HomepageContainer)

export default AppSmart;
