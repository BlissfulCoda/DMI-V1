import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <section className="flex flex-col items-center justify-center h-full w-full bg-white relative ">
      <div className="absolute -z-10 h-screen w-screen top-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      <div className="h-full absolute top-96 flex flex-col items-center justify-center">
        <h1 className="text-[20rem] md:text-[25rem] bg-gradient-to-r from-slate-50 via-slate-200 to-slate-50 font-semibold inline-block text-transparent bg-clip-text transition-class">
          404
        </h1>
        <div className="flex flex-col text-center absolute">
          <h3 className="text-2xl font-medium mb-1">Oops! Page Not Found</h3>
          <p className="text-slate-500 text-sm">
            The page you are looking for does not exit or has been moved.
          </p>
        </div>
        <Link
          to="/"
          className="flex items-center text-xs bg-gradient-to-tl from-slate-900 via-slate-600 to-slate-900 text-white px-6 py-3 rounded-md hover:cursor-pointer space-x-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M14 8a.75.75 0 0 1-.75.75H4.56l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 1.06L4.56 7.25h8.69A.75.75 0 0 1 14 8Z"
              clipRule="evenodd"
            />
          </svg>
          <button>Back to Homepage</button>
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
