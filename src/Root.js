import LoginContainer from "./containers/LoginContainer";
import React, {Component} from 'react'
import {observer} from 'mobx-react'


@observer
class Root extends Component {
    render() { 
        return (
        <LoginContainer />
        )
    }
}
 
export default Root;