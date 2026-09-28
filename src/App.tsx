import { TeachesWord } from '@/components/TeachesWord'
import { companies } from '@/data/companies'

function ContactIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path
        fill="currentColor"
        d="M3 8h8.2L8.1 4.9l.9-.9L14 8l-5 4-.9-.9L11.2 8H3z"
      />
    </svg>
  )
}

export default function App() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className="rail nav">
        <a className="brand" href="#">
          Alexander Perez
        </a>
        <nav className="nav-links" aria-label="Main">
          <a href="#" aria-current="page">
            Home
          </a>
          <a href="#about">About</a>
          <a href="#companies">Companies</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="pill" href="mailto:hello@iknowai.co">
          Contact
          <ContactIcon />
        </a>
      </header>

      <main id="main">
        <section className="rail hero">
          <div className="hero-grid">
            <div>
              <p className="kicker">
                <span className="v">Engineer who teaches</span>
                {' · '}
                <span className="y">AI for non-technical leaders</span>
              </p>
              <h1 className="h1">
                Engineer <span className="mute">who</span> <TeachesWord />{' '}
                <span className="mute">AI without</span> jargon{' '}
                <span className="mute">or</span> shame.
              </h1>
              <p className="lede">
                Twelve years shipping products and leading frontend teams. Then
                security research. Now helping non-technical leaders close the gap
                between AI rollout and routine.
              </p>
            </div>
            <div className="portrait">
              <img
                src="/photos/alex-perez-circle.png"
                alt="Alexander Perez"
                width={480}
                height={480}
              />
            </div>
          </div>
        </section>

        <section className="rail section" id="about">
          <div className="bio-grid">
            <p className="section-label">Info</p>
            <p className="prose">
              I'm Alex Perez, based in Denver. I've launched startups, delivered a
              $2.5M government contract, and broken DeFi systems for a living. The
              through-line is translation: what the tools actually do, in language
              that sticks for HR, Ops, and L&D teams - never instead of them.
            </p>
          </div>
        </section>

        <section className="rail section" id="companies">
          <div className="section-head">
            <p className="section-label">Companies</p>
            <p className="prose">
              Places I've shipped - engineering, security research, and founding
              work. Logos only where a public mark exists.
            </p>
          </div>
          <ul className="logos">
            {companies.map((c) => (
              <li key={c.name}>
                <a href={c.href} aria-label={c.name}>
                  <img src={c.src} alt="" width={200} height={200} />
                </a>
              </li>
            ))}
          </ul>
        </section>

        <footer className="contact-band" id="contact">
          <div className="rail">
            <h2 className="contact-h2">Connect, collaborate, or just say hello</h2>
            <a className="mail" href="mailto:hello@iknowai.co">
              hello@iknowai.co
            </a>
          </div>
        </footer>
      </main>
    </>
  )
}
