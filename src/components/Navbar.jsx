import { NavLink } from "react-router-dom";
import { meStuffs } from "../constants";

const Navbar = () => {
  return (
    <header className="fixed z-50 w-screen h-[15%] bg-sky-500/[0] flex flex-row pr-[7%] pl-[7%] justify-between align-middle items-center" id="nav">
      {meStuffs.map((meStuff, index) => (
        <NavLink key={index} to="/" className="w-25 h-full rounded-lg flex items-center justify-center gap-2 p-7">
          <img src={meStuff.imageLogoUrl} alt="" className="h-full object-cover" />
          <div className="p-3 mt-1 rounded-lg bg-white sm:block hidden">
            <p className="text-lg font-bold font-poppins blue-gradient_text">{meStuff.allias}</p>
          </div>
        </NavLink>
      ))}

      <nav className="flex text-lg gap-7 font-medium">
        <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-500' :  'text-black'}>
          About
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-blue-500' :  'text-black'}>
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;