
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;
const SideNav = ({children}) => {
    return (

  <Layout>
    <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
      <Menu.Item key="1">
                <Link to="/">
                    Home
                </Link>
                </Menu.Item>

                <Menu.Item key="2">
                <Link to="intro">
                Introduction
                </Link>

                </Menu.Item>

                <Menu.Item key="3">
                <Link to="get-started">
                Get Started
                </Link>
                </Menu.Item>

                {/* <Menu.Item key="4">
                <Link to="/documentation">
                    Documentation
                </Link>
                </Menu.Item> */}

                <Menu.Item key="5">
                <Link to="authentication">
                Authentication
                </Link>
                </Menu.Item>

                <Menu.Item key="6">
                <Link to="endpoints">
                Endpoints
                </Link>
                </Menu.Item>


                <Menu.Item key="7">
                <Link to="errors">
                Errors
                </Link>
                </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      {/* <Header className="site-layout-sub-header-background" style={{ padding: 0 }} /> */}
      <Content style={{ margin: '24px 16px 0' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          {children}
        </div>
      </Content>
      {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
    </Layout>
  </Layout>
)
}
export default SideNav;

