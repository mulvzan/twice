import { useNavigate, useLocation } from "react-router-dom";
import {
  CheckOutlined,
  SettingOutlined,
  MailOutlined,
  RocketOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

// 路由配置 - 更清晰的数据结构
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

const Tsidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // 统一的点击处理函数
  const handleMenuClick = ({ key }) => {
    navigate(key);
  };

  // 根据当前路径获取选中的菜单项
  const selectedKeys = [location.pathname];

  // 转换为 Ant Design v5+ 的 items 格式
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
export default Tsidebar;
