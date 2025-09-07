import { Segmented, Card, Table } from "antd";
import { Button } from "antd";
import { useState } from "react";
const dataSource = [
  {
    key: "1",
    name: "胡彦斌",
    age: 32,
    address: "西湖区湖底公园1号",
  },
  {
    key: "2",
    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
];

const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "住址",
    dataIndex: "address",
    key: "address",
  },
];

const Dashboard = () => {
  const [alignItems, setAlignItems] = useState("center"); // You can change this to "start", "end", etc. based on your needs
  return (
    <div className=" ">
      <div className="flex flex-col ">
        <div>
          <Segmented
            value={alignItems}
            style={{ marginBottom: 8 }}
            options={["start", "center", "end"]}
            onChange={(value) => {
              setAlignItems(value);
            }}
          />
        </div>
        <div
          className="flex gap-8"
          style={{
            justifyContent:
              alignItems === "start"
                ? "flex-start"
                : alignItems === "end"
                ? "flex-end"
                : "center",
          }}
        >
          <Button size="middle" danger type="dashed">
            confirm
          </Button>
          <Button size="middle" type="dashed">
            confirm
          </Button>
          <Button size="middle" type="dashed">
            confirm
          </Button>
          <Button size="middle" type="dashed">
            confirm
          </Button>
        </div>
        <div className="  mx-2">
          <Table dataSource={dataSource} columns={columns} />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
