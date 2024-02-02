import { Layout, Button } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

import ResponsiveSlider from "../Components/ResponsiveSlider";
import AdminPanelService from "./adminpanel.service";

const AdminPanel = () => {
  const { Header, Content, Footer } = Layout;

  const {
    collapsed,
    setCollapsed,
    items,
    broken,
    setBroken,
    colorBgContainer,
    borderRadiusLG,
    open,
    setOpen,
    showDrawer,
    closeDrawer,
  } = AdminPanelService();

  return (
    <div>
      <Layout className="h-screen">
        {/* Responsive Slider : Slider for web | Drawer for mobile */}
        <ResponsiveSlider
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          broken={broken}
          setBroken={setBroken}
          items={items}
          open={open}
          setOpen={setOpen}
          showDrawer={showDrawer}
          closeDrawer={closeDrawer}
        />

        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <div className="hidden sm:block">
              {collapsed && (
                <Button
                  type="text"
                  icon={
                    collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                  }
                  onClick={() => setCollapsed(!collapsed)}
                  style={{
                    fontSize: "16px",
                    width: 64,
                    height: 64,
                  }}
                />
              )}
            </div>
            <div className="block sm:hidden">
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => showDrawer()}
                style={{
                  fontSize: "16px",
                  width: 64,
                  height: 64,
                }}
              />
            </div>
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

export default AdminPanel;
