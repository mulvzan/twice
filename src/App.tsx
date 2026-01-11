import "./App.css";
import Tsidebar from "./Sidebar";
import {
  CheckOutlined,
  SettingOutlined,
  RocketOutlined,
  SearchOutlined,
  UserOutlined,
  SmileOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Dropdown } from "antd";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Avatar, Menu } from "antd";
import type { MenuProps } from "antd";

const dropdownItems: MenuProps['items'] = [
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
const menuItems: MenuProps['items'] = [
  {
    key: "/",
    label: "Todo",
    icon: <CheckOutlined />,
  },
  {
    type: "divider",
    key: "divider-1",
  },
  {
    key: "/about",
    label: "About",
    icon: <SettingOutlined />,
  },
  {
    key: "/contact",
    label: "Contact",
    icon: <MailOutlined />,
  },
  {
    key: "/dashboard",
    label: "Dashboard",
    icon: <RocketOutlined />,
  },
  {
    key: "/gpt",
    label: "GPT",
    icon: <SearchOutlined />,
  },
];

const App: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick = ({ key }: { key: string }) => {
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
        <h1 className="ml-4"></h1>
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
        <div className="w-70  shadow-md">
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
