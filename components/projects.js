import Image from 'next/image'
import { useState } from 'react'

const projects = [
  {
    id: 'vortex',
    name: 'Vortex',
    category: 'Desktop',
    type: 'League of Legends companion',
    featured: true,
    description: 'A Windows companion for League of Legends, built around the full match: role-aware builds and runes in champ select, a focused live overlay, and post-game grades, death reviews, and progress tracking.',
    tech: ['Windows 10 / 11', 'Riot-supported APIs', 'League client'],
    status: 'Invite-only beta',
    url: 'https://vortexapp.gg/',
    link: 'Explore Vortex',
  },
  {
    id: 'portfolio',
    name: 'Personal portfolio',
    category: 'Web',
    type: 'The site you’re on',
    description: 'A personal space for my projects, development skills, and a little about the person behind the code.',
    tech: ['Next.js', 'React', 'CSS'],
    url: '#hero',
    link: 'You’re here',
    code: 'https://github.com/jashansingh303/Portfolio',
  },
  {
    id: 'parstagram',
    name: 'Parstagram',
    category: 'Android',
    type: 'Photo-sharing app',
    description: 'An Instagram-inspired Android application for sharing photos, with Parse powering the backend.',
    tech: ['Kotlin', 'Android Studio', 'Parse'],
    code: 'https://github.com/jashansingh303/Parstagram',
  },
  {
    id: 'simple-twitter',
    name: 'Simple Twitter',
    category: 'Android',
    type: 'Social timeline app',
    description: 'An Android client built to display a Twitter timeline using the Twitter REST API.',
    tech: ['Kotlin', 'Android Studio', 'REST API'],
    code: 'https://github.com/jashansingh303/SimpleTwitter',
  },
].map((project, index) => ({ ...project, number: String(index + 1).padStart(2, '0') }))

const categories = ['All', ...new Set(projects.map(project => project.category))]

function ProjectLinks({ project }) {
  return (
    <div className="project-links">
      {project.url && (
        <a className="text-link" href={project.url}
          {...(project.url.startsWith('https') ? { target: '_blank', rel: 'noreferrer' } : {})}
          aria-label={`${project.link}: ${project.name}`}>
          {project.link} <span aria-hidden="true">↗</span>
        </a>
      )}
      {project.code && (
        <a className="text-link" href={project.code} target="_blank" rel="noreferrer"
          aria-label={`View code: ${project.name}`}>
          View code <span aria-hidden="true">↗</span>
        </a>
      )}
    </div>
  )
}

function Technologies({ project }) {
  return (
    <ul className="tech-list" aria-label="Platforms and technologies">
      {project.tech.map(tech => <li key={tech}>{tech}</li>)}
    </ul>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const visible = projects.filter(project => filter === 'All' || project.category === filter)

  return (
    <section id="portfolio" className="section work-section" aria-labelledby="work-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow section-label">01 / Selected work</p>
          <h2 id="work-title">Things I’ve built<span className="accent">.</span></h2>
        </div>
        <p>Desktop companions, web apps, and mobile projects.<br />A few things I’ve enjoyed building.</p>
      </div>
      <div className="work-toolbar">
        <div className="filters" role="group" aria-label="Filter projects">
          {categories.map(value => (
            <button key={value} aria-label={`${value} projects`} aria-pressed={filter === value}
              onClick={() => setFilter(value)}>
              {value}
              <span aria-hidden="true">
                {String(projects.filter(project => value === 'All' || project.category === value).length).padStart(2, '0')}
              </span>
            </button>
          ))}
        </div>
        <span className="project-count" role="status">{visible.length} {visible.length === 1 ? 'project' : 'projects'}</span>
      </div>
      <div className="project-list">
        {visible.map(project => project.featured ? (
          <article key={project.id} className="featured-project" aria-labelledby={`project-${project.id}`}>
            <figure className="project-preview">
              <a href="/vortex-dashboard.png" target="_blank" rel="noreferrer" aria-label="View full-size Vortex main dashboard screenshot (demo data)">
                {/* Serve this static screenshot directly; the host's image optimizer may be unavailable. */}
                <Image src="/vortex-dashboard.png" width={1460} height={920} unoptimized
                  alt="Vortex main dashboard with ranked progress, recent match rows, and repeat teammates using demo data" />
              </a>
              <figcaption>Main dashboard · Demo data <span aria-hidden="true">↗</span></figcaption>
            </figure>
            <div className="featured-content">
              <p className="eyebrow">Featured project / {project.category}</p>
              <h3 id={`project-${project.id}`}>{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <Technologies project={project} />
              <p className="project-status">{project.status}</p>
              <ProjectLinks project={project} />
            </div>
          </article>
        ) : (
          <article key={project.id} className="project-row" aria-labelledby={`project-${project.id}`}>
            <span className="project-number">{project.number}</span>
            <div className="project-identity">
              <p className="eyebrow">{project.category} / {project.type}</p>
              <h3 id={`project-${project.id}`}>{project.name}</h3>
            </div>
            <div className="project-details">
              <p className="project-description">{project.description}</p>
              <Technologies project={project} />
              <ProjectLinks project={project} />
            </div>
          </article>
        ))}
      </div>
      <a className="text-link all-code" href="https://github.com/jashansingh303" target="_blank" rel="noreferrer">
        More on GitHub <span aria-hidden="true">↗</span>
      </a>
    </section>
  )
}
