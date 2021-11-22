import React, {Component} from 'react'
import LoginForm from '../components/login/LoginForm';
import {withCookies} from 'react-cookie';
import {setCookie} from '../utils/cookie';
import RequestAxios from '../service/RequestAxios';
import { inject, observer } from 'mobx-react';

@inject('userStore')
@observer
class LoginContainer extends Component {



    loginUser = (formData) =>{
        const data = {
                userId : formData.id,
                userPw : formData.password,
            
        }
        this.requestLoginUser(data);
    }

    requestLoginUser = async (data) =>{
       const responseData = await RequestAxios.requestLogin(data);
       if(responseData){
          this.setLoginUser(responseData);
          this.setCostomCookie(responseData);
       }
       else{
          this.setLoginUser(responseData);
       }
    }

    setLoginUser = (responseData) =>{
        const userStore = this.props.userStore;
        if(responseData){
            userStore.setUser(responseData);
            userStore.setLoginState(1);
        }
        else{
            userStore.setLoginState(2);
        }

    }


    setCostomCookie = (responseData) =>{

        //토큰 유효 시간 1시간으로 설정
        const now = new Date();
        const expires = new Date();
        expires.setHours(now.getHours + 1);

        //유저 이름과 권한을 쿠키에 저장
        const userNameAndAuthor = {
            "name": responseData.username,
            "author": responseData.userauth
        }

        //백엔드 서버가 없기 때문에 임의로 토큰을 생성 후 쿠키에 설정
        const token = "aoifjaoiefjoaifiajfojeaiofaifoefaew" 
        setCookie('user' , userNameAndAuthor, {path:"/", expires:expires});
        setCookie('token', token, {path:"/", expires:expires});
    }

    render() { 
        return( 
        <div id="LoginContainer">
           <LoginForm {...this.props} loginUser={this.loginUser}/>
        </div>
    )
}
}
 
export default withCookies(LoginContainer);