import { Menu, Drawer, Button, Flex, Typography, ConfigProvider } from "antd";
import Sider from "antd/es/layout/Sider";
import { Dispatch, SetStateAction } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const { Text } = Typography;

interface Props {
  collapsed?: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  broken?: boolean;
  items?: {
    key: string;
    icon: React.ReactElement;
    label: string;
    routes: string;
  }[];
  setBroken: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  showDrawer: () => void;
  closeDrawer: () => void;
  currentRoute: string;
  routes: string[];
  setCurrentRoute: Dispatch<SetStateAction<string>>;
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
    currentRoute,
    routes,
    setCurrentRoute,
  } = props;
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>
      {/* Slider Component : Web View */}
      <Sider
        className="hidden h-full sm:block"
        collapsed={collapsed}
        reverseArrow={true}
        breakpoint="md"
        width={250}
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
        <div className="ml-8 mt-5 hidden md:block">
          <Text className="text-white">vijaycreations</Text>
        </div>
        <Menu
          className="pt-6"
          theme="dark"
          mode="inline"
          onClick={(e) => {
            if (broken) {
              setCollapsed(true);
            }
            navigate(items ? items[parseInt(e.key) - 1].routes : "/");
            setCurrentRoute(items ? items[parseInt(e.key) - 1].routes : "/");
          }}
          defaultSelectedKeys={[String(routes.indexOf(location.pathname) + 1)]}
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
        <div className="">
          {items?.map((item) => {
            return (
              <div className="">
                <Button
                  icon={item.icon}
                  size="large"
                  className="my-1 ml-0 w-full  border-0 text-left text-sm text-white hover:bg-blue-600 hover:!text-white"
                  onClick={() => {
                    navigate(item.routes);
                    closeDrawer();
                  }}
                >
                  {item.label}
                </Button>
              </div>
            );
          })}
        </div>
      </Drawer>
    </div>
  );
};

export default ResponsiveSlider;
