import React, { Component } from "react";

export default class EVENT_BINDING extends Component {

    /**
     * Constructor Method for the class EVENT_BINDING
     * @param props
     */
    constructor(props) {
        super(props);

        this.state = {
            count : 0
        }
    }

    /**
     * handleClick method implemented
     * @returns {JSX.Element}
     */
    handleClick () {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <h1> {this.state.count} </h1>
                <button onClick={this.handleClick.bind(this)}>Increase</button>
            </div>
        )
    }
}