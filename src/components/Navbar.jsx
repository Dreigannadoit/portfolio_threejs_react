import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { meStuffs } from "../constants";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed z-50 w-screen h-[15%] 2xl:12% flex flex-row pr-[4%] pl-[3%] justify-between align-middle items-center ${
        isScrolled ? "scroll" : ""
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
