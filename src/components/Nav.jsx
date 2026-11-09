import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { profile } from '../data/resume.js'

const links = [
  { to: '/', label: 'About', end: true },
  { to: '/resume', label: 'Resume' },
  // Portfolio hidden until real case studies are ready (see PRD.md):
  // { to: '/portfolio', label: 'Portfolio' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <div className="nav__inner container">
        <NavLink to="/" className="nav__brand" onClick={() => setOpen(false)}>
          <span className="nav__mark">JF</span>
          <span className="nav__name">{profile.name}</span>
        </NavLink>

        <button
          className="nav__toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>

        <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
