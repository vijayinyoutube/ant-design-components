import { Layout, Button } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

import ResponsiveSlider from "../../Components/ResponsiveSlider";
import AdminPanelService from "./adminpanel.service";
import Router from "../Routes/route";

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
    currentRoute,
    setCurrentRoute,
    routes,
  } = AdminPanelService();

  return (
    <div>
      <Layout className="h-screen" hasSider={true}>
        {/* Responsive Slider : Slider for web | Drawer for mobile */}
        <ResponsiveSlider
          open={open}
          items={items}
          broken={broken}
          collapsed={collapsed}
          currentRoute={currentRoute}
          routes={routes}
          setOpen={setOpen}
          setBroken={setBroken}
          showDrawer={showDrawer}
          closeDrawer={closeDrawer}
          setCollapsed={setCollapsed}
          setCurrentRoute={setCurrentRoute}
        />

        <Layout >
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
            <Router
              colorBgContainer={colorBgContainer}
              borderRadiusLG={borderRadiusLG}
            />
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
