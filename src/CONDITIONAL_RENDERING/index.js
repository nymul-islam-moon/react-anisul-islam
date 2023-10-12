import React, {Component} from "react";
import Home from './Home'
import Login from './Login'

class CONDITIONAL_RENDERING extends Component {

    constructor(props) {
        super(props);


        this.state = {
            isLoggedIn : true
        }
    }

    render() {

        if ( this.state.isLoggedIn ) {
            return <Home />
        } else {
            return <Login />
        }

        // return (
        //     <div>
        //
        //     </div>
        // )
    }
}

export default CONDITIONAL_RENDERING