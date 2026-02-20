import { memo } from "react";
import "./App.css";
import Tsidebar from "./Sidebar";

import { Outlet } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex mt-1">
        <div className="w-70  shadow-md">
          <Tsidebar />
        </div>

        <div className="w-full px-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default memo(App);
