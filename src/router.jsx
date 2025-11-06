import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from "./Todo";
import App from "./App";
import Dashboard from "./Dashboard";
import Login from "./Login";
import About from "./About";
import GPTPage from "./GPTPage";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<App />}>
          <Route index element={<Todo />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
          <Route path="/gpt" element={<GPTPage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
