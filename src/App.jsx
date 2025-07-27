import "./App.css";
import Tsidebar from "./Sdebar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="h-screen flex ">
      <div className="w-64  flex-1/3 shadow-md">
        <Tsidebar />
      </div>

      <div className=" w-full">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
