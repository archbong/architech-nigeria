import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function Analytics() {
  const location = useLocation()

  useEffect(() => {
    // @ts-ignore - Google Analytics global
    if (window.gtag) {
      // @ts-ignore
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
        page_title: document.title,
      })
    }
  }, [location])

  return null
}