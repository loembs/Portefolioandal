import { useState } from 'react'
import { useApp } from '../AppContext'

const WHATSAPP_NUMBER = '221772083075'

export default function Contact() {
  const { isDark, t } = useApp()
  const co = t.contact

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = `Bonjour Nat'si,%0A%0A*Nom :* ${form.name}%0A*Email :* ${form.email}%0A*Sujet :* ${form.subject}%0A%0A${form.message}`
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank')
  }

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
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className={`text-xs font-semibold uppercase tracking-widest ${label}`}>{co.form.nameLabel}</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} placeholder={co.form.namePlaceholder} required
                  className={`border rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 transition-all ${input}`} />
              </div>
              <div className="flex flex-col gap-2">
                <label className={`text-xs font-semibold uppercase tracking-widest ${label}`}>{co.form.emailLabel}</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder={co.form.emailPlaceholder} required
                  className={`border rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 transition-all ${input}`} />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className={`text-xs font-semibold uppercase tracking-widest ${label}`}>{co.form.subjectLabel}</label>
              <input type="text" name="subject" value={form.subject} onChange={handleChange} placeholder={co.form.subjectPlaceholder} required
                className={`border rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 transition-all ${input}`} />
            </div>

            <div className="flex flex-col gap-2">
              <label className={`text-xs font-semibold uppercase tracking-widest ${label}`}>{co.form.messageLabel}</label>
              <textarea rows={5} name="message" value={form.message} onChange={handleChange} placeholder={co.form.messagePlaceholder} required
                className={`border rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 transition-all resize-none ${input}`} />
            </div>

            <button type="submit"
              className="mt-2 py-3 bg-yellow text-primary font-bold text-sm rounded-xl hover:brightness-110 transition-all shadow-card flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {co.form.submit}
            </button>
          </form>
        </div>
      </div>
      {/* Back-to-top arrow */}
      <div className="mt-16 flex justify-center">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Retour en haut"
          className={`w-10 h-10 rounded-full flex items-center justify-center border animate-bounce transition-colors ${
            isDark
              ? 'bg-black-100/80 border-white/10 text-secondary hover:text-yellow hover:border-yellow/40'
              : 'bg-white/80 border-gray-200 text-gray-400 hover:text-indigo-600 hover:border-indigo-300'
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
    </section>
  )
}
