import { NavLink } from "react-router-dom";
import logo from "../assets/dmi.svg";
const HomePage = () => {
  return (
    <div className="h-[90rem] w-screen flex flex-col justif-center items-center text-center transition-class">
      <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      <div className="container mx-auto space-y-2 px-8 sm:px-24 md:px-40">
        <div className="flex justify-center">
          <NavLink to="/" target="_blank">
            <img src={logo} className="logo" alt="Vite logo" />
          </NavLink>
        </div>
        <h1 className="">Dubai Maths Institute</h1>
        <p>Excellence in Mathematics Education</p>
      </div>
    </div>
  );
};

export default HomePage;
