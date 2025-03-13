import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";
import lettera from '../assets/images/lettera.png'



const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/'>
        <img src={lettera} alt='logo' className='w-1/6 h-1/6 object-contain' />
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
