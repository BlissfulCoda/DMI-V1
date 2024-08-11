import { NavLink } from "react-router-dom";
import { BsStars } from "react-icons/bs";
import logo from "../assets/dmiColoured.svg";
const HomePage = () => {
  return (
    <div className="h-[90rem] w-screen flex flex-col justif-center items-center text-center transition-class">
      <div className="absolute -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      <div className="container mx-auto my-56 space-y-2 px-8 sm:px-24 md:px-40">
        <div className="flex justify-center flex-col items-center space-y-4">
          <span className="flex text-xs space-x-2  border border-gradient rounded-xl px-2 py-1">
            <BsStars />
            <span>New: AI Integrated</span>
          </span>
          <NavLink to="/" target="_blank">
            <img src={logo} className="h-20" alt="Vite logo" />
          </NavLink>
        </div>
        <h1 className="font-semibold text-4xl">Dubai Maths Institute</h1>
        <p className="text-slate-400 text-sm leading-5">
          Excellence in Mathematics Education through our expertly designed
          curriculum and an innovative AI-enabled EdTech platform
        </p>
      </div>
    </div>
  );
};

export default HomePage;
