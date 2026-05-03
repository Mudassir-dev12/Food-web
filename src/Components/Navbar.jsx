import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { FaCartPlus } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { CiLogin, CiLogout } from "react-icons/ci";
import { FoodContext } from "../Context/FoodContext";

const Navbar = () => {
  const { CartItem, toggleCartPanel } = useContext(FoodContext);
  const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();
  const [isPanelOpen, setisPanelOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const togglePanel = () => {
    setisPanelOpen((prev) => !prev);
  };

  const toggleBtn = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }

    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div>
      <div
        className={`navbar w-[100vw]  px-6 h-[80px] fixed top-0 flex items-center justify-between transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className='Web_name text-[5.5vw] text-[#cc9917]'>
          <h1>TurboTastes</h1>
        </div>
        <ul className='hidden text-[2.4vw] text-[#cc9917] md:flex gap-14'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/mainpages/foodspage'>Foods</Link>
          </li>
          <li>
            <Link to='/mainpages/aboutpage'>About</Link>
          </li>
          <li>
            <Link to='/mainpages/contactpage'>Contact</Link>
          </li>
        </ul>
        <div className='nav_icons cursor-pointer flex items-center gap-7'>
          <div className='cart pb-[15px] text-[#CB082B] '>
            <button onClick={toggleCartPanel}>
              <sub className='text-black size-[20px] relative top-3 right-5 font-extrabold bg-white px-[7px] py-[2px] rounded-full'>
                {CartItem.length}
              </sub>
              <FaCartPlus className='text-[40px]' />
            </button>
          </div>
          <div className='text-white text-[40px] mt-5'>
            <button onClick={togglePanel}>
              <IoPersonCircleOutline />
            </button>
            {isPanelOpen && (
              <div className='log_panel w-auto text-white text-[20px] p-3 h-auto rounded-xl absolute  right-0 mr-[2vw] bg-zinc-700'>
                {isAuthenticated ? (
                  <div>
                    <div className='flex text-[20px] items-center gap-2'>
                      <img
                        className='size-[33px] rounded-full'
                        src={user.picture}
                      />
                      <h1>{user.name}</h1>
                    </div>
                    <button
                      className='flex items-center text-[20px] pt-3 gap-4'
                      onClick={() =>
                        logout({
                          logoutParams: { returnTo: window.location.origin },
                        })
                      }
                    >
                      <CiLogout />
                      <p>Log Out</p>
                    </button>
                  </div>
                ) : (
                  <button
                    className='flex text-[20px] w-full items-center gap-4'
                    onClick={() => loginWithRedirect()}
                  >
                    <CiLogin />
                    <p>Log In</p>
                  </button>
                )}
              </div>
            )}
          </div>
          <button
            className='md:hidden pt-[8px] text-[#CB082B] '
            onClick={toggleBtn}
          >
            <FiAlignJustify className='size-[40px]' />
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={`md:hidden z-[1000] fixed top-0 text-[40px] left-0 w-full h-full flex items-center justify-center bg-slate-800 transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <button
          onClick={toggleBtn}
          className='absolute top-4 text-red-600 right-4'
        >
          <RxCross2 />
        </button>
        <ul className='text-white space-y-4'>
          <li>
            <Link to='/' onClick={toggleBtn}>
              Home
            </Link>
          </li>
          <li>
            <Link to='/mainpages/foodspage' onClick={toggleBtn}>
              Foods
            </Link>
          </li>
          <li>
            <Link to='/mainpages/aboutpage' onClick={toggleBtn}>
              About
            </Link>
          </li>
          <li>
            <Link to='/mainpages/contactpage' onClick={toggleBtn}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
