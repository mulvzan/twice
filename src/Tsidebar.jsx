import { useNavigate } from "react-router-dom";
import { CheckOutlined } from "@ant-design/icons";
import { Menu } from "antd";
const items = [
  { key: "1", label: "Todo", icon: <CheckOutlined/> },
  {
    type: "divider",
  },
];
const Tsidebar = () => {
  const navigate = useNavigate();
  const onClick = (e) => {
    if (e.key === "1") {
      navigate("/");
    }
    console.log("click ", e);
  };
  return (
    <Menu
      onClick={onClick}
      style={{ width: 223 }}
      defaultSelectedKeys={["1"]}
      
      mode="inline"
      items={items}
    />
  );
};
export default Tsidebar;
