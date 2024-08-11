import {
  Route,
  createBrowserRouter as Router,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";

import MainLayout from "./Layouts/MainLayout";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import Product from "./Pages/Product";
import Pricing from "./Pages/Pricing";
import Blog from "./Pages/Blog";
import RequestADemo from "./Pages/RequestADemo";
import NotFoundPage from "./Pages/NotFoundPage";

const App = () => {
  const router = Router(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<RequestADemo />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
