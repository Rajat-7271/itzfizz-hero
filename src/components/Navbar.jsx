import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

const links = ['Platform', 'Solutions', 'Insights', 'Contact']

export default function Navbar() {
  const nav = useRef(null)

  useEffect(() => {
    // slide nav down on load
    gsap.to(nav.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 0.15,
      ease: 'power3.out',
    })
  }, [])

  return (
    <nav
      ref={nav}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-7"
      style={{ opacity: 0, transform: 'translateY(-12px)' }}
    >
      <div className="font-bebas text-2xl tracking-widest">
        ITZ<span style={{ color: 'var(--accent)' }}>FIZZ</span>
      </div>

      <ul className="hidden md:flex gap-9 list-none">
        {links.map(l => (
          <li key={l}>
            <a
              href="#"
              className="text-[0.7rem] font-medium tracking-[0.18em] uppercase hover:text-[var(--accent)] transition-colors duration-200"
              style={{ color: 'var(--muted)' }}
            >
              {l}
            </a>
          </li>
        ))}
      </ul>

      <button
        className="hidden md:block text-[0.68rem] font-semibold tracking-[0.2em] uppercase px-5 py-2.5 transition-all duration-200 hover:scale-[1.04]"
        style={{ background: 'var(--accent)', color: '#0a0a0a' }}
      >
        Get Started
      </button>
    </nav>
  )
}
