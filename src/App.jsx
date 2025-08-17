import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Sports from "./components/Sports";
import Technology from "./components/Technology";
import Health from "./components/Health";
import Business from "./components/Business";
import "./App.css";

// Layout component (shared across all routes)
function Layout() {
  return (
    <div>
      <header className="flex p-3 bg-blue-100">
        <h1 className="text-xl font-bold">Newsly</h1>
        <p className="text-center w-[100%]">All News Top Headlines</p>
      </header>
      <div className="flex justify-center">
        <Navbar />
      </div>
      <div className="flex flex-col items-center mt-3 font-medium text-xl">
        <h2>Stay Updated with Trendy News</h2>
      </div>
      {/* This is where each route will render */}
      <Outlet />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/business", element: <Business /> },
      { path: "/sports", element: <Sports /> },
      { path: "/technology", element: <Technology /> },
      { path: "/health", element: <Health /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
