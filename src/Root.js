import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'
import { ConfigProvider } from "antd";
import LoginPage from './pages/login/LoginPage';
import { withCookies } from 'react-cookie';
import MainPage from './pages/main/MainPage';

@inject('userStore')
@observer
class Root extends Component {

    componentDidMount(){
        console.log("컴포넌트가 마운트 되었을 때" )
        console.log(this.props.userStore)
        
    }

    componentDidUpdate(){
        console.log("componentDidUpdate 실행됨")
        console.log(this.props.userStore)
    }

    render() { 
        //이거 확실하게 이해하기
        const {loginState} = this.props.userStore
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