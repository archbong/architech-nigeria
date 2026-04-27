import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { router } from './app/router'
import './index.css'
import { Analytics } from './components/shared/analytics'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <HelmetProvider>
        <RouterProvider router={router} />
        <Analytics />
      </HelmetProvider>
  </React.StrictMode>,
)