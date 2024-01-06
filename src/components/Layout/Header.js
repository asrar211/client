import { Link } from "react-router-dom";
import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { CiLogin, CiLogout } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useAuth } from "../../context/auth"; 
import toast from "react-hot-toast"

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
   const [auth, setAuth] = useAuth();

   const handleLogout = () => {
    setAuth({
      ...auth, user:null,token:''
    })
    localStorage.removeItem('auth');
    toast.success("Logout Successfully");
   }

    const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='px-4 py-3 bg-slate-200 shadow-lg'>
      <div className='max-w-7xl mx-auto flex items-center justify-between'>
       <Link to='/'> <h1 className='text-2xl font-bold text-slate-900'><b>AMAFHH-</b>eStore</h1></Link>

        {/* Mobile Menu (Hamburger icon) */}
        <div className='md:hidden cursor-pointer mr-5' onClick={toggleMenu}>
          <div className={`ham ${showMenu ? 'open' : ''}`}>
            <div className="bg-slate-900 w-[20px] h-[3px] mb-1"></div>
            <div className="bg-slate-900 w-[20px] h-[3px] mb-1"></div>
            <div className="bg-slate-900 w-[20px] h-[3px]"></div>
          </div>
        </div>

        {/* Regular navigation bar */}
        <div className='hidden md:flex md:gap-6'>
          {/* Navigation Links */}
          <ul className='flex gap-6'>
            <Link to="/"><li>Home</li></Link>
            <Link to="/get-products"><li>Products</li></Link>
            <Link to="/contact"><li>Contact</li></Link>
            <Link to="/cart" className="float-right mt-1"><li><FaCartShopping size={20} /></li></Link>
          </ul>

          {!auth.user ? (
            <ul className='flex gap-6'>
            <Link to="/login" className="float-right "><li><CiLogin size={25}/></li></Link>
          </ul>
          ) : (
            <ul className='flex gap-6'>
               <Link  to={`/dashboard/${auth?.user?.role === 1 ? 'admin' : 'user'}`} className="float-right "><li><CgProfile size={25}/></li></Link>
            <Link onClick={handleLogout} to="/login" className="float-right "><li><CiLogout size={25}/></li></Link>
          </ul>
          ) }
        </div>
      </div>

      {/* Mobile menu within the existing navigation bar */}
      <div className={`mobile-menu ${showMenu ? 'open' : ''}`}>
        {showMenu && (
          <div className='md:hidden bg-gray-200 w-full py-2'>
           <Link to="/cart" className="float-right mt-2 mx-5"><FaCartShopping size={20} /></Link>
         {!auth.user ?(
          <Link to="/login" className="float-right mt-1"><CiLogin size={25}/></Link>
         ): (
          <ul>
            <li> <Link onClick={handleLogout} to="/login" className="float-right mt-1 ml-2"><CiLogout size={25}/></Link></li>
            <li><Link  to={`/dashboard/${auth?.user?.role === 1 ? 'admin' : 'user'}`} className="float-right mt-1"><li><CgProfile size={25}/></li></Link></li>
          </ul>
         )}
           
            <ul className='flex flex-col gap-4'>
              <Link to="/"><li>Home</li></Link>
              <Link to="/get-products"><li>Products</li></Link>
              <Link to="/contact"><li>Contact</li></Link>
            </ul>
            <div className="flex justify-center items-center gap-4">
            <a href=""><FaFacebook size={25} /> </a>
            <a href=""><FaInstagram size={25} /></a>
            <a href=""><FaWhatsapp size={25} /></a>
            </div>
            <div className="text-sm text-center mt-4">
            <p>&copy; 2023 KDevelopers. All Rights Reserved.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header;
