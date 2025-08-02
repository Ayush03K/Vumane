import { Feather } from "lucide-react";
import ButtonB from "../components/ButtonB";
import ButtonR from "../components/ButtonR";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import MCard from "../components/MCard";
import Loader2 from "../components/Loader2";
import Loader3 from "../components/Loader3";
import { BACKEND_URL } from "../config";
interface ipCT {
  hw?: string;
}

export default function Categories({ hw }: ipCT) {
  const [loading,setLoading] = useState(true);
  const [categories,setCategories] = useState<string[]>([]);
  const [featured,setFeatured] = useState<string[]>([]);
  useEffect(()=>{
    const fetchCategories = async ()=>{
      setLoading(true);
      try{
        const response = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`);
        const category = response.data.result.map((blog : any)=>blog.category) || [];
        setCategories(category);
        setFeatured(category.slice(0,3));
      }catch(error){
        alert("error in fetching categories");
        console.log("error in fetching categories :",error);
      }finally{
        setLoading(false);
      }
    };
    fetchCategories();
  },[])
  return (
    <div className=" text-white min-h-screen"> {/*changged*/}
      <div className="flex bg-[rgb(0,1,2,0.40)] gap-[20px] fixed z-50 w-full backdrop-blur-md h-[8%] justify-between p-10 items-center pr-[2%]">
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
          <Link to='/create'><ButtonR title="Write"/></Link>
        </div>
      </div>
      <div className="relative h-full w-full text-white text-center flex flex-col gap-[40px] p-[40px] pt-[6%]">
        <div className="flex flex-col gap-[10px]">
          <div className="flex justify-center gap-[15px] flex-wrap">
            <div className="font-bold text-[50px]">Explore by </div>
            <div className="font-bold text-[50px] text-[rgb(225,0,0,0.5)]">
              Categories
            </div>
          </div>
          <div className="text-white/50">
            Navigate the depths of human thought through carefully curated
            philosophical domains
          </div>
        </div>

        <div className="flex flex-col gap-[30px] mt-[20px] flex-wrap">
          <div className="flex justify-center gap-[10px] flex-wrap">
            <div className="font-bold text-[30px]">Featured</div>
            <div className="font-bold text-[30px] text-[rgb(255,0,0,0.5)]">
              Explorations
            </div>
          </div>
          {loading ? (<Loader2/>) : (
          <div className="flex flex-row justify-center gap-20 flex-wrap">
            {featured.map((category, value) => (
              <Link to={`/categories/${encodeURIComponent(category)}`} key={category}>
              <MCard
                key={value}
                featuredCategory={category}
                hw="w-[500px] h-[300px] shadow-[0_0_15px_rgba(0,40,80,0.6)] border-t border-white/30 hover:bg-[rgb(0,40,80,0.10)] hover:scale-[101%]"
              />
              </Link>
            ))}
          </div>
          )}
        </div>
        <div className="flex flex-col gap-[30px] mt-[20px] ">
          <div className="flex justify-center gap-[10px] flex-wrap">
            <div className="font-bold text-[30px]">All </div>
            <div className="font-bold text-[30px] text-[rgb(255,0,0,0.5)]">
              Categories
            </div>
          </div>
          {loading ? (<Loader3/>) : (
          <div className="flex flex-wrap gap-12 justify-start px-20">
            
            {Array.isArray(categories) &&
  [...new Set(categories)]
    .map((c) => c?.trim()) // clean whitespace
    .filter((category) => category && category.length > 0)
    .map((category, value) => (
      <Link to={`/categories/${encodeURIComponent(category)}`} key={category}>
        <MCard
          key={value}
          categories={category}
          hw="w-[375px] h-[220px] shadow-[rgb(0,0,0)] hover:bg-[rgb(225,0,0,0.20)]"
        />
      </Link>
))}

          </div>
          )}
        </div>
        <div className="mt-[20px] px-[25%] space-y-5">
          <div className="text-[30px] text-onwghite">
            "The only way to deal with an unfree world is to become so
            absolutely free that your very existence is an act of rebellion"
          </div>
          <div className="text-[20px] text-[rgb(255,0,0,0.8)] italic">
            --- Albert Camus
          </div>
        </div>
      </div>
    </div>
  );
}
