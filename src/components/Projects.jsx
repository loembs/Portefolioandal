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
  },
  {
    id: 6,
    title: 'Green_workspace',
    description: 'Tableau de bord interne / gestion de flotte.',
    tech: ['React', 'Vite', 'PostgreSQL','supabase'],
    link: 'https://greenmobility-workflow.vercel.app',
    image: 'https://res.cloudinary.com/dlna2kuo1/image/upload/v1764164995/greenmobility_01_bto4i7.png'
  }



]

const projectsIA = [
  {
    id: 6,
    title: 'Calendly Block',
    description: 'Connectez votre calendrier pour gérer les événements, bloquer votre travail et prendre des notes de réunion, grâce à l’IA ',
    tech: ['n8n'],
    link: 'https://studio-hub-5vlw.vercel.app',
    image: 'https://res.cloudinary.com/dlna2kuo1/image/upload/v1763941590/ia01_kpqtnq.png'
  },
  {
    id: 7,
    title: 'Organisation de tâches',
    description: 'Connecter vos applications ,vous pourrez poser des questions au chatbot sur tout ce qui se trouve dans vos applications connectées.',
    tech: ['n8n'],
    link: 'https://studio-hub-5vlw.vercel.app',
    image: 'https://res.cloudinary.com/dlna2kuo1/image/upload/v1763941590/ia02_wqbvqv.png'
  }
]

export default function Projects() {
  return (
    <section id='projects' className='max-w-6xl mx-auto px-6 py-16'>
      <h2 className='text-3xl font-bold mb-8 text-center'>Mes Projets</h2>
      <h3 className='text-3xl font-bold mb-8 text-center'>Developpement Web</h3>
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
      <br />
      <h3 className='text-3xl font-bold mb-8 text-center'>Automatisation des tâches grâce à l'IA</h3>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {projectsIA.map(p => (
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
