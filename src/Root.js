import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'
import { ConfigProvider } from "antd";
import LoginPage from './pages/login/LoginPage';
import { withCookies } from 'react-cookie';
import MainPage from './pages/main/MainPage';
import compareToken from './service/compareToken'
import { getCookie } from './utils/cookie';
import Axios from 'axios';

@inject('userStore')
@observer
class Root extends Component {



    


    componentDidMount(){

        Axios.get("/api/user/login").then( res =>{
            console.log(res)
        })




        // const cookies = getCookie("user");
        // if(cookies){ //user라는 이름의 cookie가 존재할 때
        //     console.log("토큰 존재함")
        //     /*
        //     반환 값 : 유저 정보
        //     */
        //     const newUserInfo = compareToken(cookies.token);
        //     this.props.userStore.setUser(newUserInfo);
        //     this.props.userStore.setLoginState(1);
            
        // }
        // else{
        //     this.props.history.push("/")
        // }
    }


    render() { 
        //observer를 사용하고 있기 때문에 값이 변경될 경우 알아서 바꿔준다.
        const {loginState} = this.props.userStore;
        return (
        <ConfigProvider>
             { 
                loginState === 1
                ? <MainPage {...this.props} />
                : <LoginPage {...this.props} />
            }
            
        </ConfigProvider>
        )
    }
}
 
export default withCookies(Root);