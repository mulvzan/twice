import { useState } from "react";
import {  MailOutlined, SettingOutlined } from '@ant-design/icons';

import { Menu } from "antd";
const items = [
  // {
  //   label: "One",
  //   key: "mail",
  //   icon: <MailOutlined />,
  // },
  
 
  
];
export default function Theader() {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
}
