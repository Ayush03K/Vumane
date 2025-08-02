import { Search, Feather } from "lucide-react";
import MCard from "../components/MCard";
import ButtonB from "../components/ButtonB";
import ButtonR from "../components/ButtonR";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader2 from "../components/Loader2";
import Loader3 from "../components/Loader3";
import { BACKEND_URL } from '../config'


export default function Tags() {
  const [loading, setLoading] = useState(true);
  const [tags, setTags] = useState<string[]>([]);
  const [toptags, setTopTags] = useState<string[]>([]);
  useEffect(() => {
    const fetchTags = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${BACKEND_URL}/api/v1/blog/bulk`
        );
        const tags = response.data.result.map((blog: any) => blog.tags) || [];
        setTags(tags);
        setTopTags(tags.slice(0, 3));
      } catch (error) {
        alert("error in fetching tags");
        console.log("error in fetching tags", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTags();
  }, []);
  return (
    <div className=" text-white min-h-screen">
      {/*changged*/}
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
          <Link to="/categories">
            <ButtonB title="Categories" />
          </Link>
          <Link to="/create">
            <ButtonR title="Write" />
          </Link>
        </div>
      </div>
      <div className="relative h-full w-full text-white text-center flex flex-col gap-[40px] p-[40px] pt-[6%]">
        <div className="flex flex-col gap-[10px]">
          <div className="flex justify-center gap-[15px] flex-wrap">
            <div className="font-bold text-[50px]">Explore by </div>
            <div className="font-bold text-[50px] text-[rgb(225,0,0,0.5)]">
              Tags
            </div>
          </div>
          <div className="text-white/50">
            Discover interconnected thoughts through the labyrinth of tagged
            concepts
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="relative h-[60px] w-[40%] rounded-2xl space-x-2 bg-white/10 flex justify-center items-center p-4 ">
            <div className="absolute rounded-2xl opacity-35 bg-black h-full w-full z-5" />
            <Search className="bg-transperent h-full z-10" />
            <input
              className="w-full h-full p-2 bg-transparent outline-0 z-10"
              placeholder="Search tags...(e.g.,consciousness,kafka,freedom)"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[30px] mt-[20px] flex-wrap">
          <div className="flex justify-center gap-[10px] flex-wrap">
            <div className="font-bold text-[30px]">Trending</div>
            <div className="font-bold text-[30px] text-[rgb(255,0,0,0.5)]">
              Discussions
            </div>
          </div>
          {loading ? (
            <Loader2 />
          ) : (
            <div className="flex flex-row justify-center gap-20 flex-wrap">
              {Array.isArray(toptags) &&
                [
                  ...new Set(
                    toptags.flatMap((tagStr: string) => tagStr.split(" "))
                  ),
                ].map((tag, index) => (
                  <Link to={`/tags/${encodeURIComponent(tag)}`} key={tag}>
                    <MCard
                      key={index}
                      featuredTags={tag}
                      hw="w-[500px] h-[300px] border-t border-white/20 shadow-[0_0_15px_rgba(0,40,80,0.6)] border-t border-white/30 hover:bg-[rgb(0,40,80,0.10)] hover:scale-[101%]"
                    />
                  </Link>
                ))}
            </div>
          )}
        </div>
        <div className="flex flex-col gap-[30px] mt-[20px] ">
          <div className="flex justify-center gap-[10px] flex-wrap">
            <div className="font-bold text-[30px]">Popular </div>
            <div className="font-bold text-[30px] text-[rgb(255,0,0,0.5)]">
              Tags
            </div>
          </div>
          {loading ? (
            <Loader3 />
          ) : (
            <div className="flex flex-wrap gap-5 justify-start px-[82px]">
              {Array.isArray(tags) &&
                [
                  ...new Set(
                    tags
                      .flatMap((tagStr: string) => tagStr.split(" "))
                      .map((t) => t.trim())
                      .filter((t) => t.length > 0) //filter blank space
                  ),
                ].map((tag, index) => (
                  <Link to={`/tags/${encodeURIComponent(tag)}`} key={tag}>
                    <MCard
                      key={index}
                      tags={tag}
                      hw="w-[395px] h-[70px] hover:bg-[rgb(255,0,0,0.20)]"
                    />
                  </Link>
                ))}
            </div>
          )}
        </div>
        <div className="mt-[20px] px-[25%] space-y-5">
          <div className="text-[30px] text-onwghite">
            "We are what we think. All that we are arises with our thoughts.
            With our thoughts, we make the world."
          </div>
          <div className="text-[20px] text-[rgb(255,0,0,0.8)] italic">
            --- Buddha
          </div>
        </div>
      </div>
    </div>
  );
}
