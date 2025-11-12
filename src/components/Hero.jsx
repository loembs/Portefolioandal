export default function Hero() {
  return (
    <section className='max-w-5xl mx-auto px-6 py-20 text-center'>
      <h1 className='text-4xl md:text-6xl font-extrabold'>Nat'si POATHY</h1>
      <p className='mt-3 text-lg text-gray-600'>Développeur Fullstack — React · Python · Java · Symfony</p>
      <div className='mt-6 flex justify-center gap-4'>
        <a href='#projects' className='px-5 py-3 bg-black text-white rounded-2xl'>Voir mes projets</a>
        <a href='#contact' className='px-5 py-3 border border-gray-300 rounded-2xl'>Contactez-moi</a>
      </div>
    </section>
  )
}
