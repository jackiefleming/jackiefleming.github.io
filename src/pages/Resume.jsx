import { profile, experience, education, competencies } from '../data/resume.js'

export default function Resume() {
  return (
    <section className="container page">
      <header className="page__head">
        <p className="page__eyebrow">{profile.focus}</p>
        <h1 className="page__title">Résumé</h1>
        <p className="page__lead">{profile.intro}</p>
      </header>

      <div className="resume">
        <div className="resume__col">
          <h2 className="resume__heading">Experience</h2>
          <ol className="timeline">
            {experience.map((job, i) => (
              <li key={i} className="timeline__item">
                <div className="timeline__top">
                  <h3 className="timeline__role">{job.role}</h3>
                  <span className="timeline__date">{job.date}</span>
                </div>
                <p className="timeline__company">
                  {job.company} · <span>{job.location}</span>
                </p>
                <ul className="timeline__points">
                  {job.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>

        <aside className="resume__col resume__col--side">
          <h2 className="resume__heading">Education</h2>
          {education.map((ed, i) => (
            <div key={i} className="edu">
              <h3 className="edu__degree">{ed.degree}</h3>
              <p className="edu__school">{ed.school}</p>
              <p className="edu__date">{ed.date}</p>
              {ed.details.length > 0 && (
                <ul className="edu__details">
                  {ed.details.map((d, j) => (
                    <li key={j}>{d}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <h2 className="resume__heading resume__heading--spaced">Core competencies</h2>
          <ul className="skills">
            {competencies.map((c) => (
              <li key={c} className="skill">
                {c}
              </li>
            ))}
          </ul>

          <h2 className="resume__heading resume__heading--spaced">Contact</h2>
          <ul className="contact">
            <li>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  )
}
