import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CarSVG from './CarSVG'

gsap.registerPlugin(ScrollTrigger)

const chars = ['I', 'T', 'Z', 'F', 'I', 'Z', 'Z']

const stats = [
  { num: '58%', label: 'Increase in pick-up point utilisation' },
  { num: '23%', label: 'Decrease in customer phone call volume' },
  { num: '27%', label: 'Growth in active platform users' },
  { num: '40%', label: 'Reduction in operational overhead' },
]

export default function HeroSection() {
  const sectionRef = useRef(null)
  const ghostRef   = useRef(null)
  const solidRef   = useRef(null)
  const charRefs   = useRef([])
  const carRef     = useRef(null)
  const statsRef   = useRef(null)
  const tagRef     = useRef(null)
  const scrollRef  = useRef(null)
  const glowRef    = useRef(null)

  // -- intro timeline --
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.from(ghostRef.current, { opacity: 0, scaleX: 0.72, duration: 1, ease: 'expo.out' }, 0.3)

    tl.to(charRefs.current, {
      opacity: 1,
      y: 0,
      rotate: 0,
      duration: 0.7,
      stagger: 0.055,
      ease: 'back.out(1.5)',
    }, 0.5)

    tl.to(tagRef.current,    { opacity: 1, x: 0, duration: 0.6 }, 0.7)
    tl.to(scrollRef.current, { opacity: 1, duration: 0.5 }, 0.9)

    tl.fromTo(
      carRef.current,
      { opacity: 0, scale: 0.87, y: 32 },
      { opacity: 1, scale: 1, y: 0, duration: 1.1, ease: 'expo.out' },
      0.35
    )

    const statEls = statsRef.current.querySelectorAll('.stat-item')
    tl.to(statEls, { opacity: 1, y: 0, duration: 0.55, stagger: 0.12, ease: 'power2.out' }, 0.8)
  }, [])

  // -- scroll-driven stuff --
  useEffect(() => {
    const sec = sectionRef.current

    // car drifts up as you scroll
    gsap.to(carRef.current, {
      y: -150,
      scale: 1.09,
      rotate: 2,
      ease: 'none',
      scrollTrigger: { trigger: sec, start: 'top top', end: 'bottom top', scrub: 1.2 },
    })

    // ghost word zooms out
    gsap.to(ghostRef.current, {
      scale: 1.28,
      opacity: 0,
      ease: 'none',
      scrollTrigger: { trigger: sec, start: 'top top', end: '60% top', scrub: true },
    })

    // solid chars slide up
    gsap.to(solidRef.current, {
      y: -65,
      opacity: 0,
      ease: 'none',
      scrollTrigger: { trigger: sec, start: 'top top', end: '50% top', scrub: true },
    })

    // stats fade out
    gsap.to(statsRef.current, {
      y: 44,
      opacity: 0,
      ease: 'none',
      scrollTrigger: { trigger: sec, start: '30% top', end: '80% top', scrub: true },
    })

    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  // glow follows mouse
  const handleMouseMove = (e) => {
    const r = sectionRef.current.getBoundingClientRect()
    gsap.to(glowRef.current, {
      x: e.clientX - r.left - 300,
      y: e.clientY - r.top - 300,
      duration: 1.2,
      ease: 'power2.out',
    })
  }

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative w-full h-screen overflow-hidden border-b grid-overlay"
      style={{ borderColor: 'var(--border)' }}
    >
      {/* glow blob */}
      <div
        ref={glowRef}
        className="absolute pointer-events-none"
        style={{
          width: 600, height: 600,
          background: 'radial-gradient(circle, rgba(212,245,66,0.07) 0%, transparent 70%)',
          top: '50%', left: '50%',
          transform: 'translate(-50%,-50%)',
          willChange: 'transform',
        }}
      />

      {/* left side tag */}
      <div
        ref={tagRef}
        className="absolute left-12 top-1/2 -translate-y-1/2 z-10 hidden md:flex flex-col items-center gap-4"
        style={{ opacity: 0, transform: 'translateY(-50%) translateX(-12px)' }}
      >
        <span
          className="text-[0.6rem] tracking-[0.22em] uppercase"
          style={{ color: 'var(--muted)', writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          Est. 2024
        </span>
        <div
          className="w-px"
          style={{ height: 80, background: 'linear-gradient(to bottom, var(--accent), transparent)' }}
        />
      </div>

      {/* headlines */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center pointer-events-none w-full">
        {/* ghost WELCOME behind the main text */}
        <span
          ref={ghostRef}
          className="headline-ghost font-bebas block"
          style={{ fontSize: 'clamp(72px,12vw,160px)', letterSpacing: '0.35em', lineHeight: 0.9 }}
        >
          WELCOME
        </span>

        {/* actual ITZFIZZ - chars animate in individually */}
        <span
          ref={solidRef}
          className="font-bebas block"
          style={{ fontSize: 'clamp(72px,12vw,160px)', letterSpacing: '0.35em', lineHeight: 0.9, color: 'var(--text)' }}
        >
          {chars.map((ch, i) => (
            <span
              key={i}
              ref={el => (charRefs.current[i] = el)}
              className="inline-block"
              style={{ opacity: 0, transform: 'translateY(60px) rotate(4deg)' }}
            >
              {ch}
            </span>
          ))}
        </span>
      </div>

      {/* car */}
      <div
        ref={carRef}
        className="absolute top-1/2 left-1/2 z-[3] pointer-events-none"
        style={{
          transform: 'translate(-50%,-50%)',
          width: 'min(700px,75vw)',
          opacity: 0,
          willChange: 'transform',
        }}
      >
        <CarSVG />
        <div
          className="absolute -bottom-1.5 left-[10%]"
          style={{
            width: '80%', height: 2,
            background: 'linear-gradient(90deg, transparent, var(--accent), transparent)',
          }}
        />
      </div>

      {/* stats bottom strip */}
      <div
        ref={statsRef}
        className="absolute bottom-0 left-0 right-0 grid grid-cols-2 md:grid-cols-4 z-10"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        {stats.map((s, i) => (
          <div
            key={i}
            className="stat-item px-6 md:px-9 py-6 md:py-7"
            style={{
              borderRight: i < stats.length - 1 ? '1px solid var(--border)' : 'none',
              opacity: 0,
              transform: 'translateY(20px)',
            }}
          >
            <span
              className="font-condensed font-black block leading-none"
              style={{ fontSize: 'clamp(2.2rem,4vw,3.6rem)', color: 'var(--accent)' }}
            >
              {s.num}
            </span>
            <p className="text-[0.7rem] font-light leading-relaxed mt-1.5 max-w-[160px]" style={{ color: 'var(--muted)' }}>
              {s.label}
            </p>
          </div>
        ))}
      </div>

      {/* scroll indicator */}
      <div
        ref={scrollRef}
        className="absolute right-12 bottom-24 hidden md:flex flex-col items-center gap-2.5 z-10"
        style={{ opacity: 0 }}
      >
        <span
          className="text-[0.58rem] tracking-[0.22em] uppercase"
          style={{ color: 'var(--muted)', writingMode: 'vertical-rl' }}
        >
          Scroll
        </span>
        <div className="w-px overflow-hidden" style={{ height: 60, background: 'var(--border)' }}>
          <div className="scroll-thumb-anim w-full" style={{ height: 30, background: 'var(--accent)' }} />
        </div>
      </div>
    </section>
  )
}
