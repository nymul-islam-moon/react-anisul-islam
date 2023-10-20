import React, { Component } from "react";

// Mounting -> constructor -> render -> componentDidMount
// Updating -> state/props -> render ->
// Unmounting

export default class LifeCycle extends Component {

    constructor(props) {
        super(props);
        console.log("constructor");
        this.state = {};
    }
    componentDidMount() {
        console.log("ComponentDidMount");
    }

    render() {
        {
            console.log('render');
        }
        return (

            <div>LifeCycle</div>
        )
    }
}