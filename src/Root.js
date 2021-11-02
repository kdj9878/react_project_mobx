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
        

        const data = {
            userInfo :{
                id:"kdj9878",
                password : "1234"
            }
        }

        Axios({
            method : 'POST',
            url : '/api/user/login',
            data : JSON.stringify(data),
            headers:{
                'content-type': 'application/json',
            }
        }).then(res =>{
            console.log(res)
        })

        // GET 방식은 정상적으로 작동함
        // const data2 = "value"
        // Axios.get("/api/user/get?id=" + data2).then(res =>{
        //     console.log(res)
        // })
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