import React from 'react'

const Profile = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  //-----------------------------STYLES
  const titleStyle = 'text-md md:text-2xl font-bold text-primary'
  return (
    <main>
      <div className="customContainer flex-col">
        <header className='mx-auto md:mt-10 sm:mt-5 mt-2'>
          <h1 className='capitalize font-bold text-2
          xl sm:text-3xl md:text-6xl text-[#317039]'>
            Welcome {user.username}!!!
          </h1>
          <img src="/src/assets/me.jpg" alt="" className='md:h-50 sm:h-35 h-25 rounded-full border-4 border-[#317039] mx-auto md:mt-5 mt-2' />
        </header>
        <section className=''>
          <h1 className={titleStyle}>Your ID: <span className='text-black'>{user._id}</span></h1>
          <h1 className={titleStyle}>Your Email: <span className='text-black'>{user.email}</span></h1>
        </section>
      </div>
    </main>
  )
}

export default Profile
