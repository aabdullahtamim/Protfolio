import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from '@/components/router/router'
// import ParticleOrbitEffect from '@/components/ui/particle-orbit-effect'
import CustomCursor from '@/components/ui/CustomCursor'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CustomCursor />
    <RouterProvider router={router} />,
  </StrictMode>,
)
