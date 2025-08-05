import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './routes/Hompage/HomePage.jsx'
import Dashboard from './routes/Dashboard/Dashboard.jsx'
import LoginPage from './routes/LoginPage/LoginPage.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
const router = createBrowserRouter([
  {
    path:'/',
    element:(
     <HomePage/>
    ),

  },
  {
    path:"/dashboard",
    element:(
      <Dashboard/>
    ),
  },
  {
    path:"/login",
    element:(
      <LoginPage/>
  ),
  },
  
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router ={router}/>
  </StrictMode>,
)
