import BCard from "../components/BCard";
import ButtonB from "../components/ButtonB";
import ButtonR from "../components/ButtonR";
import { Hash, Search, Feather } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Skeleton1 from "../components/Skeleton1";
import { BACKEND_URL } from "../config";

export default function IndTag() {
  const { tag } = useParams();
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<any[]>([{}]);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          `${BACKEND_URL}/api/v1/blog/bulk`
        );
        const blogs = response.data.result;
        const filtered = blogs.filter((blog: { tags: string }) =>
          blog.tags.split(" ").includes(tag ?? "")
        );
        setBlogs(filtered);
      } catch (error) {
        alert("error in fetching blogs");
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="h-full w-full flex flex-col gap-[80px]">
      <div className="flex bg-[rgb(0,1,2,0.20)] gap-[20px] fixed z-50 w-full backdrop-blur-md h-[8%] justify-between p-10 items-center pr-[2%]">
        <Link to="/">
          <div className="text-[#FFCCCC] text-xl font-semibold tracking-wide flex gap-[15px]">
            <div className="flex">
              <p>...</p>
              <Feather />
            </div>
            Vumane
          </div>
        </Link>
        <div className="flex gap-4">
          <Link to="/tags">
            <ButtonB title="Tags" />
          </Link>
          <Link to="/create">
            <ButtonR title="Write" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-[20px] justify-center items-center pt-[6%]">
        <Hash className="bg-[rgb(255,0,0,0.15)] border border-[rgb(255,0,0,0.7)] h-[8%] w-[4%] rounded-full text-[rgb(255,0,0,0.7)] p-3" />
        <div className="text-white font-bold text-5xl ">{tag}</div>
        <div className="text-white/50">Exploring human existence</div>
      </div>
      <div>
        <div className="w-full flex justify-center gap-4">
          <div className="relative h-[60px] w-[40%] rounded-2xl space-x-2 bg-white/10 flex justify-center items-center p-4 ">
            <div className="absolute rounded-2xl opacity-35 bg-black h-full w-full z-5" />
            <Search className="bg-transperent text-white h-full z-10" />
            <input
              className="w-full h-full p-2 bg-transparent text-white outline-0 z-10"
              placeholder="Search within #technology posts..."
            />
          </div>
          <div className="relative w-[100px] flex justify-center items-center text-white font-semibold rounded-3xl bg-gradient-to-b from-[#1a1a1a] to-black shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)] overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-white/10 rounded-t-3xl blur-sm" />
            {/* <div className="absolute inset-0 rounded-3xl border border-white/5" /> */}
            <div className="relative z-10">Filter</div>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-wrap gap-10 items-center justify-center"> */}
      <div className="flex flex-wrap gap-10 justify-center">
        {loading
          ? Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="w-[85%]">
                <Skeleton1 />
              </div>
            ))
          : blogs.map((blog) => (
              <Link
                to={`/blog/${encodeURIComponent(blog.id)}`}
                key={blog.id}
                className="w-[85%]"
              >
                <BCard
                  title={blog.title}
                  tags={blog.tags}
                  content={blog.content}
                  authorId={blog.author?.name}
                  likes={blog.like}
                  hw="h-[280px] w-full hover:bg-[rgb(0,40,80,0.3)]"
                />
              </Link>
            ))}
      </div>

      <div className="flex flex-col gap-10 px-[8%]">
        <div className="text-white flex gap-2 text-2xl justify-center ">
          <div className="font-bold">Related</div>
          <div className="font-bold text-[rgb(255,0,0,0.8)]">Tags</div>
        </div>
        <div className="flex flex-wrap gap-6 mb-[50px] justify-center items-center">
          <div className="flex flex-wrap gap-2 ">
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
            ].map((tag, index) => (
              <Link to={`/tags/${encodeURIComponent(tag)}`} key={tag}>
                <span
                  key={index}
                  className=" bg-[rgb(0,40,80,0.2)] text-white px-5 py-3 rounded-full text-md border border-[rgb(0,40,80,0.6)] hover:bg-[rgb(225,0,0,0.3)] hover:border-[rgb(225,0,0,0.4)]"
                >
                  #{tag}
                </span>
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-[20px] px-[25%] mb-[50px] text-center space-y-5">
          <div className="text-[30px] text-onwghite">
            "The real question is not whether life exists after death. The real
            question is whether you are alive before death."
          </div>
          <div className="text-[20px] text-[rgb(255,0,0,0.8)] italic">
            --- Osho
          </div>
        </div>
      </div>
    </div>
  );
}
