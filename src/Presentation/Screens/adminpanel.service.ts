import { theme } from "antd";
import React, { useState } from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

const AdminPanelService = () => {
  const [broken, setBroken] = useState(false);

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
  };
};

export default AdminPanelService;
