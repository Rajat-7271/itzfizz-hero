import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AboutSection() {
  const eyebrow = useRef(null)
  const heading = useRef(null)
  const para    = useRef(null)

  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: eyebrow.current,
        start: 'top 78%',
        toggleActions: 'play none none none',
      },
    })
      .to(eyebrow.current, { opacity: 1, y: 0, duration: 0.5 })
      .to(heading.current, { opacity: 1, y: 0, duration: 0.7, ease: 'expo.out' }, '-=0.2')
      .to(para.current,    { opacity: 1, y: 0, duration: 0.6 }, '-=0.3')
  }, [])

  const hidden = { opacity: 0, transform: 'translateY(22px)' }

  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-6 md:px-12 py-32"
      style={{ borderBottom: '1px solid var(--border)' }}
    >
      <div className="max-w-4xl w-full">
        <p
          ref={eyebrow}
          className="text-[0.68rem] font-medium tracking-[0.28em] uppercase mb-7"
          style={{ ...hidden, color: 'var(--accent)' }}
        >
          — Platform Overview
        </p>

        <h2
          ref={heading}
          className="font-bebas leading-[0.95] mb-10"
          style={{ ...hidden, fontSize: 'clamp(48px,8vw,100px)', letterSpacing: '0.08em', color: 'var(--text)' }}
        >
          REDEFINING<br />THE EXPERIENCE
        </h2>

        <p
          ref={para}
          className="text-base font-light leading-loose max-w-lg"
          style={{ ...hidden, color: 'var(--muted)' }}
        >
          ITZFIZZ is a next-generation logistics and mobility platform built for
          operators who refuse to compromise on precision. Every interaction, every
          data point, every handoff — engineered with relentless attention to motion.
        </p>
      </div>
    </section>
  )
}
