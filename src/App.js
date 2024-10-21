import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "/shop",
    element: <>Shop</>
  },
  {
    path: "/about",
    element: <>About</>
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
