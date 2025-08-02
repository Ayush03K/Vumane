import { Feather, UserCheck2 } from "lucide-react";
import { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { BACKEND_URL } from "../config";
interface Blog {
  id: string;
  title: string;
}

export default function Header() {
  const [query, setQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState<Blog[]>([]);
  const [allBlogs, setAllBlogs] = useState<Blog[]>([]); //titles
  const [showPopup, setShowPopup] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  useEffect(() => {
    axios.get(`${BACKEND_URL}/api/v1/blog/bulk`).then((response) => {
      console.log(response.data.result);
      setAllBlogs(response.data.result);
    });
  }, []);

  useEffect(() => {
    if (query.length > 0) {
      const results = allBlogs.filter((blog: any) =>
        blog.title.toLowerCase().includes(query.toLowerCase())
      );

      setFilteredResults(results);
      setShowPopup(true);
    } else {
      setShowPopup(false);
    }
  }, [query, allBlogs]);
  const navigate = useNavigate();

  const handleSelectResult = (id: string) => {
    navigate(`/blog/${id}`);
    setShowPopup(false);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-screen backdrop-blur-lg bg-[rgba(0,0,0,0.6)] border-white/10 shadow-md">
      <div className="max-w-full mx-auto px-6 h-20 flex items-center justify-evenly text-white font-medium">
        {/* Logo */}
        <div className="text-[#FFCCCC] text-xl font-semibold tracking-wide flex gap-[10px]">
          <div className="flex">
            <p>...</p>
            <Feather />
          </div>
          Vumane
        </div>

        <div className="flex items-center justify-center gap-[15px] px-3 py-1 rounded-xl ">
          <CiSearch className="text-onwghite text-2xl mr-1 stroke-1" />
          <input
            type="text"
            placeholder="Search Blog_"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="bg-transparent border-white/10 shadow-md text-white placeholder-white w-full px-2 py-1 rounded outline-none"
          />
        </div>
        {showPopup && (
          <div className="custom-scrollbar absolute top-[5rem] w-[70%] bg-[rgba(0,0,0,0.6)] border-b border-white/30 rounded-lg shadow-xl z-50 max-h-72 overflow-y-auto backdrop-blur-lg">
            {filteredResults.length > 0 ? (
              filteredResults.map((blog, index) => (
                <div
                  key={index}
                  className="px-4 py-2 hover:bg-white/10 cursor-pointer text-white text-sm"
                  onClick={() => handleSelectResult(blog.id)}
                >
                  {blog.title}
                </div>
              ))
            ) : (
              <div className="px-4 py-2 text-white text-sm">
                No results found
              </div>
            )}
          </div>
        )}
        <nav className="hidden md:flex items-center gap-4 text-sm">
          <a
            href="/categories"
            className="text-[#FFCCCC] hover:text-white transition"
          >
            Categories
          </a>
          <div className="bg-onwghite h-1 w-1 rounded-full shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.15),0_0_15px_rgba(255,0,0,0.3)]"></div>
          <a
            href="/tags"
            className="text-[#FFCCCC] hover:text-white transition"
          >
            Tags
          </a>
        </nav>

        <div className="relative">
          <div
            className="text-[#FFCCCC] text-xl font-bold cursor-pointer"
            onClick={() => setShowUserMenu((prev) => !prev)}
          >
            <UserCheck2 />
          </div>

          {showUserMenu && (
            <div className="absolute right-0 mt-2 w-32 bg-[rgba(0,0,0,0.8)] border border-black text-onwghite/80 rounded-md  z-50">
              <button
                className="block w-full text-left px-4 py-2 rounded-sm  bg-[rgb(225,0,0,0.4)] hover:bg-[rgba(225,0,0)]/10 hover:text-[rgba(225,0,0)] border border-onwghite/80 hover:border-[rgba(225,0,0)] text-sm"
                onClick={() => {
                  localStorage.clear();
                  window.location.href = "/";
                }}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
