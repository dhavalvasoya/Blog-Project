
import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';

import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    LogoutOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import Navbar from './navbar';
import { Link, NavLink, Redirect } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class SideMenuBar extends React.Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        const { collapsed } = this.state;
        return (<>
            <Navbar />
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={[]} mode="inline">
                        <Menu.Item key="1" icon={<PieChartOutlined />}>
                            <NavLink exact to="./dashboard" />
                            Dashboard 
            </Menu.Item>
                        <Menu.Item key="2" icon={<DesktopOutlined />}>
                            <NavLink exact to="./updateprofile" />Update Profile
                        </Menu.Item>

                        <Menu.Item key="3" icon={<FileOutlined />}>
                            <NavLink exact to="./tableformat" />Table Formant
                            
            </Menu.Item>
                        <Menu.Item key="4" icon={<LogoutOutlined />}>
                            <Link>
                                <a
                                    className="BTN"
                                    onClick={() => localStorage.clear()}> Log_Out
                        </a>
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Content style={{ margin: '0 16px' }}>

                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>...🙃 Design ©2021 Created by VD</Footer>
                </Layout>
            </Layout>
        </>
        );
    }
}


export default SideMenuBar