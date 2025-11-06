import "./App.css";
import Tsidebar from "./Sidebar";
import {
  AppstoreOutlined,
  MailOutlined,
  CheckOutlined,
  SettingOutlined,
  RocketOutlined,
  SearchOutlined,
  UserOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { Dropdown, Space } from "antd";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Avatar, Menu } from "antd";
const dropdownItems = [
  {
    key: "1",
    icon: <SettingOutlined />,

    label: "settings",
  },
  {
    key: "2",
    label: "profile",
    icon: <SmileOutlined />,
    disabled: false,
  },

  {
    key: "3",
    danger: true,
    label: <Link to="/login">Logout</Link>,
  },
];
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
    label: "GPT",
    icon: <SearchOutlined />,
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
    <div className="h-screen flex flex-col">
      <div className="flex gap-10 items-center justify-between shadow-md">
        <a href="/">
          <div className="ml-4">
            <RocketOutlined /> Dislike
          </div>
        </a>
        <h1 className="ml-4  "></h1>
        <div className="flex-1 flex">
          <div className="flex-1">
            <Menu
              onClick={handleMenuClick}
              selectedKeys={selectedKeys}
              items={menuItems}
              mode="horizontal"
            />
          </div>
        </div>
        <Dropdown
          className="mr-4"
          menu={{ items: dropdownItems }}
          placement="bottomRight"
        >
          <a onClick={(e) => e.preventDefault()}>
            <Avatar
              style={{ backgroundColor: "#87d068" }}
              icon={<UserOutlined />}
            />
          </a>
        </Dropdown>
      </div>
      <div className="flex mt-1">
        <div className="w-max-15 flex-1/3  shadow-md">
          <Tsidebar />
        </div>

        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
