import { Segmented, Spin, Alert, Table } from "antd";
import { Button } from "antd";
import { useState } from "react";
import type { ColumnsType } from "antd/es/table";
import {
  useUserInfo,
} from "./hooks/useApi";
// import { useForm, Controller } from "react-hook-form";

import type { UserInfo } from "./lib/api";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
}

// const dataSource: DataType[] = [
//   {
//     key: "1",
//     name: "胡彦斌",
//     age: 32,
//     address: "西湖区湖底公园1号",
//   },
//   {
//     key: "2",
//     name: "胡彦祖",
//     age: 42,
//     address: "西湖区湖底公园1号",
//   },
// ];

const columns: ColumnsType<UserInfo> = [
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

const Dashboard: React.FC = () => {
  const [alignItems, setAlignItems] = useState<"start" | "center" | "end">("center");
  const { data: userinfos, isLoading, error } = useUserInfo();

  return (
    <div className="mt-10 flex flex-col h-screen">
      <div>
        <Segmented
          value={alignItems}
          style={{ marginBottom: 8 }}
          options={["start", "center", "end"]}
          onChange={(value: "start" | "center" | "end") => {
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
        {isLoading && <Spin />}
        {error && <Alert message="加载失败" description={error.message} type="error" showIcon />}
        <Table dataSource={userinfos} columns={columns} />
      </div>

    </div>
  );
};
export default Dashboard;
