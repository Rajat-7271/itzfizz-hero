import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const cards = [
  {
    num: '01',
    title: 'Scroll Intelligence',
    body: 'Physics-based scroll interpolation maps user intent to fluid motion, cutting out jarring transitions completely.',
  },
  {
    num: '02',
    title: 'Real-Time Telemetry',
    body: 'Live data streams with sub-100ms latency. Every metric, every moment — exactly when you need it.',
  },
  {
    num: '03',
    title: 'Motion Design System',
    body: 'A full language of transitions and timing curves that makes every single interaction feel intentional.',
  },
]

export default function FeaturesSection() {
  const eyebrow  = useRef(null)
  const heading  = useRef(null)
  const cardRefs = useRef([])

  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: eyebrow.current,
        start: 'top 78%',
        toggleActions: 'play none none none',
      },
    })
      .to(eyebrow.current, { opacity: 1, duration: 0.4 })
      .to(heading.current, { opacity: 1, duration: 0.6, ease: 'expo.out' }, '-=0.2')

    // cards stagger in
    gsap.to(cardRefs.current, {
      opacity: 1,
      y: 0,
      duration: 0.65,
      stagger: 0.15,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: cardRefs.current[0],
        start: 'top 82%',
        toggleActions: 'play none none none',
      },
    })
  }, [])

  return (
    <section id="features" className="min-h-screen px-6 md:px-12 py-32">
      <p
        ref={eyebrow}
        className="text-[0.68rem] font-medium tracking-[0.28em] uppercase mb-2"
        style={{ opacity: 0, color: 'var(--accent)' }}
      >
        — Core Capabilities
      </p>

      <h2
        ref={heading}
        className="font-bebas leading-[0.95] mb-14"
        style={{ opacity: 0, fontSize: 'clamp(48px,8vw,100px)', letterSpacing: '0.08em', color: 'var(--text)' }}
      >
        BUILT TO<br />PERFORM
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5">
        {cards.map((c, i) => (
          <div
            key={i}
            ref={el => (cardRefs.current[i] = el)}
            className="feature-card p-10 md:p-12"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              opacity: 0,
              transform: 'translateY(40px)',
            }}
          >
            <div
              className="font-bebas leading-none mb-6"
              style={{ fontSize: '3.8rem', color: 'rgba(212,245,66,0.35)' }}
            >
              {c.num}
            </div>
            <h3
              className="font-condensed font-bold tracking-wider uppercase mb-3"
              style={{ fontSize: '1.35rem', color: 'var(--text)' }}
            >
              {c.title}
            </h3>
            <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--muted)' }}>
              {c.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
