import "./App.css";
import Tsidebar from "./Sdebar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="h-screen flex ">
      <Tsidebar />
      <div className="bg-gray-100 w-full">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
