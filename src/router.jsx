
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from "./Todo";
import App from "./App";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
        <Route index element={<Todo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
