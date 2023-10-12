import React, { Component } from "react";

export default class EVENT_HANDLER_CLASS extends Component {

    /**
     * All Methods are implemented here before render
     * @returns {JSX.Element}
     */

    constructor(props) {
        super(props);

        this.state = {
            changedValue : ''
        }
    }

    handleChange = ( e ) => {
        this.setState( {
            changedValue : e.target.value
        }, () => {
            console.log( this.state.changedValue )  // It will show currect changed value on the console 
        } )
        // console.log( this.state.changeddValue ) // if we console this we will see the value but one charecter behind cause this is not active on change function
    }

    render() {
        return (
            <div>
                <input type="text" onChange={    this.handleChange} />
                <h3>{ this.state.changedValue }</h3>
            </div>
        )
    }
}