import Link from 'next/link'

function Footer ({ user, loading }) {
  return (
    <footer className='bg-gray-400 self-end w-full bottom-0'>
      <nav className='container flex items-center justify-center flex-wrap  py-2'>
        <div id='Brand' className='text-base justify-center text-black-600'>
          Copyright 2020 Univeristy of Auckland 
        </div>
      </nav>

    </footer>
    
  )
}

export default Footer
