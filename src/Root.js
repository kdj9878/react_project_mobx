import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'
import { ConfigProvider } from "antd";
import LoginPage from './pages/login/LoginPage';


@inject('userStore')
@observer
class Root extends Component {
    render() { 
        return (
        <ConfigProvider>
            <LoginPage {...this.props}/>
        </ConfigProvider>
        )
    }
}
 
export default Root;