import React, { useEffect, useState } from "react";
import logo from "../assets/icon_logosvg.svg";
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const itemNavbars = [
    { link: "Home", path: "#home" },
    { link: "Service", path: "#service" },
    { link: "Feature", path: "#feature" },
    { link: "Product", path: "#product" },
    { link: "Testimonial", path: "#testimonial" },
    { link: "FAQ", path: "#faq" },
  ];

  return (
    <header className="w-full bg-neutralSilver md:bg-transparent fixed top-0 left-0 right-0 z-50">
      <nav
        className={`py-4 lg:px-4 ${
          isSticky
            ? "sticky top-0 right-0 left-0 border-b bg-white duration-300"
            : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center text-2xl font-semibold space-x-3"
          >
            <img
              src={logo}
              alt="logo"
              className="w-10 inline-block items-center"
            />
            <span className="uppercase text-[#263238]">Nexcent</span>
          </a>

          {/* Nav item for large devices */}
          <ul className="md:flex space-x-12 hidden">
            {itemNavbars.map((item, index) => (
              <li
                key={index}
                className="text-base text-textGray900 hover:text-brandPrimary"
              >
                <a href={item.path} className="block">
                  {item.link}
                </a>
              </li>
            ))}
          </ul>

          {/* btn login */}
          <div className="space-x-12 hidden lg:flex items-center">
            <a
              href="#"
              className="hidden lg:flex items-center text-brandPrimary hover:text-textGray900"
            >
              Login
            </a>
            <button className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded shadow">
              Sign up
            </button>
          </div>

          {/* Menu button for mobile */}
          <div className="md:hidden">
            <button
              className="text-neutralLGrey focus:outline-none focus:text-gray-500 px-2"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay + Slide-in menu */}
      {isMenuOpen && (
        <div>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
            onClick={() => setIsMenuOpen(false)}
          ></div>

          {/* Menu */}
          <div
            className={`fixed top-0 right-0 h-screen w-2/3 bg-white shadow-lg transform ${
              isMenuOpen
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            } transition-transform duration-500 ease-in-out z-50`}
          >
            {/* Close button */}
            <div className="flex justify-end p-4">
              <button
                className="text-neutralLGrey text-2xl"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaXmark />
              </button>
            </div>

            {/* Menu items */}
            <ul className="flex flex-col items-start px-6 space-y-4">
              {itemNavbars.map((item, index) => (
                <li
                  key={index}
                  className="text-base text-textGray900 hover:text-brandPrimary"
                >
                  <a
                    href={item.path}
                    className="block"
                    onClick={() => setIsMenuOpen(false)} // Đóng menu khi click vào item
                  >
                    {item.link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
