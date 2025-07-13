import {Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import authService from '../features/auth/authService'
import Notification from '../components/Notification'

const Register = () => {

  //------------------------------------LOGIC
  const [errorData, setErrorData] = useState('')
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
      setErrorData(error.response.data.message)
    }
  }
  // ----------------------------STYLES:
  const logSpanStyle1 = "bg-gradient-to-r from-blue-800 via-red-600 to-amber-500 sm:text-transparent bg-clip-text"
  const logSpanStyle2 = "bg-gradient-to-r from-amber-500 via-red-600 to-blue-600 sm:text-transparent bg-clip-text"
  const customConStyle = "customContainer py-2 justify-center sm:justify-start md:justify-end p-2"
  const labelStyle = "text-xl font-semibold text-cyan-700"
  const inputStyle = `outline-none border ${ errorData ? 'border-red-500' : ' border-white'} border-2 rounded-md p-1 font-bold`
  const mainBoxStyle = `border-3 ${ errorData ? 'border-red-500' : ' border-white'} shadow-xl/30 w-130 fixed right-90 bottom-30 p-3 rounded-2xl`
  const buttonStyle = "bg-cyan-600 text-2xl font-bold text-white rounded-3xl mt-3 py-1  hover:bg-amber-100 hover:text-cyan-600"

  //-------------------------------------COMPONENTS
  const input = (type, username, placeholder, w) => {
    return <input required type={type} name={username} placeholder={placeholder} className={`${inputStyle} ${w}`} onChange={onChange}/>
  }
  const label = (use, text) => {
    return <label htmlFor={use} className={labelStyle}>{text}</label>
  }

  //--------------------------------------MAIN
  return (
    <main className="
    lg:bg-[url(/src/assets/pc.jpg)] 
    sm:bg-[url(/src/assets/tablet.jpg)]
    bg-[url(/src/assets/phone.jpg)]
    bg-cover bg-center h-screen
    ">
      <div className={customConStyle}>
        <div className="flex items-center">
          <img src="./src/assets/Logo.png" alt="logo" className="md:h-30 h-15 pr-5" />
          <h1 className="text-blue-600 md:text-7xl sm:text-5xl text-3xl font-bold">
            <span class={logSpanStyle1}>Lion's</span> <span className={logSpanStyle2}>Company</span>
          </h1>
        </div>
      </div> 
      <div className={mainBoxStyle}>
        <h1 className="text-4xl font-mono font-bold text-white text-center">Register</h1>
        <form className="flex flex-col" onSubmit={onSubmit}>
          {label('username', 'UserName')}
          {input('text', 'username', 'Write your name...', 'w-50')}
          {label('email', 'Email')}
          {input('email', 'email', 'Write your email...', 'w-65')}
          {label('password', 'Password')}
          {input('password', 'password', 'Create a password...', 'w-75')}
          <button type="submit" className={buttonStyle}>SignUp</button>
        </form>
        <hr className="w-100 mx-auto border my-5 text-white" />
        <div className='flex text-sm  font-bold'><p>Already have an Account?</p> <Link to="/login"   className="text-cyan-700">LogIn</Link>
        </div>
      </div>
      <Notification message={errorData}/>
    </main>
  )
}

export default Register
