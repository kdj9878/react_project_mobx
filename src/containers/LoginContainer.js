import React, {Component} from 'react'
import LoginForm from '../components/login/LoginForm';
import {withCookies} from 'react-cookie';
import fetchLogin from '../service/RequestAxios';
import {setCookie} from '../utils/cookie';
import RequestAxios from '../service/RequestAxios';


class LoginContainer extends Component {


    loginUser = (formData) =>{
        const data = {
            userInfo : {
                id : formData.id,
                password : formData.password,
                remember : formData.remember
            }
        }
        this.requestLoginUser(data);
    }

    requestLoginUser = async (data) =>{
        await RequestAxios.requestLogin(data)
    }

    setCostomCookie = (userInfo) =>{

        const now = new Date();
        const expires = new Date();

        expires.setHours(now.getHours + 1);

        //유저 이름과 권한을 쿠키에 저장
        const userNameAndAuthor = {
            "name": userInfo.name,
            "author": userInfo.author
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