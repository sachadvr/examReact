import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import ProductDetail from "./pages/Detail";
import Panier from "./components/Panier";
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
    path: "/cart",
    element: <Panier displayMode="full" />
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
