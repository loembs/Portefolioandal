import { useApp } from '../AppContext'

function ProjectCard({ p, isDark }) {
  const heading = isDark ? 'text-white' : 'text-gray-900'
  const body = isDark ? 'text-secondary' : 'text-gray-600'
  const tagBg = isDark ? 'bg-black-100 border-white/10 text-secondary' : 'bg-indigo-50 border-indigo-100 text-indigo-700'

  return (
    <a
      href={p.link}
      target="_blank"
      rel="noreferrer"
      className={`group flex flex-col overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
        isDark
          ? 'bg-tertiary border-white/5 shadow-card hover:border-yellow/20'
          : 'bg-white border-gray-200 shadow-md hover:border-indigo-200 hover:shadow-lg'
      }`}
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={p.image}
          alt={p.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className={`font-bold text-[18px] ${p.gradient}`}>{p.title}</h3>
        <p className={`mt-2 text-sm leading-relaxed flex-1 ${body}`}>{p.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {p.tech.map(tech => (
            <span key={tech} className={`text-[11px] font-medium px-2.5 py-1 rounded-full border ${tagBg}`}>
              #{tech}
            </span>
          ))}
        </div>
      </div>
    </a>
  )
}

export default function Projects() {
  const { isDark, t } = useApp()
  const pr = t.projects

  const label = isDark ? 'text-secondary' : 'text-indigo-600'
  const heading = isDark ? 'text-white' : 'text-gray-900'
  const body = isDark ? 'text-secondary' : 'text-gray-600'
  const divider = isDark ? 'bg-white/10' : 'bg-gray-200'

  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 sm:px-16 py-16">
      <div>
        <p className={`text-sm font-medium uppercase tracking-widest ${label}`}>{pr.label}</p>
        <h2 className={`mt-2 font-black text-[30px] sm:text-[40px] md:text-[48px] leading-tight ${heading}`}>{pr.title}</h2>
      </div>

      <p className={`mt-4 text-[16px] max-w-3xl leading-[30px] ${body}`}>{pr.bio}</p>

      {/* Web projects */}
      <div className="mt-10">
        <h3 className={`font-semibold text-[16px] mb-6 flex items-center gap-3 ${heading}`}>
          <span className={`h-px flex-1 max-w-xs ${divider}`} />
          {pr.webTitle}
          <span className={`h-px flex-1 max-w-xs ${divider}`} />
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {pr.items.map(p => <ProjectCard key={p.id} p={p} isDark={isDark} />)}
        </div>
      </div>

      {/* IA projects */}
      <div className="mt-14">
        <h3 className={`font-semibold text-[16px] mb-6 flex items-center gap-3 ${heading}`}>
          <span className={`h-px flex-1 max-w-xs ${divider}`} />
          {pr.iaTitle}
          <span className={`h-px flex-1 max-w-xs ${divider}`} />
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {pr.iaItems.map(p => <ProjectCard key={p.id} p={p} isDark={isDark} />)}
        </div>
      </div>
    </section>
  )
}
