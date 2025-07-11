import { Segmented } from "antd";
import { Button } from "antd";
import { useState } from "react";
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
          className="flex gap-2"
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
      </div>
    </div>
  );
};
export default Dashboard;
