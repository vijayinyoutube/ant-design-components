import { Route, Routes } from "react-router-dom";
import ProfileScreen from "../Profile/profile";
import AdminScreen from "../AdminDashboard/adminScreen";

const Router = (props: {
  colorBgContainer: string;
  borderRadiusLG: number;
}) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AdminScreen
            colorBgContainer={props.colorBgContainer}
            borderRadiusLG={props.borderRadiusLG}
          />
        }
      />
      <Route path="/profile" element={<ProfileScreen />} />
    </Routes>
  );
};

export default Router;
