import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import ProductDetail from "./pages/Detail";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "/product/:id",
    element: <ProductDetail />
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
