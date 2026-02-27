import { useState, useEffect } from 'react'

export function useTyping(text, speed = 14, delay = 0) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    setDisplayed('')
    setDone(false)
    if (!text) return

    const timeout = setTimeout(() => {
      let i = 0
      const iv = setInterval(() => {
        i++
        setDisplayed(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(iv)
          setDone(true)
        }
      }, speed)
      return () => clearInterval(iv)
    }, delay)

    return () => clearTimeout(timeout)
  }, [text, speed, delay])

  return { displayed, done }
}
