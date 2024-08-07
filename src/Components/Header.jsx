import { NavLink } from "react-router-dom";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import logo from "../assets/dmi.svg";
const Header = () => {
  const { scrollY } = useScroll();
  const [hidden, sethidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    latest > previous && latest > 150 ? sethidden(true) : sethidden(false);
  });

  const activeLink = ({ isActive }) =>
    isActive
      ? " text-gray-800 font-medium rounded-md px-3 py-2 font-300 text-sm "
      : "text-black  hover:text-red-300 rounded-md px-3 py-2 text-sm";

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="sticky top-0 bg-white border-b border-indigo-50 h-20 flex justify-center items-center shadow-sm mb-4"
    >
      <div className="container mx-auto w-full max-w-7xl px-8 sm:px-4 lg:px-8">
        <div className="flex h-20 items-center justify-center ">
          <div className="flex flex-1 items-center justify-between md:items-stretch md:justify-start ">
            <NavLink to="/" className="flex justify-between items-center">
              <img
                className="h-6 w-auto"
                src={logo}
                alt="Dubai Maths Institute"
              />
              <span className="font-medium text-lg">Dubai Maths Insitute</span>
            </NavLink>

            {/* Center Navigation */}
            <nav className="md:ml-auto hidden lg:flex">
              <div className="flex space-x-2">
                <NavLink to="/" className={activeLink}>
                  Home
                </NavLink>
                <NavLink to="/about-us" className={activeLink}>
                  About Us
                </NavLink>
                <NavLink
                  to="/product"
                  className={`${activeLink} flex items-center gap-1 `}
                >
                  Product <FiChevronDown />
                </NavLink>
                <NavLink
                  to="/pricing"
                  className={`${activeLink} flex items-center gap-1 `}
                >
                  Pricing <FiChevronDown />
                </NavLink>
                <NavLink
                  to="/blog"
                  className={`${activeLink} relative before:absolute before:content-["New"] before:text-xs before:-top-2 before:-right-6 before:px-2 before:py-1 before:rounded-xl before:border-red-500`}
                >
                  Blog
                </NavLink>
              </div>
            </nav>

            {/* CTA */}
            <nav className="md:ml-auto ">
              <div className="flex space-x-2 divide-x divide-bg-gradient-to-tb from-white via-slate-600 to-white">
                <NavLink to="/request-a-demo" className={activeLink}>
                  Request a demo
                </NavLink>
                <div className="flex space-x-2">
                  <NavLink to="/sign-up" className={activeLink}>
                    Sign up
                  </NavLink>
                  <NavLink
                    to="/login"
                    className="button-gradient text-xs font-medium grid place-content-center"
                  >
                    Login
                  </NavLink>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
