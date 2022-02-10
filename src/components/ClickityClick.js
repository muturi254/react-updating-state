// Code ClickityClick Component Here
import React, { Component } from 'react';

class ClikityClick extends Component {

    constructor(props) {
        super();
        this.state = {
            hasBeenClicked: false,
            count: 0
        }
    }

    handleClick = () => {
        let counter = this.state.count + 1
        this.setState({
            hasBeenClicked: true,
            count: counter
        });
        
    }

    render() {
        return (
            <div>
                <p>I have {this.state.hasBeenClicked ? null: 'not'} been clicked!</p>
                <p>Counter click {this.state.count} </p>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        )
    }
}

export default ClikityClick;