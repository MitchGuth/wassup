import React, { Component } from 'react';
class HomepageContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            churps: []
        }
    }
    componentDidMount() {
        let retrievePosts = () =>
            fetch(`http://0.tcp.ngrok.io:11971/wassups.json`)
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