import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Spin } from "antd";

const Todo = lazy(() => import("./Todo"));
const App = lazy(() => import("./App"));
const Login = lazy(() => import("./Login"));
const About = lazy(() => import("./About"));
const Contact = lazy(() => import("./Contact"));

function Router() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen">
            <Spin size="large" />
          </div>
        }
      >
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<App />}>
            <Route index element={<Todo />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
export default Router;
