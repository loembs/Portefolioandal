import { useApp } from '../AppContext'

export default function Experience() {
  const { isDark, t } = useApp()
  const ex = t.experience

  const card = isDark
    ? 'bg-black-100 border-white/5 shadow-card hover:border-white/10'
    : 'bg-white border-gray-200 shadow-md hover:border-indigo-200'
  const label = isDark ? 'text-secondary' : 'text-indigo-600'
  const heading = isDark ? 'text-white' : 'text-gray-900'
  const body = isDark ? 'text-secondary' : 'text-gray-600'
  const bodyMuted = isDark ? 'text-white-100' : 'text-gray-700'
  const badge = isDark ? 'bg-tertiary text-secondary' : 'bg-indigo-50 text-indigo-700'
  const dot = isDark ? 'bg-secondary' : 'bg-indigo-400'

  return (
    <section id="experience" className="max-w-7xl mx-auto px-6 sm:px-16 py-16">
      {/* Header */}
      <div>
        <p className={`text-sm font-medium uppercase tracking-widest ${label}`}>{ex.label}</p>
        <h2 className={`mt-2 font-black text-[30px] sm:text-[40px] md:text-[48px] leading-tight ${heading}`}>{ex.title}</h2>
      </div>

      {/* Timeline */}
      <div className="mt-12 relative timeline-line pl-14">
        {ex.jobs.map((job, i) => (
          <div key={i} className="relative mb-10 last:mb-0">
            {/* Icon */}
            <div
              className={`absolute -left-14 top-1 w-10 h-10 rounded-full flex items-center justify-center border-4 shadow-card ${
                isDark ? 'border-primary' : 'border-[#f0f4ff]'
              }`}
              style={{ backgroundColor: job.iconBg }}
            >
              <span className="text-[10px] font-black text-primary leading-none">
                {job.company.slice(0, 2).toUpperCase()}
              </span>
            </div>

            {/* Card */}
            <div className={`rounded-2xl p-6 border transition-colors ${card}`}>
              <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                <h3 className={`font-bold text-[18px] sm:text-[20px] ${job.gradient}`}>
                  {job.title}
                </h3>
                <span className={`text-xs font-medium px-3 py-1 rounded-full ${badge}`}>
                  {job.date}
                </span>
              </div>
              <p className={`text-sm mb-4 ${body}`}>
                {job.company} — <span className="italic">{job.type}</span>
              </p>
              <ul className="space-y-2">
                {job.points.map((pt, j) => (
                  <li key={j} className={`flex items-start gap-2 text-sm leading-relaxed ${bodyMuted}`}>
                    <span className={`mt-2 min-w-[6px] w-1.5 h-1.5 rounded-full shrink-0 ${dot}`} />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Education */}
      <div className="mt-16">
        <p className={`text-sm font-medium uppercase tracking-widest ${label}`}>{ex.eduLabel}</p>
        <h2 className={`mt-2 font-black text-[30px] sm:text-[40px] md:text-[48px] leading-tight ${heading}`}>{ex.eduTitle}</h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ex.education.map((edu, i) => (
            <div key={i} className={`rounded-2xl p-5 border transition-colors ${card.replace('hover:border-white/10', 'hover:border-yellow/20').replace('hover:border-indigo-200', 'hover:border-yellow/40')}`}>
              <p className={`text-[11px] font-semibold uppercase tracking-widest ${label}`}>{edu.school}</p>
              <h3 className={`mt-2 font-bold text-[15px] leading-snug ${heading}`}>{edu.degree}</h3>
              <p className={`mt-3 text-xs ${body}`}>{edu.date}</p>
              <p className={`text-xs ${body}`}>{edu.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
