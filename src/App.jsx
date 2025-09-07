import "./App.css";
import Tsidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="h-screen flex ">
      <div className="w-max-32 flex-1/3  shadow-md">
        <Tsidebar />
      </div>

      <div className=" w-full">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
