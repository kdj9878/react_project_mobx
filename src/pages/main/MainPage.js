import React, { Component } from 'react';

import { Layout, Menu } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';


/* 인사업무 컴포넌트 모음 */
import HRManage from '../../containers/Content/HumanResourceMange/HRManage'
import HTManage from '../../containers/Content/materialsManagement/MTManage';
import EtcCompnent from '../../containers/Content/etc/EtcCompnent';

/* 부서 관리 컴포넌트 모음 */
import SalseTeamManage from '../../containers/Content/salseTeamManage/SalseTeamManage';
import DTManage from '../../containers/Content/developmentTeamManage/DTManage';
import ComCloud from '../../containers/Content/CompanyCloud/ComCloud'

/* 기타컴포넌트 모음 */
import DTSynthesis from '../../containers/Content/DataSynthesis/DTSynthesis';
import DTMonitor from '../../containers/Content/DataMonitor/DTMonitor';
import { inject, observer } from 'mobx-react';


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


@inject('userStore')
@observer
class MainPage extends Component {



  state = {
    collapsed: false,
  };


  onCollapse = collapsed => {
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
              <Link to="/DTSynthesis">데이터 종합</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              <Link to="/DTMonitor">모니터 현황</Link>
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="인사 업무">
                {/* 먼저 백엔드 서버를 구축해둘까 */}
                  <Menu.Item key="3" >
                    <Link to="/HRManage">사원 관리</Link>
                  </Menu.Item>
                  <Menu.Item key="4">
                    <Link to="/HTManage">자재 관리</Link>
                  </Menu.Item>
                  <Menu.Item key="5">
                    <Link to="/Etc">기타</Link>
                  </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="부서 관리">
                  <Menu.Item key="6">
                    <Link to="/STManage">영업팀</Link>
                  </Menu.Item>
                  <Menu.Item key="7">
                    <Link to="/DTManage">개발팀</Link>
                  </Menu.Item>
            </SubMenu>
            <Menu.Item key="8" icon={<FileOutlined />}>
              <Link to="/ComCloud">회사 Cloud</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Switch>
              <Route exact path="/ComCloud" component={ComCloud}/>
              <Route exact path="/DTMonitor" component={DTMonitor} />
              <Route exact path="/DTSynthesis" component={DTSynthesis}/>
              <Route exact path="/HRManage" component={HRManage} />
              <Route exact path="/HTManage" component={HTManage} />
              <Route exact path="/Etc" component={EtcCompnent} />
              <Route exact path="/STManage" component={SalseTeamManage}/>
              <Route exact path="/DTManage" component={DTManage}/>
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default MainPage;