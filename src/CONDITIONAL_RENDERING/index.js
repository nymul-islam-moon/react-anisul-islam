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
             * Message : && uses for if fthe first condition is true, then it will check second condition if not it will break there!! It is called Short Circuit
             */
            <div>
                { isLoggedIn && <Home /> }
            </div>
        )
    }
}

export default CONDITIONAL_RENDERING