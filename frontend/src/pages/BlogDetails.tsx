import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
interface Blog {
  title: string;
  content: string;
  category: string;
  tags?: string;
  authorId: string;
  subtitle?: string;
  like?: number;
  posted_on?: string;
  author?: {
    name: string;
  };
}

export default function BlogDetails() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  const [blog, setBlog] = useState<Blog | null>(null);
  useEffect(() => {
    axios.get(`http://127.0.0.1:8787/api/v1/blog/${id}`).then((response) => {
      const blog = response.data.result || {};
      setBlog(blog);
      console.log(blog);
      setLoading(false);
    });
  }, []);
  return (
    <div>
      {loading ? (
        // --- Skeleton Loader ---
        <article className="px-4 py-20 sm:px-8 lg:px-40 animate-pulse space-y-10">
          <div className="h-10 bg-gray-800/50 rounded w-3/4"></div>
          <div className="h-6 bg-gray-700/40 rounded w-1/2"></div>

          <div className="flex gap-2">
            <div className="h-6 w-20 bg-gray-700/50 rounded-full"></div>
            <div className="h-6 w-20 bg-gray-700/50 rounded-full"></div>
          </div>

          <div className="flex gap-4 items-center">
            <div className="h-14 w-14 bg-gray-700/60 rounded-full"></div>
            <div className="space-y-2">
              <div className="h-4 w-32 bg-gray-700/50 rounded"></div>
              <div className="h-3 w-24 bg-gray-700/40 rounded"></div>
            </div>
          </div>

          <div className="h-72 w-full bg-gray-800/50 rounded-2xl"></div>

          <div className="space-y-4">
            <div className="h-4 w-full bg-gray-800/30 rounded"></div>
            <div className="h-4 w-11/12 bg-gray-800/40 rounded"></div>
            <div className="h-4 w-10/12 bg-gray-800/50 rounded"></div>
            <div className="h-4 w-9/12 bg-gray-800/30 rounded"></div>
          </div>
        </article>
      ) : (
        <>
          {/* Breadcrumb */}
          <div className="text-gray-400 fixed flex py-6 pl-44 z-50 w-full backdrop-blur-md bg-[rgba(0,0,0,0.6)] gap-[5px]">
            <Link to={"/"} className="hover:text-[rgb(225,0,0,0.7)]">
              Home
            </Link>
            /
            <Link
              to={`/categories/${blog?.category}`}
              className="hover:text-[rgb(225,0,0,0.7)]"
            >
              {blog?.category}
            </Link>
            /
            <div>
              <span className="text-[#FFCCCC]">{blog?.title}</span>
            </div>
          </div>
          <article className="bg-[rgb(0,1,2,0.15)] min-h-screen w-full text-white px-4 py-20 sm:px-8 lg:px-40 flex flex-col gap-14 font-sans">
            <div
              className="relative px-6 py-8 mt-10  w-full rounded-2xl bg-[rgba(0,1,2,0.15)] backdrop-blur-xl border border-white/10
        transition duration-300 ease-in-out overflow-hidden hover:scale-[100.5%]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,40,80,0.15)_0%,_transparent_100%)] z-0" />

              <div className="relative z-10 space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-tight text-onwghite">
                  {blog?.title}
                </h1>

                <div className="flex flex-wrap gap-2 mt-4">
                  {blog?.tags?.split(" ").map((tag, index) => (
                    <Link to={`/tags/${encodeURIComponent(tag)}`} key={tag}>
                      <span
                        key={index}
                        className="bg-[#FFCCCC]/10 text-[#FFCCCC] px-3 py-1 rounded-full text-sm border border-[#FFCCCC]/30"
                      >
                        {tag}
                      </span>
                    </Link>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-6">
                  <div className="bg-white h-14 w-14 rounded-full"></div>
                  <div>
                    <div className="text-lg font-serif">
                      {blog?.author?.name ?? "Unknown Author"}
                    </div>
                    <div className="text-sm text-gray-300">
                      Published on {blog?.posted_on}
                    </div>
                    <div className="flex items-center gap-1 text-gray-400 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="w-4 h-4 text-red-400"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
                 2 6.5 3.5 5 5.5 5c1.54 0 3.04.99 
                 3.57 2.36h1.87C13.46 5.99 14.96 5 
                 16.5 5 18.5 5 20 6.5 20 8.5c0 
                 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                        />
                      </svg>
                      <span className="text-sm">{blog?.like ?? 0} likes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative p-4 bg-[rgba(0,1,2,0.15)] backdrop-blur-xl border-y border-white/10 transition duration-300 ease-in-out overflow-hidden hover:scale-[101%]">
              <div className="absolute inset-0 overflow-hidden z-0">
                <img
                  src="https://plus.unsplash.com/premium_photo-1681488240099-f1f8585ef3e5?w=1000&auto=format&fit=crop&q=80"
                  alt="Blurred background"
                  className="w-full h-full object-cover blur-md scale-110"
                />
                <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)]" />
              </div>

              <div className="relative z-10 flex justify-center items-center">
                <img
                  src="https://plus.unsplash.com/premium_photo-1681488240099-f1f8585ef3e5?w=1000&auto=format&fit=crop&q=80"
                  alt="Focused image"
                  className="w-[60%] object-contain rounded-2xl shadow-lg"
                />
              </div>
            </div>

            <div className="relative px-6 py-10 w-full bg-[rgba(0,1,2,0.15)] backdrop-blur-xl border-t border-white/10 transition duration-300 ease-in-out overflow-hidden hover:scale-[100.5%] rounded-b-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,40,80,0.2)_0%,_transparent_100%)] z-0 pointer-events-none" />

              <div className="relative z-10 space-y-6 text-white text-[17px] leading-8 tracking-wide prose prose-invert prose-p:my-4 prose-strong:text-gray-200 prose-em:text-gray-300 prose-blockquote:border-l-4 prose-blockquote:border-red-500 prose-blockquote:pl-4 prose-blockquote:text-gray-400 prose-code:bg-gray-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md">
                {blog?.content}
              </div>
            </div>
          </article>
        </>
      )}
    </div>
  );
}
