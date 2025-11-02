import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from '@/components/router/router'
import ParticleOrbitEffect from '@/components/ui/particle-orbit-effect'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ParticleOrbitEffect />
    <RouterProvider router={router} />,
  </StrictMode>,
)
