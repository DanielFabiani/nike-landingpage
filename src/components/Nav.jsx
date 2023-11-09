import { headerLogo } from "../assets/images";
import { close, hamburger } from "../assets/icons";
import { navLinks } from "../constants/index";
import { useState } from "react";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`padding-x py-8 absolute z-40 w-full transition-all duration-300 ease-in-out ${
        open ? "bg-white " : ""
      } `}
    >
      <nav className="flex justify-between items-center max-container">
        <a
          href="/"
          className="self-start"
        >
          <img
            src={headerLogo}
            alt="Logo"
            width={136}
            height={29}
          />
        </a>

        <div
          className="lg:hidden block self-start"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <img
              src={close}
              alt="menu"
              width={25}
              height={25}
            />
          ) : (
            <img
              src={hamburger}
              alt="menu"
              width={25}
              height={25}
            />
          )}
        </div>
      </nav>

      <ul
        className={`flex flex-col lg:flex-row  lg:-mt-5 lg:opacity-100 gap-16 mt-14 justify-end items-center transition-all duration-300 ease-in-out ${
          open ? "opacity-100" : "opacity-0"
        } 
          `}
      >
        {navLinks.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className=" font-montserrat leading-normal text-lg text-slate-gray "
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};
export default Nav;
