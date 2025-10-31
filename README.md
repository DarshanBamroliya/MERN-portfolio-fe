## Portfolio (Next.js)

A modern portfolio frontend built with Next.js and Tailwind CSS. It includes a hero, selected projects, an About section tailored for a MERN full‑stack profile, a seamless skills marquee, and a rounded top footer with contact/links.

### Tech Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS

### Key Features
- Selected Projects section with responsive image grids
- About Me section with 12‑column layout (3/9 split on large screens)
- Infinite, smooth, one‑line skills marquee (seamless loop)
- Footer with large rounded top corners, CTA email, location, live clock, and social links

### Getting Started
Install dependencies and start the dev server:

```bash
npm install
npm run dev
# or: yarn dev / pnpm dev / bun dev
```

Open http://localhost:3000 in your browser.

### Available Scripts
- `dev` – start the development server
- `build` – create a production build
- `start` – start the production server
- `lint` – run lint checks

### Project Structure (frontend)
```
src/
  app/
    layout.tsx         # Root layout
    page.tsx           # Entry that renders Components/page
    globals.css        # Global styles + marquee + theme vars
  Components/
    page.tsx           # Composes sections
    Common/
      Header/
      Footer/
      AnimatedButton/
    Pages/
      Herosec/
      SelectedProjects/
      OurProject/
      Aboutme/
```

### Styling Notes
- Tailwind is used for layout/spacing/typography
- Theme variables used by footer: `--fg` (dark), `--bg` (light)
- Marquee keyframes/classes are defined in `src/app/globals.css` (`@keyframes marquee-scroll`, `.marquee`, `.marquee__content`)

### Customization
- Update About text and the skills chips in `src/Components/Pages/Aboutme/page.tsx`
- Update footer email and social links in `src/Components/Common/Footer/page.tsx`

### Deployment
Any Next.js compatible platform works (e.g., Vercel). Build with:

```bash
npm run build && npm run start
```
