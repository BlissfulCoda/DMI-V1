import DMILogo from "/dmiColoured.svg";

function App() {
  return (
    <div className="h-screen w-screen flex justif-center items-center text-center">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="container mx-auto space-y-2">
        <div className="">
          <a href="https://vitejs.dev" target="_blank">
            <img src={DMILogo} className="logo" alt="Vite logo" />
          </a>
        </div>
        <h1 className="">Dubai Maths Institute</h1>
        <p>Excellence in Mathematics Education</p>
        <div className="card"></div>
      </div>
    </div>
  );
}

export default App;
