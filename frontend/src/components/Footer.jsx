import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-4 mt-8">
      <div className="container mx-auto">
        <div className="flex justify-between">
        <div className='flex-col items-center hidden md:flex'>
          <h1 className='text-2xl font-semibold'>Our Supporters</h1>
          <div className='flex space-x-4 mt-2'>
            <a href="https://www.alibaba.com" target="_blank" rel="noopener noreferrer" className=''>
              <h1>Alibaba.com</h1>
            </a>
            <a href="https://www.uzum.com" target="_blank" rel="noopener noreferrer" className="">
              <h1>Uzum Market</h1>
            </a>
            <a href="https://www.aliexpress.com" target="_blank" rel="noopener noreferrer" className="">
              Ali Express
            </a>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <h1 className='text-2xl font-semibold'>Contact Details</h1>
          <div className='flex flex-col sm:flex-row sm:space-x-4 mt-2'>
            <a href="https://t.me/lion_o06" target="_blank" rel="noopener noreferrer" className=''>
              <h1>Telegram</h1>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="">
              <h1>Instagram</h1>
            </a>
            <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" className="">
                <h1>WhatsApp</h1>
            </a>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <h1 className='text-2xl font-semibold'>Our Socials</h1>
          <div className='flex space-x-4 mt-2'>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className=''>
              <img src="./src/assets/icons8-facebook-48.png" alt="" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="">
              <img src="./src/assets/icons8-twitter-48.png" className='' alt="" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="">
              <img src="./src/assets/icons8-instagram-48.png" alt="" />
            </a>
          </div>
        </div>
        </div>
        <p className="text-center">© 2023 Lion's Shop. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
