# itzfizz-hero

Scroll-driven hero section animation — built for an assignment.

**Stack:** React 18 + Vite + GSAP (ScrollTrigger) + Tailwind CSS

---

## Running locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`

---

## Build & deploy

```bash
# build
npm run build

# deploy to github pages (gh-pages already in devDeps)
npm run deploy
```

After deploying, go to your repo → Settings → Pages → set source to `gh-pages` branch.

Live at: `https://rajat-7271.github.io/itzfizz-hero/`

---

## Project structure

```
src/
  components/
    Cursor.jsx          custom cursor dot + ring
    Navbar.jsx          fixed nav, fades in on load
    HeroSection.jsx     main hero with all scroll animations
    CarSVG.jsx          inline SVG car illustration
    AboutSection.jsx    scroll-triggered reveal section
    FeaturesSection.jsx animated feature cards
    Footer.jsx
  App.jsx
  main.jsx
  index.css             tailwind + global vars
```

## What the animations do

- **On load** — headline chars stagger in with a back-ease bounce, car fades + scales in, stats cascade up
- **On scroll** — car drifts up and rotates (scrub 1.2), ghost WELCOME word zooms out, solid headline exits upward, stats strip fades out
- **Section reveals** — About and Features sections animate in as they enter the viewport
- All transforms are GPU-composited (`translate`, `scale`, `rotate`) — no layout reflows
