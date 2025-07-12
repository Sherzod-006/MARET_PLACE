import {useState} from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCartShopping, faUser, faBars, faRightToBracket } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  const [ Logged, setLogged ] = useState(false);
  return (
    <div className='bg-primary'>
      <div className="container mx-auto py-2 flex justify-between items-center p-2">
        <Link to="/" className="flex items-center">
          <img src="./src/assets/Logo.png" alt="logo" className="h-12" />
          <h1 className="text-3xl font-bold hidden sm:block">
            <span className='text-secondary'>Lion's</span> Shop
          </h1>
        </Link>
        <form className='flex'>
          <input 
          type="text" 
          placeholder="Search for products..." 
          className="text-secondary px-2 md:py-2 md:px-4 bold  rounded-tl-3xl rounded-bl-3xl border focus:outline-none"
          />
          <button 
          type='submit' 
          className="bg-tertiary text-white px-2 md:px-4 md:py-2 rounded-tr-2xl rounded-br-2xl border
          ">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
        <nav className="hidden md:block">
          <ul className="flex space-x-5">
            <li className={` ${Logged ? 'block' : 'hidden'}`} >
              <Link to="/cart" className="text-white hover:text-secondary text-lg">
              <FontAwesomeIcon icon={faCartShopping} />
              </Link>
            </li>
            <li className={` ${Logged ? 'block' : 'hidden'}`} >
              <Link to="/profile" className="text-white hover:text-secondary text-lg">
                <FontAwesomeIcon icon={faUser} />
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-secondary text-lg">About Us</Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-secondary text-lg">Contact</Link>
            </li>
            <li>
            <Link to="/login">
              <button className={` ${Logged ? 'hidden' : 'block'} text-white cursor-pointer hover:text-secondary bg-amber-600 px-3 py-1 rounded-xl`}>
                <FontAwesomeIcon icon={faRightToBracket} /> LogIn
              </button>
          </Link>
            </li>
          </ul>
        </nav>
        <div className="md:hidden">
          <button className='text-xl cursor-pointer'>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
