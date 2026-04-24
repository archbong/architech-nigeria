import { useState, useEffect } from 'react'

interface ScrollState {
  scrollY: number
  isScrolled: boolean
  scrollDirection: 'up' | 'down'
  isAtTop: boolean
  isAtBottom: boolean
}

export function useScroll(threshold = 20): ScrollState {
  const [scrollState, setScrollState] = useState<ScrollState>({
    scrollY: 0,
    isScrolled: false,
    scrollDirection: 'up',
    isAtTop: true,
    isAtBottom: false,
  })

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const direction = currentScrollY > lastScrollY ? 'down' : 'up'
      
      setScrollState({
        scrollY: currentScrollY,
        isScrolled: currentScrollY > threshold,
        scrollDirection: direction,
        isAtTop: currentScrollY <= 0,
        isAtBottom: currentScrollY + window.innerHeight >= document.documentElement.scrollHeight - 50,
      })
      
      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return scrollState
}