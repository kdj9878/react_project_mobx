import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import LoginContainer from '../../containers/LoginContainer'

@inject('userStore')
@observer
class LoginPage extends Component {

   
    render() { 
        return ( 
        <div>
            <LoginContainer userStore = {this.props.userStore}/>
        </div> 
        );
    }
}
 
export default LoginPage;
