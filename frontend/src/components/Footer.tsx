import { Feather, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div
      className="relative h-[470px] px-6 py-3 text-white font-medium 
      bg-[radial-gradient(ellipse_at_center,_rgba(120,0,0,1)_0%,_rgba(180,0,0,0.4)_35%,_rgba(255,0,0,0.1)_100%)] 
      shadow-inner transition-all duration-300 ease-in-out overflow-hidden "
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-2xl pointer-events-none z-0" />

      <div className="relative z-10 flex items-start m-[100px] justify-between h-full">
        <div className="flex flex-col gap-[30px]">
          <div className="flex gap-[15px]">
            <div className="flex">
              <p className="text-[#FFCCCC] text-[28px] tracking-wide font-semibold ">
                ...
              </p>
              <Feather className="mt-[9px] text-onwghite" />
            </div>
            <h1 className="text-[#FFCCCC] text-[28px] tracking-wide font-semibold ">
              VUMANE
            </h1>
          </div>
          <p className="w-[450px]">
            A literary journal exploring the depths of human consciousness
            through the lens of existential literature, psychological realism,
            and the absurd condition of modern life.
          </p>
          <div className="flex gap-[15px]">
            <div className="h-[40px] w-[40px] bg-[rgb(0,1,2)] rounded-xl flex items-center justify-center text-white hover:text-onwghite">
              <Twitter />
            </div>
            <div className="h-[40px] w-[40px] bg-[rgb(0,1,2)] rounded-xl flex items-center justify-center text-white hover:text-onwghite">
              <Instagram />
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-[200px] mr-[150px]">
          <div className="flex flex-col gap-[10px] ">
            <div className="hover:text-onwghite">Categories</div>
            <div>
              {[
                "Modernism",
                "Anonymous",
                "Absurdism",
                "Existentialism",
                "Society",
                "Philosophy",
                "Surrealism",
                "Psychology",
                "Nihilism",
                "Writing",
                "Dreaming",
                "Magic",
              ].map((category, value) => (
                <Link to={`/categories/${category}`} key={value}>
                  <div key={value} className="hover:text-onwghite">
                    {category}
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-[20px]">
            <div className="hover:text-onwghite">Authors</div>
            <div className="hover:text-onwghite">
              Elena Volkov <br />
              Viktor Petrov <br />
              Anya Dostoyeva <br />
              Franz Mueller <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
