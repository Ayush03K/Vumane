import { Link } from "react-router-dom";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import Headers from "../components/Headers";
import Hero from "../components/Hero";
import MCard from "../components/MCard";
import Qoutes from "../components/Qoutes";

export default function Home() {
  return (
    <div className="w-full">
      <div className="bg-primary">
        <Headers />
        <Hero />
        <Blog />
        <div className="p-4">
          <div className=" pt-14 pl-4 flex gap-2 flex-row ">
            <h1 className="text-6xl text-onwghite font-bold pr-[5px] ">
              Featured
            </h1>
            <h1 className="text-6xl text-[rgba(255,0,0,0.5)] font-bold pl-[5px] ">
              Categories
            </h1>
            <h1 className="text-7xl text-[rgba(255,0,0,0.5)] font-bold animate-blink">
              _
            </h1>
          </div>
          <div className="flex flex-wrap gap-10 mb-[50px] m-[50px]">
            {["Existentialism", "Psychology", "Society", "Philosophy"].map(
              (category, value) => (
                <Link
                  to={`/categories/${encodeURIComponent(category)}`}
                  key={category}
                >
                  <MCard
                    key={value}
                    categories={category}
                    hw="w-[380px] h-[220px] shadow-[rgb(0,0,0)] hover:bg-[rgb(225,0,0,0.20)]"
                  />
                </Link>
              )
            )}
          </div>
        </div>
        <Qoutes />
        <Footer />
      </div>
    </div>
  );
}
