import React, { Component } from "react";

export default class EVENT_HANDLER_CLASS extends Component {

    /**
     * All Methods are implemented here before render
     * @returns {JSX.Element}
     */

    handleClick = () => {
        alert('Button Clicked')
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}> Click Here </button>
            </div>
        )
    }
}