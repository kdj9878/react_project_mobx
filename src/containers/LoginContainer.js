import React, {Component} from 'react'
import LoginForm from '../components/login/LoginForm';
import {withCookies} from 'react-cookie';
import fetchLogin from '../service/fetchLogin';
import {setCookie} from '../utils/cookie'


class LoginContainer extends Component {


    // loginUser = (user) =>{
    //     this.requestLoginUser(user);
    // }

    // requestLoginUser = async (user) =>{
    //     await fetchLogin(user).then(userInfo => {
    //         if(userInfo === null) {
    //             //로그인에 실패하였을 때
    //             this.props.userStore.setLoginState(2);
    //         }
    //         else{
    //             console.log("Store 업데이트 함")
    //             this.props.userStore.setUser(userInfo)  //userStore 저장된 상태 하지만 새로 고침 할 시 사라짐
    //             this.props.userStore.setLoginState(1);
    //             // const userId = userInfo.id;
    //             // const password = userInfo.password;
    //             // console.log(`id : ${userId} password : ${password}`)
    //             console.log("쿠키 설정해서 props한번 더 바뀜")
    //             this.setCostomCookie(userInfo);
    //         }
    //         })
       
    // }

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