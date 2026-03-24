// top-down car illustration - inline svg so we can animate it with gsap
export default function CarSVG() {
  return (
    <svg
      viewBox="0 0 700 320"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto block"
      style={{ filter: 'drop-shadow(0 40px 80px rgba(212,245,66,0.15))' }}
    >
      {/* ground shadow */}
      <ellipse cx="350" cy="292" rx="265" ry="22" fill="rgba(0,0,0,0.55)" />

      {/* car body */}
      <path
        d="M98,218 Q88,178 118,148 L200,108 Q280,68 350,66 Q420,68 500,108 L582,148 Q612,178 602,218 L592,252 Q350,272 108,252 Z"
        fill="#1a1a1a"
        stroke="#2a2a2a"
        strokeWidth="1.5"
      />

      {/* roof */}
      <path
        d="M188,146 Q222,88 282,70 L350,64 L418,70 Q478,88 512,146 Z"
        fill="#0f0f0f"
        stroke="#222"
        strokeWidth="1"
      />

      {/* windshield */}
      <path
        d="M214,143 Q242,93 292,76 L350,70 L408,76 Q458,93 486,143 Z"
        fill="rgba(100,200,255,0.07)"
        stroke="rgba(100,200,255,0.18)"
        strokeWidth="1"
      />

      {/* roof accent */}
      <path d="M282,70 Q350,58 418,70" stroke="rgba(212,245,66,0.28)" strokeWidth="1.5" fill="none" />

      {/* hood lines */}
      <path
        d="M198,146 Q238,128 280,118 Q320,110 350,108 Q380,110 420,118 Q462,128 502,146"
        stroke="#252525"
        strokeWidth="1"
        fill="none"
      />

      {/* grille */}
      <rect x="278" y="215" width="144" height="20" rx="4" fill="#0d0d0d" stroke="rgba(212,245,66,0.22)" strokeWidth="1" />
      {[290, 310, 330, 350, 370, 390, 410].map(x => (
        <line key={x} x1={x} y1="215" x2={x} y2="235" stroke="rgba(212,245,66,0.13)" strokeWidth="1" />
      ))}

      {/* front bumper */}
      <path d="M198,235 Q350,246 502,235 L512,252 Q350,264 188,252 Z" fill="#141414" stroke="#2a2a2a" strokeWidth="1" />

      {/* headlights */}
      <path d="M146,198 Q158,188 184,190 L194,230 Q168,234 146,224 Z" fill="#0d0d0d" stroke="rgba(212,245,66,0.38)" strokeWidth="1.2" />
      <path d="M153,203 Q163,196 181,198 L187,223 Q167,226 153,219 Z" fill="rgba(212,245,66,0.05)" />
      <path d="M554,198 Q542,188 516,190 L506,230 Q532,234 554,224 Z" fill="#0d0d0d" stroke="rgba(212,245,66,0.38)" strokeWidth="1.2" />
      <path d="M547,203 Q537,196 519,198 L513,223 Q533,226 547,219 Z" fill="rgba(212,245,66,0.05)" />

      {/* DRLs */}
      <path d="M156,207 L182,204" stroke="rgba(212,245,66,0.85)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M544,207 L518,204" stroke="rgba(212,245,66,0.85)" strokeWidth="1.5" strokeLinecap="round" />

      {/* wheels - all 4 */}
      {[
        { cx: 163, cy: 183 },
        { cx: 537, cy: 183 },
        { cx: 178, cy: 248 },
        { cx: 522, cy: 248 },
      ].map(({ cx, cy }, i) => (
        <g key={i}>
          <ellipse cx={cx} cy={cy} rx="29" ry="39" fill="#111" stroke="#333" strokeWidth="2" />
          <ellipse cx={cx} cy={cy} rx="17" ry="25" fill="#0a0a0a" stroke="rgba(212,245,66,0.18)" strokeWidth="1" />
          <ellipse cx={cx} cy={cy} rx="6"  ry="8"  fill="#1a1a1a" />
        </g>
      ))}

      {/* side skirt glow */}
      <line x1="194" y1="234" x2="506" y2="234" stroke="rgba(212,245,66,0.1)" strokeWidth="2" />

      {/* rear spoiler */}
      <rect x="238" y="102" width="224" height="9" rx="2" fill="#0d0d0d" stroke="rgba(212,245,66,0.18)" strokeWidth="1" />

      {/* brake lights */}
      <path d="M146,163 Q158,160 188,164 L183,190 Q158,186 146,180 Z" fill="rgba(255,60,0,0.12)" stroke="rgba(255,60,0,0.48)" strokeWidth="1" />
      <path d="M554,163 Q542,160 512,164 L517,190 Q542,186 554,180 Z" fill="rgba(255,60,0,0.12)" stroke="rgba(255,60,0,0.48)" strokeWidth="1" />

      {/* center badge */}
      <circle cx="350" cy="118" r="9" fill="#1a1a1a" stroke="rgba(212,245,66,0.38)" strokeWidth="1" />
      <circle cx="350" cy="118" r="4" fill="rgba(212,245,66,0.28)" />
    </svg>
  )
}
