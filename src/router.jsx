import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from "./Todo";
import App from "./App";
import Something from "./Something";
import Login from "./Login";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<App />}>
          <Route index element={<Todo />} />
          <Route path="something" element={<Something />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
