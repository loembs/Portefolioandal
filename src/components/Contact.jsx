export default function Contact() {
  return (
    <section id='contact' className='max-w-4xl mx-auto px-6 py-16 text-center'>
      <h2 className='text-3xl font-bold mb-4'>Contact</h2>
      <p className='text-gray-600 mb-6'>Vous avez un projet ? Discutons-en ensemble !</p>
      <form className='grid grid-cols-1 gap-4 max-w-md mx-auto'>
        <input type='text' placeholder='Votre nom' className='p-3 border rounded-lg'/>
        <input type='email' placeholder='Votre email' className='p-3 border rounded-lg'/>
        <textarea placeholder='Votre message' rows='4' className='p-3 border rounded-lg'></textarea>
        <button type='button' className='bg-black text-white py-3 rounded-2xl'>Envoyer</button>
      </form>
    </section>
  )
}
