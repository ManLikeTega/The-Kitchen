import { useState } from "react";
import Logo from "./Logo";
import { navlinks } from "../data/data";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-black/95 md:bg-black/70 border-b border-white lg:border-0 lg:bg-gray-50/20 w-full py-4 px-10 lg:mt-4 absolute z-50  lg:w-[90%] lg:mx-auto lg:rounded-full shadow-lg left-1/2 transform -translate-x-1/2 overflow-hidden">
        <div className="flex items-center justify-between">
          <div>
            <Logo className="w-18 h-8" />
          </div>

          <ul className="hidden lg:flex gap-10">
            {navlinks.map((link, index) => (
              <li key={index} className="navlink_lg">
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          <button className="hidden lg:inline-block btn">
            <a href="#contact">Contact Us</a>
          </button>

          <button
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <RxHamburgerMenu className="text-2xl text-white" />
          </button>
        </div>

        {isMenuOpen && (
          <div className="mt-5 lg:hidden">
            <ul className="flex flex-col gap-5">
              {navlinks.map((link, index) => (
                <li key={index} className="navlink_sm">
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}

              <li>
                <a href="#contact" className="navlink_sm">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
