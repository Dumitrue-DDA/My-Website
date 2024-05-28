import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from "./Pages/Home";
import Hobbies from './Pages/Hobbies';
import ErrorPage from './Pages/Error-Page';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/Hobbies",
    element: <Hobbies/>,
    errorElement: <ErrorPage/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
