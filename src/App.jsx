import "./App.css";
import Tsidebar from "./Tsidebar";
import Theader from "./Theader";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="h-screen flex flex-col ">
      <Theader />

      <div className="flex  h-screen">
        <Tsidebar />

        <div className="text-center m-auto ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
