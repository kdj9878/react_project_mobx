import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'
import { ConfigProvider } from "antd";
import LoginPage from './pages/login/LoginPage';
import { withCookies } from 'react-cookie';
import MainPage from './pages/main/MainPage';
import { getCookie } from './utils/cookie';
import Axios from 'axios';

@inject('userStore')
@observer
class Root extends Component {

    constructor(props){
        super(props);
        const userCookie = getCookie("user");
        if(userCookie !== undefined){
            this.state = {
                userState : 1
            }
        }
        else{
            this.state = {
                userState : 0
            }
        }
    }
    

    render() { 
        //observer를 사용하고 있기 때문에 값이 변경될 경우 알아서 바꿔준다.
         const {loginState} = this.props.userStore;
        return (
        <ConfigProvider>
             { 
                loginState === 1 || this.state.userState === 1
                ? <MainPage {...this.props} />
                : <LoginPage {...this.props} />
            }
            
        </ConfigProvider>
        )
    }
}
 
export default withCookies(Root);