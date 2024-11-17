import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/MainRoutes.jsx'
import AuthContext from './Context/Context.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContext>
      <RouterProvider router={router}></RouterProvider>
    </AuthContext>
  </StrictMode>,
)
