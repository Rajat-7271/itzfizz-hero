export default function Footer() {
  return (
    <footer
      className="px-6 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-4"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <span className="font-bebas text-xl tracking-widest" style={{ color: 'var(--muted)' }}>
        ITZFIZZ
      </span>
      <p className="text-[0.65rem] tracking-widest uppercase" style={{ color: 'var(--muted)' }}>
        © 2024 ITZFIZZ — All rights reserved
      </p>
    </footer>
  )
}
