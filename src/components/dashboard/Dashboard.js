import React, {useEffect, useState} from 'react';
import {me} from "../../server/config/auth/auth";
import { Layout, Menu, Breadcrumb } from 'antd';
import {deleteCookie} from "../../utils";

import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { checkSock } from '../../server/config/apis/users';
import Stomp from "stompjs";
import SockJS from  "sockjs-client";
import { getCookie } from "../../utils/index";
import { accessToken } from "../../constants";

const token = getCookie(accessToken);
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Dashboard = (props) => {

  let headers = {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json; charset=utf-8',
    'Authorization': token ?`Bearer ${token}`:''
  };

  useEffect(()=>{
    console.log("useEffect")
    getMe();
  },[])

  useEffect(()=>{
    connect();
  }, [])

  const [collapsed, setCollapsed] = useState(false);
  

  async function connect(){
    var socket = new SockJS("http://localhost:8085/Chat")
    var client = Stomp.over(socket);
    client.connect(
      headers, function(frame){
      console.log("connected: ", frame)
    })
  }

  const getMe = () => {
    console.log("get function")
      me().then(res=>console.log("response ", res)).catch(err=> {
        console.log("Errror")
        deleteCookie()
            window.location.reload();
  })}

  const check = ()=>{
    checkSock().then(res=>console.log("check " ,res)).catch((err)=>{
      console.log("failed check ", err)
    })
  }

    return(
      console.log("this is return"),
        <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={collapsed}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
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
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
};


//     return (
//         <React.Fragment>
//             <Router>
//                 <Layout className="layout">
//                     <Header className="site-header">
//                         <TopHeader />
//                         <div className="container">
//                             <HorizontalMenus />
//                         </div>
//                     </Header>
//                     <Content className="container" style={{ padding: '20px 0' }}>
//                         {/*<LazyLoadErrorBoundary>*/}
//                             <Switch>
//                                 {
//                                     routes.map((route) => (
//                                         <Route exact key={route.path} path={route.path}
//                                                render={() => renderComponentWithSuspense(route.component)} />

//                                     ))
//                                 }
//                                 {/*<Route exact path='/dashboard' render={() => renderComponentWithSuspense(<Dashboard />)} />*/}
//                                 {/*<Route render={() => renderComponentWithSuspense(<NotFound />)} />*/}
//                             </Switch>
//                         {/*</LazyLoadErrorBoundary>*/}
//                     </Content>
//                 </Layout>
//             </Router>
//         </React.Fragment>
//     );


// function renderComponentWithSuspense(component) {
//     return (
//         <Suspense fallback={
//             <Row className="container" justify="center">
//                 <Col>
//                     <Spin />
//                 </Col>
//             </Row>
//         }>
//             {component}
//         </Suspense>
//     )
// }

export default Dashboard;