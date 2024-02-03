import { Menu, Drawer, Button, Flex } from "antd";
import Sider from "antd/es/layout/Sider";
import { Dispatch, SetStateAction } from "react";

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
    closeDrawer,
  } = props;

  return (
    <div>
      {/* Slider Component : Web View */}
      <Sider
        className="hidden h-full sm:block"
        collapsed={collapsed}
        reverseArrow={true}
        breakpoint="md"
        collapsedWidth="55"
        onBreakpoint={(brokenVal) => {
          console.log("Broken:", brokenVal);
          if (!brokenVal) {
            closeDrawer();
          }
          setBroken(brokenVal);
          setCollapsed(brokenVal);
        }}
        onCollapse={(collapsed, type) => {
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

      {/* Drawer Component : Mobile View */}
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
            return (
              <Flex vertical>
                <Flex>
                  {item.icon}
                  <Button
                    size="large"
                    className="my-1 border-0 text-left text-sm text-white hover:bg-blue-600 hover:!text-white"
                    onClick={closeDrawer}
                  >
                    {item.label}
                  </Button>
                </Flex>
              </Flex>
            );
          })}
        </div>
      </Drawer>
    </div>
  );
};

export default ResponsiveSlider;
