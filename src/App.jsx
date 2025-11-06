import "./App.css";
import Tsidebar from "./Sidebar";
import {
  AppstoreOutlined,
  MailOutlined,
  CheckOutlined,
  SettingOutlined,
  RocketOutlined,
} from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import {  Menu } from "antd";

useNavigate;
const menuItems = [
  {
    key: "/",
    label: "Todo",
    icon: <CheckOutlined />,
    path: "/",
  },
  {
    type: "divider",
    key: "divider-1",
  },
  {
    key: "/about",
    label: "About",
    icon: <SettingOutlined />,
    path: "/about",
  },

  {
    key: "/dashboard",
    label: "Dashboard",
    icon: <RocketOutlined />,
    path: "/dashboard",
  },
  {
    key: "/gpt",
    label: "GPT Page",
    icon: <RocketOutlined />,
    path: "/gpt",
  },
];
function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick = ({ key }) => {
    navigate(key);
  };

  const selectedKeys = [location.pathname];
  return (
    <div className="h-screen flex-col  md:flex-row">
      <Menu
        onClick={handleMenuClick}
        selectedKeys={selectedKeys}
        items={menuItems}
        mode="horizontal"
        style={{ display: "flex", justifyContent: "center" }}
      />

      <div className="flex ">
        <div className="w-max-32 flex-1/3  shadow-md">
          <Tsidebar />
        </div>

        <div className=" w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
