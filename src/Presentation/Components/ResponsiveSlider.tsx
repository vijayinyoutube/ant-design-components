import { Menu, Drawer } from "antd";
import Sider from "antd/es/layout/Sider";
import { Dispatch, SetStateAction, useState } from "react";

interface Props {
  collapsed?: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  broken?: boolean;
  items?: {
    key: string;
    icon: React.ReactElement;
    label: string;
  }[];
  setBroken: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  showDrawer: () => void;
  closeDrawer: () => void;
}

const ResponsiveSlider = (props: Props) => {
  const {
    collapsed,
    setCollapsed,
    broken,
    items,
    setBroken,
    open,
    setOpen,
    showDrawer,
    closeDrawer,
  } = props;

  return (
    <div>
      <Sider
        className="hidden h-full sm:block"
        collapsed={collapsed}
        reverseArrow={true}
        breakpoint="md"
        collapsedWidth="50"
        onBreakpoint={(brokenVal) => {
          setBroken(brokenVal);
          setCollapsed(brokenVal);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
          setCollapsed(collapsed);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          onClick={(e) => {
            console.log(e);
            if (broken) {
              setCollapsed(true);
            }
          }}
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Drawer
        width={225}
        className="!bg-[#001529] !text-white"
        title="Basic Drawer"
        placement={"left"}
        closable={false}
        onClose={closeDrawer}
        open={open}
      >
        <div>
          {items?.map((item) => {
            return <div className="p-3 text-white">{item.label}</div>;
          })}
        </div>
      </Drawer>
    </div>
  );
};

export default ResponsiveSlider;
