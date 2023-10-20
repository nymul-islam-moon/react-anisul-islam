import React, { Component } from "react";

export default class LifeCycle extends Component {

    constructor(props) {
        super(props);
        console.log("constructor");
        this.state = {

        }
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