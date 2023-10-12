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

        const { isLoggedIn } = this.state;

        let element;
        element = isLoggedIn ? <Home /> : <Login />

        return (
            /**
             * Warning : we can't use directly if-else in the return
             */
            <div>
                { element }
            </div>
        )
    }
}

export default CONDITIONAL_RENDERING