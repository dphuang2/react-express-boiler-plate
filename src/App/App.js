import React, { Component } from 'react';
import './App.css';


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ""
        }
        let _self = this;
        fetch("http://localhost:5000")
            .then(function(response){
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: '
                        + response.status);
                    return;
                }
                // Examine the text in the response
                response.text().then(function(data) {
                    _self.setState({text: data})
                });
            })
    }

    render() {
        return (
            <div className="App">
                <p> {this.state.text} </p>
            </div>
        );
    }
}

export default App;
