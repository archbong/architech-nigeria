import { Outlet } from 'react-router-dom'
import { Navbar } from './navbar'
import { Footer } from './footer'
import { Analytics } from '../shared/analytics'

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Analytics />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}