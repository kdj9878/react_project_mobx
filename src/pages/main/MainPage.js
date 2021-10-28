import { observe } from 'mobx';
import { inject } from 'mobx-react';
import React, { Component } from 'react';
import { Layout, Header, Sider, Content, Footer } from 'antd';


@inject('userStore')
@observe
class MainPage extends Component {
    render() {
        return (
            <Layout>
            <Header>Header</Header>
            <Layout>
              <Sider>Sider</Sider>
              <Content>Content</Content>
            </Layout>
            <Footer>Footer</Footer>
          </Layout>
        );
    }
}

export default MainPage;