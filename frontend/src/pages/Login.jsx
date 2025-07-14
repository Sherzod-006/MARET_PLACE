import {Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import authService from '../features/auth/authService'
import Notification from '../components/Notification'
import RegisterTemplate from '../components/RegisterTemplate';

const Login = () => {

 //------------------------------------LOGIC
  const [errorData, setErrorData] = useState('')
  const [formData, setFormData] = useState({
    username:'',
    email:'',
    password:''
  })
  const { email, password } = formData;
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
      email, password
    }
    try {
      await authService.login(userData);
      navigate('/')
    } catch (error) {
      setErrorData(error.response.data.message)
    }
  }
  // ----------------------------STYLES:

  const labelStyle = "text-xl font-semibold text-cyan-700"
  const inputStyle = `outline-none border ${ errorData ? 'border-red-500' : ' border-white'} border-2 rounded-md p-1 font-bold`
  const mainBoxStyle = `border-3 ${ errorData ? 'border-red-500' : ' border-white'} shadow-xl/30 w-80 sm:w-130 fixed  right-1/10 sm:right-30 md:right-50 bottom-50 p-3 rounded-2xl`
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
    <>
      <RegisterTemplate/>
      <div className={mainBoxStyle}>
        <h1 className="text-4xl font-mono font-bold text-white text-center">Login</h1>
        <form className="flex flex-col" onSubmit={onSubmit}>
          {label('email', 'Email')}
          {input('email', 'email', 'Write your email...', 'sm:w-65')}
          {label('password', 'Password')}
          {input('password', 'password', 'Create a password...', 'sm:w-75')}
          <button type="submit" className={buttonStyle}>LogIn</button>
        </form>
        <hr className="md:w-100 mx-auto border my-5 text-white" />
        <div className='flex text-sm  font-bold'><p>Do not have an Account?</p> <Link to="/register"   className="text-cyan-700">SigUp</Link>
        </div>
      </div>
      <Notification message={errorData}/>
    </>
  )
}

export default Login
