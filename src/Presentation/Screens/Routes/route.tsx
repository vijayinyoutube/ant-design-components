import { Route, Routes } from "react-router-dom";
import ProfileScreen from "../Profile/profile";
import AdminScreen from "../AdminDashboard/adminScreen";
import { Content } from "antd/es/layout/layout";
import Settings from "../Settings/settings";
import Contact from "../Contact/contact";

const Router = (props: {
  colorBgContainer: string;
  borderRadiusLG: number;
}) => {
  return (
    <Routes>
      <Route
        path="/dashboard"
        element={
          <AdminScreen
            colorBgContainer={props.colorBgContainer}
            borderRadiusLG={props.borderRadiusLG}
          />
        }
      />
      <Route path="/contact" element={<Contact />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/profile" element={<ProfileScreen />} />
    </Routes>
  );
};

export default Router;
