import { useNavigate, useLocation } from "react-router-dom";
import {
  CheckOutlined,
  SettingOutlined,
  RocketOutlined,
  SearchOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import type { MenuProps } from "antd";

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

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick = ({ key }: { key: string }) => {
    navigate(key);
  };

  const selectedKeys = [location.pathname];

  return (
    <Menu
      selectedKeys={selectedKeys}
      mode="inline"
      items={menuItems}
      onClick={handleMenuClick}
    />
  );
};
export default Sidebar;
