import { theme } from "antd";
import React, { useState } from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

const AdminPanelService = () => {
  const [broken, setBroken] = useState(false);

  const [currentRoute, setCurrentRoute] = useState("/dashboard");

  const menuNames = ["Dashboard", "Contact", "Settings", "Profile"];
  const routes = ["/dashboard", "/contact", "/settings", "/profile"];

  const items = [
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    UserOutlined,
  ].map((icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: menuNames[index],
    routes: routes[index],
  }));

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [collapsed, setCollapsed] = useState(false);

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  return {
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
  };
};

export default AdminPanelService;
