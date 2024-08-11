import { NavLink } from "react-router-dom";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import logo from "../assets/dmiLinear.svg";
import Tabs from "./Tabs";

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
      : "text-black hover:text-red-300 rounded-md px-3 py-2 text-sm";

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="sticky top-0 bg-white border-b border-indigo-50 h-20 flex justify-center items-center shadow-sm"
    >
      <div className="container mx-auto w-full max-w-7xl px-4 sm:px-4 lg:px-8">
        <div className="flex h-20 items-center justify-center ">
          <div className="flex flex-1 items-center justify-between md:items-stretch md:justify-start ">
            <NavLink to="/" className="flex justify-between items-center">
              <img
                className="h-6 w-auto"
                src={logo}
                alt="Dubai Maths Institute"
              />
              <span className="font-xs sm:font-medium">
                Dubai Maths Insitute
              </span>
            </NavLink>

            {/* Center Navigation */}
            <Tabs activeLink={activeLink} />

            {/* CTA */}
            <nav className="md:ml-auto">
              <div className="flex sm:space-x-6 divide-x divide-bg-gradient-to-tb from-white via-slate-600 to-white">
                {/* <NavLink to="/request-a-demo" className={activeLink}>
                  Request a demo
                </NavLink> */}
                <NavLink
                  to="/blog"
                  className={`${activeLink} relative before:absolute before:content-["New"] before:text-blue-600 before:text-xs before:-top-2 before:-right-4 before:px-2 before:py-1 before:rounded-xl before:border-red-500`}
                >
                  Blog
                </NavLink>
                <div className="flex sm:space-x-2">
                  <NavLink to="/resume" className={activeLink}>
                    Resume
                  </NavLink>
                  <NavLink
                    to="/contact"
                    className="button-gradient text-xs font-medium grid place-content-center"
                  >
                    Contact
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
