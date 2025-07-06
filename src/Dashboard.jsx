import { Segmented } from "antd";
import { Button } from "antd";
import { useState } from "react";
const Dashboard = () => {
  const [alignItems, setAlignItems] = useState("center"); // You can change this to "start", "end", etc. based on your needs
  return (
    <div className=" h-full   mx-auto">
      <div className="flex flex-col  pt-5 h-full">
        <Segmented
          value={alignItems}
          style={{ marginBottom: 8 }}
          options={["start", "center", "end"]}
          onChange={(value) => {
            setAlignItems(value);
          }}
        />

        <div className="flex gap-2" style={{ alignItems: alignItems }}> 
          <Button size="middle" type="dashed">
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
