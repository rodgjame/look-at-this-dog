import React, { Component } from 'react'

export default class DogContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            dogUrl: "https://place.dog/300/200",
            imageHash: Date.now()
        }
    }

    setNewHash() {
        this.setState({
            imageHash: Date.now()
        });
    }

    render() {
        return (
            <div>
                <img src={`${this.state.dogUrl}?${this.state.imageHash}`} className="App-logo" alt="logo" />
                <p>
                    Look at this dog!!!
                </p>
                <button onClick={() => this.setNewHash()}>
                    Show me another please
                </button>
            </div>
        )
    }
}
