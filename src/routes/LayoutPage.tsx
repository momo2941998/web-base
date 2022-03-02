import logo from '../image/logoMobifone.png'
import { Breadcrumb, Layout, Menu } from "antd";
import { Link, Outlet, useLocation } from "react-router-dom";
import { AuthStatus } from '../components/auth';
import { useAppSelector } from '../app/hooks';
import { selectAuth } from '../features/authSlice';
import React, { useEffect, useState } from 'react';
import { UserOutlined, LaptopOutlined, NotificationOutlined, PieChartOutlined, DesktopOutlined, TeamOutlined, FileOutlined, LineChartOutlined } from '@ant-design/icons';
import { routeList } from './RouteList';
const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu
export function LayoutPage() {
  let auth = useAppSelector(selectAuth)
  const [collapsed, setCollapsed] = useState(false)
  const [selectedKeys, setSelectedKeys] = useState<string[]>([])

  const handleCollase = () => {
    setCollapsed(old => {
      return !old
    })
  }
  const handleSelect = (info: any) => {
    setSelectedKeys([info.key])
  }
  return (
    <Layout style={{ minHeight: '100vh' }}>
    <Sider collapsible collapsed={collapsed} onCollapse={handleCollase}>
      <div className="logo">
        <img src = {logo} />
      </div>
      <Menu theme="dark" mode="inline" selectedKeys={selectedKeys} onSelect={handleSelect}>
        <Menu.Item key="1" icon={<UserOutlined />} title="User">
          <Link to={routeList.USER_INFO}>
            Thông tin tài khoản
          </Link>
        </Menu.Item>
        <SubMenu key="sub1" icon={<LineChartOutlined />} title="Báo cáo">
            {/* <Menu.Item key="2" className='sub-menu-item'>
              <Link to={routeList.DETAILED_FEE_REPORT}>
                Báo cáo chi tiết cước
              </Link>
            </Menu.Item> */}
            <Menu.Item key="3" className='sub-menu-item'>
              <Link to={routeList.DETAILED_FEE_LOG_CDR}>
                Log cước chi tiết CDR
              </Link>
            </Menu.Item>
            <Menu.Item key="4" className='sub-menu-item'>
              <Link to={routeList.DETAILED_CALL_QUANTITY_LOG} >
                Báo cáo cước
              </Link>
            </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
    <Layout className="site-layout">
      <Header className="site-layout-header" style={{ padding: 0 }} >
        <AuthStatus />
      </Header>
      <Content style={{ margin: '0 16px' }}>
        <Outlet />
      </Content>
      {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
    </Layout>
  </Layout>
  );
}