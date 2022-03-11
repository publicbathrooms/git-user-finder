import { FaAllergies } from 'react-icons/fa'

function Footer() {
    const footerYear = new Date().getFullYear()

  return (
    <footer className='footer footer-center shadow-inner pt-5'>
    <div className='text-gray-600 mb-10'>
      <p className='text-yellow-600'>
      <FaAllergies className='inline pr-2 text-3xl text-purple-400 icon-flip mr-2' /> 
       Copyright &copy; {footerYear} Alright Websites. All rights, baby. </p>
   </div>
  </footer>
  )
}

export default Footer