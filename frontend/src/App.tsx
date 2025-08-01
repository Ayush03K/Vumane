import "./App.css";
import {
  BrowserRouter,
  Navigate,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import BCard from "./components/BCard";
import BkCard from "./components/BkCard";
import ButtonR from "./components/ButtonR";
import RCard from "./components/RCard";
import Footer from "./components/Footer";
import BlogDetails from "./pages/BlogDetails";
import Create from "./pages/Create";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Input from "./components/Input";
import ButtonB from "./components/ButtonB";
import Headers from "./components/Headers";
import Heading from "./components/Heading";
import Hero from "./components/Hero";
import Categories from "./pages/Categories";
import Tags from "./pages/Tags";
import IndCategory from "./pages/IndCategory";
import IndTag from "./pages/IndTag";
import ScrollToTop from "./components/ScrollToTop";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div className="bg-[rgb(0,1,2)] ">
        <BrowserRouter>
          <ScrollToTop />
          <Toaster position="top-center" />
          <Routes>
            <Route
              path="/"
              element={
                localStorage.getItem("token") ? (
                  <Navigate to="/dashboard" replace />
                ) : (
                  <Navigate to="/signin" replace />
                )
              }
            />
            <Route path="/dashboard" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/categories/:category" element={<IndCategory />} />
            <Route path="/tags" element={<Tags />} />
            <Route path="/tags/:tag" element={<IndTag />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
