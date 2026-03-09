import { useApp } from '../AppContext'

export default function Contact() {
  const { isDark, t } = useApp()
  const co = t.contact

  const card = isDark
    ? 'bg-black-100 border-white/5 shadow-card'
    : 'bg-white border-gray-200 shadow-md'
  const label = isDark ? 'text-secondary' : 'text-indigo-600'
  const heading = isDark ? 'text-white' : 'text-gray-900'
  const body = isDark ? 'text-secondary' : 'text-gray-600'
  const input = isDark
    ? 'bg-tertiary border-white/10 text-white placeholder:text-secondary focus:border-yellow/50 focus:ring-yellow/20'
    : 'bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-indigo-400 focus:ring-indigo-100'
  const iconBtn = isDark
    ? 'bg-tertiary border-white/10 hover:border-yellow/40'
    : 'bg-gray-100 border-gray-200 hover:border-indigo-300'

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 sm:px-16 py-20">
      <div>
        <p className={`text-sm font-medium uppercase tracking-widest ${label}`}>{co.label}</p>
        <h2 className={`mt-2 font-black text-[30px] sm:text-[40px] md:text-[48px] leading-tight ${heading}`}>{co.title}</h2>
      </div>

      <div className="mt-12 grid gap-10 md:grid-cols-[1fr,1.1fr] items-start">
        {/* Left — info */}
        <div>
          <p className={`text-[16px] leading-[30px] ${body}`}>{co.bio}</p>

          <div className="mt-8 space-y-5">
            <a href="mailto:patricknatsi.learning@gmail.com" className="flex items-center gap-4 group">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-colors ${iconBtn}`}>
                <svg className="w-4 h-4 text-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className={`text-sm transition-colors group-hover:text-yellow ${body}`}>
                patricknatsi.learning@gmail.com
              </span>
            </a>

            <a href="tel:+221772083075" className="flex items-center gap-4 group">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-colors ${iconBtn}`}>
                <svg className="w-4 h-4 text-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span className={`text-sm transition-colors group-hover:text-yellow ${body}`}>+221 77 208 30 75</span>
            </a>

            <a href="https://github.com/loembs" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-colors ${iconBtn}`}>
                <svg className="w-4 h-4 text-yellow" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.867 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.867-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.031 1.531 1.031.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </div>
              <span className={`text-sm transition-colors group-hover:text-yellow ${body}`}>github.com/loembs</span>
            </a>
          </div>

          <div className={`mt-10 p-5 rounded-2xl border transition-colors ${card}`}>
            <p className={`text-xs uppercase tracking-widest font-semibold mb-2 ${label}`}>{co.availabilityLabel}</p>
            <p className={`text-sm leading-relaxed ${heading}`}>
              <span className="inline-block w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse" />
              {co.availabilityText}
            </p>
          </div>
        </div>

        {/* Right — form */}
        <div className={`rounded-3xl p-7 border transition-colors ${card}`}>
          <form className="flex flex-col gap-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className={`text-xs font-semibold uppercase tracking-widest ${label}`}>{co.form.nameLabel}</label>
                <input type="text" placeholder={co.form.namePlaceholder}
                  className={`border rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 transition-all ${input}`} />
              </div>
              <div className="flex flex-col gap-2">
                <label className={`text-xs font-semibold uppercase tracking-widest ${label}`}>{co.form.emailLabel}</label>
                <input type="email" placeholder={co.form.emailPlaceholder}
                  className={`border rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 transition-all ${input}`} />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className={`text-xs font-semibold uppercase tracking-widest ${label}`}>{co.form.subjectLabel}</label>
              <input type="text" placeholder={co.form.subjectPlaceholder}
                className={`border rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 transition-all ${input}`} />
            </div>

            <div className="flex flex-col gap-2">
              <label className={`text-xs font-semibold uppercase tracking-widest ${label}`}>{co.form.messageLabel}</label>
              <textarea rows={5} placeholder={co.form.messagePlaceholder}
                className={`border rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 transition-all resize-none ${input}`} />
            </div>

            <button type="button"
              className="mt-2 py-3 bg-yellow text-primary font-bold text-sm rounded-xl hover:brightness-110 transition-all shadow-card">
              {co.form.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
