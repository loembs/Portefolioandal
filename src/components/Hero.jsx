import { useApp } from '../AppContext'

export default function Hero() {
  const { isDark, t } = useApp()
  const th = t.hero

  return (
    <section className={`relative w-full h-screen mx-auto overflow-hidden transition-colors duration-300 ${
      isDark
        ? 'bg-hero-pattern bg-cover bg-no-repeat bg-center'
        : 'bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50'
    }`}>
      {/* Overlay */}
      {isDark && <div className="absolute inset-0 bg-primary/60" />}
      {!isDark && (
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-indigo-100/20 to-purple-100/30" />
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-16 flex flex-col justify-center h-full pt-20">
        {/* Badge */}
        <p className={`inline-flex self-start items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium mb-6 border ${
          isDark
            ? 'bg-black-100/80 border-white/10 text-secondary'
            : 'bg-white/80 border-gray-200 text-indigo-700'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          {th.badge}
        </p>

        {/* Accent line + content */}
        <div className="flex items-start gap-5">
          <div className="flex flex-col items-center mt-2 shrink-0">
            <div className={`w-5 h-5 rounded-full border-4 ${isDark ? 'bg-yellow border-yellow/30' : 'bg-indigo-600 border-indigo-200'}`} />
            <div className={`w-1 h-36 ${isDark ? 'bg-gradient-to-b from-yellow via-violet-500 to-transparent' : 'bg-gradient-to-b from-indigo-600 via-purple-400 to-transparent'}`} />
          </div>

          <div>
            <h1 className={`font-extrabold text-[30px] xs:text-[40px] sm:text-[50px] md:text-[60px] leading-tight ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {th.greeting}{' '}
              <span className="yellow-text-gradient">Nat&apos;si POATHY</span>
            </h1>

            <p className={`mt-4 text-[15px] sm:text-[17px] max-w-2xl leading-[30px] ${
              isDark ? 'text-secondary' : 'text-gray-600'
            }`}>
              {th.bio}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-yellow text-primary font-semibold text-sm hover:brightness-110 transition-all shadow-card"
              >
                {th.cta1}
              </a>
              <a
                href="#contact"
                className={`px-6 py-3 rounded-xl border text-sm font-medium transition-all ${
                  isDark
                    ? 'border-secondary/40 text-white hover:border-yellow hover:text-yellow'
                    : 'border-gray-300 text-gray-700 hover:border-indigo-400 hover:text-indigo-700'
                }`}
              >
                {th.cta2}
              </a>
            </div>

            <div className={`mt-6 flex flex-wrap gap-4 text-xs ${isDark ? 'text-secondary' : 'text-gray-500'}`}>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                {th.available}
              </span>
              <span>· {th.location}</span>
              <a href="https://github.com/loembs" target="_blank" rel="noreferrer" className="hover:text-yellow transition-colors">
                github.com/loembs
              </a>
              <a href="mailto:patricknatsi.learning@gmail.com" className="hover:text-yellow transition-colors">
                patricknatsi.learning@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-xs ${
        isDark ? 'text-secondary' : 'text-gray-400'
      }`}>
        <span>{th.scroll}</span>
        <div className={`w-0.5 h-8 bg-gradient-to-b ${isDark ? 'from-secondary' : 'from-gray-400'} to-transparent`} />
      </div>
    </section>
  )
}
