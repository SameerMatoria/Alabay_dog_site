import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home.jsx'
import Game from './Game.jsx'
import Bg from './Bg.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App />
  },

  {
    path:'/game',
    element:<Game />
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
