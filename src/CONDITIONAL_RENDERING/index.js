import React, {Component} from "react";
import Home from './Home'
import Login from './Login'

class CONDITIONAL_RENDERING extends Component {

    constructor(props) {
        super(props);


        this.state = {
            isLoggedIn : false
        }
    }

    render() {

        const { isLoggedIn } = this.state;

        return (
            /**
             * Message : We Can directly use ternary operator in the return
             */
            <div>
                { isLoggedIn ? <Home /> : <Login /> }
            </div>
        )
    }
}

export default CONDITIONAL_RENDERING