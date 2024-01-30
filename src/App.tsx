import { Button, Layout, Menu, theme } from "antd";
import { Header, Content, Footer } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import React, { useState } from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";

const App = () => {
  const { Header, Content, Footer, Sider } = Layout;

  const items = [
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    UserOutlined,
  ].map((icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
  }));

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [collapsed, setCollapsed] = useState(false);

  return (
    <div>
      <Layout className="h-screen">
        <Sider
          collapsed={collapsed}
          collapsible
          trigger={null}
          reverseArrow={true}
          width={250}
          breakpoint="md"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log("broken", broken);
            if (broken) {
              setCollapsed(true);
            } else {
              setCollapsed(false);
            }
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["4"]}
            items={items}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            {collapsed && (
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: "16px",
                  width: 64,
                  height: 64,
                }}
              />
            )}
          </Header>
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              className="h-full"
              style={{
                padding: 24,
                minHeight: 360,

                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              content
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }} className="bottom-0">
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default App;
