import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import ExampleComponent from "./ExampleComponent";

const Tabs = ({ activeLink }) => {
  const [selected, setSelected] = useState(null);
  const [direction, setDirection] = useState(null);

  const handleSetSelected = (val) => {
    if (typeof selected === "number" && typeof val === "number") {
      setDirection(selected > val ? "r" : "l");
    } else if (val === null) {
      setDirection(null);
    }

    setSelected(val);
  };

  const TABS = [
    {
      title: "Product",
      component: ExampleComponent,
      path: "/product",
    },
    {
      title: "Pricing",
      component: ExampleComponent,
      path: "/pricing",
    },
  ].map((n, idx) => ({ ...n, id: idx + 1 }));

  return (
    <>
      <nav
        onMouseLeave={() => handleSetSelected(null)}
        className="md:ml-auto hidden lg:flex"
      >
        <div className="flex space-x-2 h-fit relative">
          <NavLink to="/" className={activeLink}>
            Home
          </NavLink>
          <NavLink to="/about-us" className={activeLink}>
            About Us
          </NavLink>

          {TABS.map((tab) => {
            return (
              <NavLink
                onMouseEnter={() => handleSetSelected(tab.id)}
                onClick={() => handleSetSelected(tab.id)}
                to={tab.path}
                key={tab.id}
                className={`${activeLink} flex items-center gap-1 transition-colors`}
              >
                <span>{tab.title}</span>
                <FiChevronDown
                  className={`transition-tranform ${
                    selected === tab.id ? "rotate-180" : ""
                  }`}
                />
              </NavLink>
            );
          })}

          <NavLink
            to="/blog"
            className={`${activeLink} relative before:absolute before:content-["New"] before:text-blue-600 before:text-xs before:-top-2 before:-right-6 before:px-2 before:py-1 before:rounded-xl before:border-red-500`}
          >
            Blog
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Tabs;
