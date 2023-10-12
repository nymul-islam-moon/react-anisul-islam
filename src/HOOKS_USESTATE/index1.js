import React, { Component } from "react";

export default class HOOKS_USESTATE extends Component {

    constructor( props ) {
        super( props );

        this.state = {
            count : 0
        }
    }

    handleIncrement = () => {
        this.setState({
            count : this.state.count + 111
        })
    }

    render() {
        const {count} = this.state;

        return (
            <div>
                <h2>Count : { count }</h2>
                <button onClick={this.handleIncrement}>Increment</button>
            </div>
        );
    }

}