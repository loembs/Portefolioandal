const projects = [
  {
    id: 1,
    title: 'Art & culture ethiopienne',
    description: 'Site E-commerce .',
    tech: ['React', 'Tailwind', 'Springboot'],
    link: 'https://www.geezacultures.com',
    image: 'https://res.cloudinary.com/dlna2kuo1/image/upload/v1762950174/site1_bkgifd.png'
  },
  {
    id: 2,
    title: 'ANDAL CREATIVE',
    description: 'Site professionnel pour une agence de création.',
    tech: ['Spring Boot', 'PostgreSQL', 'React js'],
    link: 'https://www.andalcreative.com',
    image: 'https://res.cloudinary.com/dlna2kuo1/image/upload/v1762950174/site2_shp2pt.png'
  },
  {
    id: 3,
    title: 'Apple Store',
    description: 'Site e-commerce de produits Apple.',
    tech: ['React', 'Node.js', 'MongoDB'],
    link: 'https://apple-store-hazel.vercel.app',
    image: 'https://res.cloudinary.com/dlna2kuo1/image/upload/v1762950174/site3_ajibvs.png'
  },
  {
    id: 4,
    title: 'Loumo Store',
    description: 'Site e-commerce de vente de vêtements et acessoires .',
    tech: ['React', 'Java', 'MongoDB'],
    link: 'https://loumo-frontend-kd7v.vercel.app',
    image: 'https://res.cloudinary.com/dlna2kuo1/image/upload/v1762950178/site4_k1gutg.png'
  },
  {
    id: 5,
    title: 'Studio Hub',
    description: 'plateforme de gestion de projet , rendez-vous , facturation en temps reel .',
    tech: ['Angular', 'Java', 'PostgreSQL','supabase'],
    link: 'https://studio-hub-5vlw.vercel.app',
    image: 'https://res.cloudinary.com/dlna2kuo1/image/upload/v1762950172/site5_hggj27.png'
  }


]

export default function Projects() {
  return (
    <section id='projects' className='max-w-6xl mx-auto px-6 py-16'>
      <h2 className='text-3xl font-bold mb-8 text-center'>Mes Projets</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {projects.map(p => (
          <a key={p.id} href={p.link} target='_blank' rel='noreferrer' className='block bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden'>
            <img src={p.image} alt={p.title} className='w-full h-48 object-cover'/>
            <div className='p-4'>
              <h3 className='font-semibold text-lg'>{p.title}</h3>
              <p className='text-sm text-gray-600 mt-1'>{p.description}</p>
              <div className='mt-2 flex flex-wrap gap-2 text-xs'>
                {p.tech.map(t => <span key={t} className='px-2 py-1 border rounded-full'>{t}</span>)}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
