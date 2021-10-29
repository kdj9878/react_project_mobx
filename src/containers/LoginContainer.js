import React, {Component} from 'react'
import LoginForm from '../components/login/LoginForm';
import {withCookies} from 'react-cookie';
import fetchLogin from '../service/fetchLogin'

class LoginContainer extends Component {


    loginUser = (user) =>{
        this.requestLoginUser(user);
    }

    requestLoginUser = async (user) =>{
        await fetchLogin(user).then(userInfo => {
            if(userInfo === null) {
                //로그인에 실패하였을 때
                this.props.userStore.setLoginState(2);
            }
            else{
                this.props.userStore.setUser(userInfo)  //userStore 저장된 상태 하지만 새로 고침 할 시 사라짐
                this.props.userStore.setLoginState(1);
                console.log("Store 업데이트 ")
                console.log("DB에서 받은 데이터")   
                console.log(userInfo)   
                // const userId = userInfo.id;
                // const password = userInfo.password;
                // console.log(`id : ${userId} password : ${password}`)
                this.setCookie(userInfo);
            }
            })
       
    }

    setCookie = (userInfo) =>{
        const {cookies} = this.props;
        //유저 이름과 권한을 쿠키에 저장
        const userNameAndAuthor = {
            "name": userInfo.name,
            "author": userInfo.author
        }
        cookies.set('user' , userNameAndAuthor, {path:"/"})
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