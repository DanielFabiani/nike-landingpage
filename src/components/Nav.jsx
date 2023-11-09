import { headerLogo } from "../assets/images";
import { close, hamburger } from "../assets/icons";
import { navLinks } from "../constants/index";
import { useState } from "react";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="Logo"
            width={136}
            height={29}
          />
        </a>
        <ul
          className={`flex-1 flex justify-center items-center gap-16 max-lg:hidden`}
        >
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div
          className="hidden max-lg:block"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <img
              src={hamburger}
              alt="menu"
              width={25}
              height={25}
            />
          ) : (
            <img
              src={close}
              alt="menu"
              width={25}
              height={25}
            />
          )}
        </div>
      </nav>
    </header>
  );
};
export default Nav;
