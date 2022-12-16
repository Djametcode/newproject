import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import "./index.css"
import StatusJsx from './routes/status'
import Calls from './routes/calls'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/status",
    element: <StatusJsx />
  },
  {
    path: "/calls",
    element: <Calls />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
