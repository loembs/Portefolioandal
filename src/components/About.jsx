import { useApp } from '../AppContext'

export default function About() {
  const { isDark, t } = useApp()
  const ab = t.about

  const card = isDark
    ? 'bg-black-100 border-white/5 shadow-card hover:border-yellow/20'
    : 'bg-white border-gray-200 shadow-md hover:border-indigo-200'
  const label = isDark ? 'text-secondary' : 'text-indigo-600'
  const heading = isDark ? 'text-white' : 'text-gray-900'
  const body = isDark ? 'text-secondary' : 'text-gray-600'
  const pill = isDark ? 'bg-tertiary border-white/5 text-white-100' : 'bg-indigo-50 border-indigo-100 text-indigo-700'
  const pillSm = isDark ? 'bg-tertiary text-secondary' : 'bg-gray-100 text-gray-600'
  const divider = isDark ? 'bg-white/10' : 'bg-gray-200'

  return (
    <section id="about" className="max-w-7xl mx-auto px-6 sm:px-16 py-16">
      <div>
        <p className={`text-sm font-medium uppercase tracking-widest ${label}`}>{ab.label}</p>
        <h2 className={`mt-2 font-black text-[30px] sm:text-[40px] md:text-[48px] leading-tight ${heading}`}>{ab.title}</h2>
      </div>

      {/* Bio + traits */}
      <div className="mt-10 grid gap-10 md:grid-cols-[1.2fr,1fr] items-start">
        <div>
          <p className={`text-[16px] leading-[30px] ${body}`}>
            {ab.bio1.split('Patrick Nat').map((part, i) =>
              i === 0
                ? part
                : <span key={i}><span className={`font-semibold ${heading}`}>Patrick Nat</span>{part.split('n8n').map((p, j) =>
                    j === 0 ? p : <span key={j}><span className={`font-semibold ${heading}`}>n8n</span></span>
                  )}</span>
            )}
          </p>
          <p className={`mt-4 text-[16px] leading-[30px] ${body}`}>{ab.bio2}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#contact" className="px-5 py-2.5 bg-yellow text-primary text-sm font-semibold rounded-xl hover:brightness-110 transition-all">
              {ab.cta1}
            </a>
            <a href="https://github.com/loembs" target="_blank" rel="noreferrer"
              className={`px-5 py-2.5 border text-sm rounded-xl transition-all ${
                isDark ? 'border-secondary/30 text-secondary hover:text-white hover:border-white/30' : 'border-gray-300 text-gray-600 hover:text-gray-900 hover:border-gray-400'
              }`}>
              {ab.cta2}
            </a>
          </div>
        </div>

        <div className="grid gap-3">
          {ab.traits.map((tr, i) => (
            <div key={i} className={`rounded-xl p-4 flex gap-3 border transition-colors ${card}`}>
              <span className="mt-1 min-w-2 w-2 h-2 rounded-full bg-yellow shrink-0" />
              <div>
                <p className={`text-sm font-semibold ${heading}`}>{tr.label}</p>
                <p className={`text-xs mt-0.5 ${body}`}>{tr.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="mt-16">
        <h3 className={`font-bold text-[20px] mb-8 ${heading}`}>{ab.skillsTitle}</h3>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ab.skillGroups.map((group, i) => (
            <div key={i} className={`rounded-2xl p-5 border transition-colors ${card}`}>
              <div className="mb-3 h-1 w-8 rounded-full bg-gradient-to-r from-yellow to-violet-500" />
              <p className={`text-[11px] font-semibold uppercase tracking-widest mb-3 ${label}`}>{group.category}</p>
              <div className="flex flex-wrap gap-2">
                {group.items.map(skill => (
                  <span key={skill} className={`text-[11px] font-medium px-2.5 py-1 rounded-full border ${pill}`}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Langs / Interests / Design */}
      <div className="mt-8 flex flex-wrap gap-5">
        <div className={`rounded-2xl p-5 flex-1 min-w-[180px] border transition-colors ${card}`}>
          <p className={`text-[11px] font-semibold uppercase tracking-widest mb-3 ${label}`}>{ab.langsLabel}</p>
          <p className={`text-sm ${heading}`}>Français <span className="text-yellow font-semibold">C2</span></p>
          <p className={`text-sm mt-1 ${heading}`}>Anglais <span className="text-yellow font-semibold">B2</span></p>
        </div>
        <div className={`rounded-2xl p-5 flex-1 min-w-[180px] border transition-colors ${card}`}>
          <p className={`text-[11px] font-semibold uppercase tracking-widest mb-3 ${label}`}>{ab.interestsLabel}</p>
          <div className="flex flex-wrap gap-2">
            {ab.interests.map(item => (
              <span key={item} className={`text-[11px] px-2.5 py-1 rounded-full ${pillSm}`}>{item}</span>
            ))}
          </div>
        </div>
        <div className={`rounded-2xl p-5 flex-1 min-w-[180px] border transition-colors ${card}`}>
          <p className={`text-[11px] font-semibold uppercase tracking-widest mb-3 ${label}`}>{ab.designLabel}</p>
          <div className="flex flex-wrap gap-2">
            {ab.designItems.map(tool => (
              <span key={tool} className={`text-[11px] px-2.5 py-1 rounded-full ${pillSm}`}>{tool}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
