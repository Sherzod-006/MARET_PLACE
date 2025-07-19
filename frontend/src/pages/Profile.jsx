import React from 'react'

const Profile = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  //-----------------------------STYLES
  const titleStyle = 'text-md md:text-2xl font-bold text-primary'

    // ----------------------------STYLES:

  const labelStyle = "text-xl font-semibold text-cyan-700"
  const inputStyle = `outline-none border border-amber-500 border-2 rounded-md p-1 font-bold`
  const mainBoxStyle = `border-3 border-gray-200 shadow-xl/30 w-80 sm:w-130 p-3 rounded-2xl`
  const buttonStyle = "bg-cyan-600 text-2xl font-bold text-white rounded-3xl mt-3 py-1  hover:bg-amber-100 hover:text-cyan-600"
    //-------------------------------------COMPONENTS
  const input = (type, username, placeholder, w) => {
    return <input required type={type} name={username} placeholder={placeholder} className={`${inputStyle} ${w}`} />}
  const label = (use, text) => {
    return <label htmlFor={use} className={labelStyle}>{text}</label>}

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
        <main className='flex mt-15'>
          <section className='mr-5'>
            <div className={mainBoxStyle}>
              <h1 className="text-4xl font-mono font-bold text-center">Fill out your Account</h1>
              <form className="flex flex-col">
                {label('username', 'UserName')}
                {input('text', 'username', 'Write your name...', 'sm:w-50')}
                {label('email', 'Email')}
                {input('email', 'email', 'Write your email...', 'sm:w-65')}
                {label('password', 'Password')}
                {input('password', 'password', 'Create a password...', 'sm:w-75')}
                <button type="submit" className={buttonStyle}>SignUp</button>
              </form>
           </div>
          </section>
          <section className='ml-5'>
            <div className={mainBoxStyle}>
              <h1 className="text-4xl font-mono font-bold text-center">-OR-</h1>
              <h1 
              className='text-6xl font-serif font-bold text-center mt-10 text-[#317039]'>
                Become a Seller
              </h1>
              <button className='bg-cyan-600 text-2xl font-bold text-white rounded-3xl mt-10 py-1  hover:bg-amber-100 hover:text-cyan-600 w-full'>Let's Go</button>
           </div>
          </section>
        </main>
      </div>
    </main>
  )
}

export default Profile
