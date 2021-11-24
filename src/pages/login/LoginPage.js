import { Alert } from 'antd';
import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import LoginContainer from '../../containers/LoginContainer';

@inject('userStore')
@observer
class LoginPage extends Component {


    onClose = (e) => {
        console.log(e, 'I was closed.');
        this.props.userStore.setLoginState(0);
      };
   
    render() { 
        return ( 
        <>
            <LoginContainer userStore = {this.props.userStore}/>

            {
            this.props.userStore.loginState === 2
            ? 
            <div className="login-fail-alert">
              <Alert className="loginFailAlert"
              message="로그인 실패"
              description="아이디 혹은 비밀번호가 일치하지 않습니다."
              type="error"
              closable
              onClose={this.onClose}
            />
            </div>
            : null
            }
        </> 
        );
    }
}
 
export default LoginPage;
