import { Link } from 'react-router-dom'
import { profile, highlights, competencies, strengths, interests } from '../data/resume.js'

export default function About() {
  return (
    <>
      <section className="hero container">
        <p className="hero__eyebrow">{profile.focus}</p>
        <h1 className="hero__title">
          Analytical rigor,
          <br />
          <em>people-oriented</em> leadership.
        </h1>
        <p className="hero__intro">{profile.intro}</p>
        <div className="hero__actions">
          <Link to="/resume" className="btn btn--primary">
            View résumé
          </Link>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn--ghost">
            Connect on LinkedIn
          </a>
        </div>
        <p className="hero__meta">{profile.tagline}</p>
      </section>

      <section className="section container">
        <div className="section__head">
          <span className="section__index">01</span>
          <h2 className="section__title">Results</h2>
        </div>
        <div className="highlights">
          {highlights.map((h) => (
            <div key={h.value} className="highlight">
              <p className="highlight__value">{h.value}</p>
              <p className="highlight__label">{h.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section container">
        <div className="section__head">
          <span className="section__index">02</span>
          <h2 className="section__title">Core competencies</h2>
        </div>
        <ul className="competencies">
          {competencies.map((c) => (
            <li key={c} className="competency">
              {c}
            </li>
          ))}
        </ul>
      </section>

      <section className="section container">
        <div className="section__head">
          <span className="section__index">03</span>
          <h2 className="section__title">What I bring</h2>
        </div>
        <div className="strengths">
          {strengths.map((s) => (
            <article key={s.title} className="strength">
              <h3 className="strength__title">{s.title}</h3>
              <p className="strength__body">{s.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section container">
        <div className="section__head">
          <span className="section__index">04</span>
          <h2 className="section__title">Outside of work</h2>
        </div>
        <ul className="interests">
          {interests.map((it) => (
            <li key={it.title} className="interest">
              <h3 className="interest__title">{it.title}</h3>
              {it.body && <p className="interest__body">{it.body}</p>}
            </li>
          ))}
        </ul>
      </section>

      <section className="cta container">
        <h2 className="cta__title">Let’s talk.</h2>
        <p className="cta__body">
          Open to Corporate FP&amp;A and supply &amp; demand planning roles.
        </p>
        <div className="cta__actions">
          <a href={`mailto:${profile.email}`} className="btn btn--primary">
            {profile.email}
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn--ghost">
            LinkedIn
          </a>
        </div>
      </section>
    </>
  )
}
