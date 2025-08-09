import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { meStuffs } from "../constants";
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navbarRef = useRef(null);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show navbar at top of page
      if (currentScrollY <= 0) {
        setVisible(true);
        setLastScrollY(currentScrollY);
        return;
      }

      // Determine scroll direction
      const scrollingDown = currentScrollY > lastScrollY;

      if (scrollingDown && visible) {
        // Hide navbar if scrolling down and it's currently visible
        setVisible(false);
      } else if (!scrollingDown && !visible) {
        // Show navbar if scrolling up and it's currently hidden
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    const throttledScroll = throttle(handleScroll, 120);
    window.addEventListener('scroll', throttledScroll);

    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, [lastScrollY, visible]);

  // Simple throttle function
  function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function () {
      const context = this;
      const args = arguments;
      if (!lastRan) {
        func.apply(context, args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(function () {
          if ((Date.now() - lastRan) >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    };
  }



  return (
    <header
      ref={navbarRef}
      className={`fixed z-50 w-screen h-[15%] 2xl:h-[12%] flex flex-row pr-[4%] pl-[3%] justify-between align-middle items-center ${isHome
          ? 'bg-transparent' 
          : visible
            ? 'translate-y-0 bg-white shadow-sm'
            : '-translate-y-full bg-transparent'
        }`}
      id="nav"
    >
      {meStuffs.map((meStuff, index) => (
        <NavLink
          key={index}
          to="/"
          className="w-25 h-full rounded-lg flex items-center justify-center gap-2 py-7"
        >
          <img
            src={meStuff.imageLogoUrl}
            alt=""
            className="h-full object-cover"
          />
          <div className="p-3 mt-1 rounded-lg bg-white sm:block hidden">
            <p className="text-lg font-bold font-poppins blue-gradient_text">
              {meStuff.allias}
            </p>
          </div>
        </NavLink>
      ))}

      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          About
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Projects
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;