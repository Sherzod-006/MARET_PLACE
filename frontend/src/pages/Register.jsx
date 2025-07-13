import {Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import authService from '../features/auth/authService'

const Register = () => {
  const [errorData, setErrorData] = useState(false)

  const [formData, setFormData] = useState({
    username:'',
    email:'',
    password:''
  })

  const { username, email, password } = formData;
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]:e.target.value,
    }))
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      username, email, password
    }
    try {
      await authService.register(userData);
      navigate('/login')
    } catch (error) {
      console.log(error.response.data.message);
      setErrorData(true)
    }
  }

  return (
    <main className="
    lg:bg-[url(/src/assets/leaves-orange-background-with-copy-space.jpg)] 
    sm:bg-[url(/src/assets/copy-space-yellow-blue-cupboards.jpg)]
    bg-[url(/src/assets/abstract-luxury-gold-yellow-gradient-studio-wall-well-use-as-backgroundlayoutbanner-product-pres.jpg)]
    bg-cover bg-center h-screen
    ">
      <div className="container mx-auto py-2 flex justify-center sm:justify-start md:justify-end items-center p-2">
        <div className="flex items-center">
          <img src="./src/assets/Logo.png" alt="logo" className="md:h-30 h-15 pr-5" />
          <h1 className="text-blue-600 md:text-7xl sm:text-5xl text-3xl font-bold">
            <span class="bg-gradient-to-r from-blue-800 via-red-600 to-amber-500 sm:text-transparent bg-clip-text">Lion's</span> <span className="bg-gradient-to-r from-amber-500 via-red-600 to-blue-600 sm:text-transparent bg-clip-text">Company</span>
          </h1>
        </div>
      </div> 
      <div className={`border border-3 ${ errorData ? 'border-red-500' : ' border-white'} shadow-xl/30 w-130 fixed right-90 bottom-30 p-3 rounded-2xl`}>
        <h1 className="text-4xl font-mono font-bold text-white text-center">Register</h1>
        <form className="flex flex-col" onSubmit={onSubmit}>
          <label htmlFor="username" className="text-xl font-semibold text-cyan-700">UserName:</label>
          <input required type="text" name="username" placeholder="Your username..." className={`outline-none border ${ errorData ? 'border-red-500' : ' border-white'} border-2 rounded-md p-1 font-bold w-50`}
          onChange={onChange}/>
          <label htmlFor="email" className="text-xl font-semibold text-cyan-700">Email:</label>
          <input required type="email" name="email" placeholder="Write your email..." className={`outline-none border ${ errorData ? 'border-red-500' : ' border-white'} border-2 rounded-md p-1 font-bold w-65`}
          onChange={onChange}/>
          <label htmlFor="password" className="text-xl font-semibold text-cyan-700">Password:</label>
          <input required type="password" name="password" placeholder="Create a password..." className={`outline-none border ${ errorData ? 'border-red-500' : ' border-white'} border-2 rounded-md p-1 font-bold w-75`}
          onChange={onChange}/>
          <button type="submit" className="bg-cyan-600 text-2xl font-bold text-white rounded-3xl mt-3 py-1  hover:bg-amber-100 hover:text-cyan-600">SignUp</button>
        </form>
        <hr className="w-100 mx-auto border my-5 text-white" />
        <div className='flex text-sm'><p>Already have an Account?</p> <Link to="/login" className="text-cyan-700 font-bold">LogIn</Link></div>
      </div>  
    </main>
  )
}

export default Register
