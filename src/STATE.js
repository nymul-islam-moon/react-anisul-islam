import React, { Component } from "react";

export default class STATE extends Component {
    /**
     * Creating STATE
     * @returns {JSX.Element}
     */
    constructor(props) {
        super(props);

        this.state = {
            count : 0
        }
    }


    handleIncrement = () => {
        this.setState({
            count : this.state.count + 1
        })
    }

    handleDecrement = () => {
        this.setState( {
            count : this.state.count -1
        } )
    }

    render() {
        /**
         * Desctructred
         */
        const {count} = this.state;

        return (
            <div>
                <h1>Count : { count }</h1>
                <button onClick={this.handleIncrement}>+</button>
                <button onClick={this.handleDecrement}>-</button>
            </div>
        )
    }
}