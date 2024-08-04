import logo from "./assets/dmiLinear.svg";

const App = () => {
  return (
    <div className="h-screen w-screen flex justif-center items-center text-center transition-class">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="container mx-auto space-y-2 px-8 sm:px-24 md:px-40">
        <div>
          <a href="#" target="_blank">
            <img src={logo} className="logo" alt="Vite logo" />
          </a>
        </div>
        <h1 className="">Dubai Maths Institute</h1>
        <p>Excellence in Mathematics Education</p>
      </div>
    </div>
  );
};

export default App;
