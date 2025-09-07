import { useNavigate, useLocation } from "react-router-dom";
import {
  CheckOutlined,
  SettingOutlined,
  RocketOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

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
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick = ({ key }) => {
    navigate(key);
  };

  const selectedKeys = [location.pathname];

  const items = menuItems.map((item) => {
    if (item.type === "divider") {
      return {
        type: "divider",
        key: item.key,
      };
    }

    return {
      key: item.key,
      icon: item.icon,
      label: item.label,
    };
  });

  return (
    <Menu
      selectedKeys={selectedKeys}
      mode="inline"
      items={items}
      onClick={handleMenuClick}
    />
  );
};
export default Sidebar;
