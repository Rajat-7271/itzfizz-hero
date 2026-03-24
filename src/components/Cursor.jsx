import { useEffect, useRef } from 'react'

// simple custom cursor - dot + lagging ring
export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)

  useEffect(() => {
    const move = (e) => {
      dot.current.style.transform  = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`
      ring.current.style.transform = `translate(${e.clientX - 18}px, ${e.clientY - 18}px)`
    }

    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      <div ref={dot}  className="cursor-dot" />
      <div ref={ring} className="cursor-ring" />
    </>
  )
}
