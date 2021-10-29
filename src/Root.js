import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'
import { ConfigProvider } from "antd";
import LoginPage from './pages/login/LoginPage';
import { withCookies } from 'react-cookie';

//  import MainPage from './pages/main/MainPage'

@inject('userStore')
@observer
class Root extends Component {

    state = {
        loginState : this.props.userStore.loginState
    }

    componentDidMount(){
        console.log("컴포넌트가 마운트 되었을 때" )
        console.log(this.props.userStore)
    }

    //첫 번째 인자로 바뀔 props의 정보를 가지고 있다.
    //두 버째 인자는 현재 컴포넌트의 이전 state를 가지고 있다.
    componentDidUpdate(prevProps, prevState){
        console.log("업데이트 될 props")
        console.log(prevProps)
        console.log("이건 뭐지")
        console.log(prevState)

    }
    

    
    
    
    render() { 
        return (
        <ConfigProvider>
            {/* { 
                this.state.isLogin === true
                ? <MainPage {...this.props} />
                : 
            }  */}

            <LoginPage {...this.props}/>
            </ConfigProvider>
        )
    }
}
 
export default withCookies(Root);