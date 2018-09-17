import React from 'react';
import generateId from './components/generateId.js';
import Homepage from './components/Homepage.js';

class HomepageContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            churps: []
        }
    }
    componentDidMount() {
        let retrievePosts = () =>
            fetch(`http://0.tcp.ngrok.io:10766/wassups.json`)
                .then(response =>{
                    return response.json()})
                    .then(data =>{
                        this.setState({churps: data});
                    })
        retrievePosts();
    }
    render() {
        
        let addChurp = (newChurp) => {
            this.setState({churps: this.state.churps.concat([
                    {
                        userId: 1,
                        id: generateId(),
                        content: newChurp
                    }
                ])
            })
        }

        return <Homepage {...this.state} 
            {...this.props} 
            addChurp ={addChurp}/>

    };
};

export default HomepageContainer;
