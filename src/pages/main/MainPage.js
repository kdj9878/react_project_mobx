import React, { Component } from 'react';

import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Route, Switch } from 'react-router';
import HRManage from '../../containers/Content/HumanResourceMange/HRManage';
import { Link } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;



class MainPage extends Component {



  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              데이터 종합
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              모니터 현황
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="인사 업무">
                {/* 먼저 백엔드 서버를 구축해둘까 */}
                  <Menu.Item key="3" >
                    <Link to="/HRManage" >사원 관리</Link>
                  </Menu.Item>
                <Menu.Item key="4">자재 관리</Menu.Item>
                <Menu.Item key="5">기타</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="부서 관리">
              <Menu.Item key="6">영업팀</Menu.Item>
              <Menu.Item key="8">개발팀</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              회사 Cloud
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <Switch>
              <Route  path="/HRMange" component={HRManage}/>
            
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default MainPage;