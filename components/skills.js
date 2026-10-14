const groups = [
  { number: '01', title: 'Frontend', description: 'The part people interact with.', skills: ['React', 'Next.js', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'] },
  { number: '02', title: 'Backend & data', description: 'What makes it all work.', skills: ['Express', 'REST APIs', 'Python', 'Parse'] },
  { number: '03', title: 'Mobile', description: 'Experiences beyond the browser.', skills: ['Kotlin', 'Android Studio'] },
  {
    number: '04',
    title: 'AI & development',
    description: 'Coding assistants, LLM integrations, and agent workflows.',
    skills: [
      'OpenAI Codex',
      'Claude',
      'Claude Code',
      'Cursor',
      'GitHub Copilot',
      'Large language models (LLMs)',
      'Prompt engineering',
      'Context engineering',
      'LLM API integration',
      'AI agents & tool calling',
    ],
  },
]

export default function Skills() {
  return <section id="skills" className="section skills-section" aria-labelledby="skills-title">
    <div className="section-heading"><div><p className="eyebrow section-label">02 / My toolkit</p><h2 id="skills-title">Tools of the trade<span className="accent">.</span></h2></div><p>The languages, tools, and AI workflows<br />behind my projects.</p></div>
    <div className="skills-grid">{groups.map(group => <div className="skill-group" key={group.title}><span className="eyebrow skill-number">{group.number}</span><h3>{group.title}</h3><p>{group.description}</p><ul>{group.skills.map(skill => <li key={skill}>{skill}</li>)}</ul></div>)}</div>
  </section>
}
