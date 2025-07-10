import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  return (
    <div className='bg-primary'>
      <div className="container mx-auto py-2 flex justify-between items-center">
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
        <nav>
          <ul className="flex space-x-5">
            <li>
              <Link to="/cart" className="text-white hover:text-secondary text-lg">
              <FontAwesomeIcon icon={faCartShopping} />
              </Link>
            </li>
            <li>
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
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
