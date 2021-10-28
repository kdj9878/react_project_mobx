import React, {Component} from 'react'
import LoginForm from '../components/login/LoginForm';

class LoginContainer extends Component {

    loginUser = (id, password) =>{
        console.log(`id : ${id}, password : ${password}`)
    }

    render() { 
        return( 
        <div id="LoginContainer">
           <LoginForm {...this.props} loginUser={this.loginUser}/>
        </div>
    )
}
}
 
export default LoginContainer;