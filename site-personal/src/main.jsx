import React from 'react'
import ReactDOM from 'react-dom/client'
import Homepage from "./Pages/Home-Page";
import ErrorPage from './Pages/Error-Page';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>,
    errorElement:<ErrorPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
