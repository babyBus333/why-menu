import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import routConfig from '@/config/router'

const router = createBrowserRouter(routConfig, { basename: '/why-menu' })

export default function Routes() {
  return <RouterProvider router={router} fallbackElement={null} />
}
