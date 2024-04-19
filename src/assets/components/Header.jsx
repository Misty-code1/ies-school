import { useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import Logo from "../images/ieslogo.png";

const Header = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Mission", link: "/mission" },
    { name: "Admissions", link: "/admission" },
    { name: "Contact Us", link: "/contact" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-2 md:px-24 px-7">
        {/* logo section */}
        <div className=" cursor-pointer flex items-center gap-1">
          <img src={Logo} className="w-16 text-blue-600" />
          <div>
            <p className="mb-0 pb-0 font-bold text-lg md:text-3xl tracking-wider">
              IVAN ELITE
            </p>
            <span className="text-red-700 text-md font-medium ">Nurturing Success</span>
          </div>
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7 text-green-900"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* linke items */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 md:my-0 my-7 font-semibold">
              <Link
                to={link.link}
                className="text-gray-800 hover:text-green-700 duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* button */}
      </div>
    </div>
  );
};

export default Header;
