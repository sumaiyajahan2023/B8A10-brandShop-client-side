import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import MyCart from './components/MyCart.jsx';
import AddProduct from './components/AddProduct.jsx';
import LogIn from './components/LogIn.jsx';
import SignUp from './components/SignUp.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/cart",
        element: <MyCart />
      },
      {
        path: "/add-product",
        element: <AddProduct />
      },
      {
        path: "/login",
        element: <LogIn />
      },
      {
        path: "/signup",
        element: <SignUp />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
