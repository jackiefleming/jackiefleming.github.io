import { profile, projects } from '../data/resume.js'

export default function Portfolio() {
  return (
    <section className="container page">
      <header className="page__head">
        <p className="page__eyebrow">Selected Work</p>
        <h1 className="page__title">Portfolio</h1>
        <p className="page__lead">
          A sampling of financial modeling, analytics, and strategy work. Case studies coming soon.
        </p>
      </header>

      <div className="projects">
        {projects.map((p, i) => (
          <article key={i} className="project">
            <div className="project__num">{String(i + 1).padStart(2, '0')}</div>
            <div className="project__body">
              <p className="project__cat">{p.category}</p>
              <h2 className="project__title">{p.title}</h2>
              <p className="project__summary">{p.summary}</p>
              <ul className="project__tags">
                {p.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="portfolio__note">
        <p>
          Want the detail behind any of these?{' '}
          <a href={`mailto:${profile.email}`}>Reach out</a> and I’ll walk you through it.
        </p>
      </div>
    </section>
  )
}
