import {
  Hash,
  Layers,
  Ghost,
  HelpCircle,
  Eye,
  Users,
  BookOpen,
  Flame,
  Brain,
  Infinity,
  PenLine,
  Sparkles,
  Moon,
} from "lucide-react";
import BCard from "../components/BCard";
import ButtonB from "../components/ButtonB";
import ButtonR from "../components/ButtonR";
import { Search, Feather } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import MCard from "../components/MCard";
import Skeleton2 from "../components/Skeleton2";

// interface Blogs {
//   title: string;
//   content: string;
//   category: string;
//   tags?: string;
//   authorId: string;
//   subtitle?: string;
//   like?: number;
//   posted_on?: string;
// }
export default function IndCategory() {
  const [loading, setLoading] = useState(true);
  const { category } = useParams();
  const [blogs, setBlogs] = useState<any[]>([{}]);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8787/api/v1/blog/bulk"
        );
        const filtered = response.data.result.filter(
          (blog: { category: string }) => blog.category === category
        );
        setBlogs(filtered);
      } catch (error) {
        alert("error in fetching blogs");
        console.log("error in fetching blogs :", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, [category]);

  const categoryIcons: Record<string, React.ElementType> = {
    Modernism: Layers,
    Anonymous: Ghost,
    Absurdism: HelpCircle,
    Existentialism: Eye,
    Society: Users,
    Philosophy: BookOpen,
    Surrealism: Flame,
    Psychology: Brain,
    Nihilism: Infinity,
    Writing: PenLine,
    Dreaming: Moon,
    Magic: Sparkles,
  };

  const categoryDescriptions: Record<string, string> = {
    Modernism: "Exploring bold, innovative breaks from tradition.",
    Anonymous: "Voices without names, stories with impact.",
    Absurdism: "Meaning lost in chaos—welcome to the absurd.",
    Existentialism: "Delving into purpose, freedom, and the self.",
    Society: "Reflections on our shared structures and systems.",
    Philosophy: "Thoughts that challenge, reason, and transcend.",
    Surrealism: "Dreams, distortions, and symbolic illusions.",
    Psychology: "Mind matters—understanding thought and behavior.",
    Nihilism: "Staring into the void and embracing meaninglessness.",
    Writing: "Ink, imagination, and introspection in motion.",
    Dreaming: "Wandering through inner worlds and visions.",
    Magic: "Where belief, mystery, and wonder converge.",
  };
  const Icon = categoryIcons[category ?? ""] || Hash;
  const Decription =
    categoryDescriptions[category ?? ""] ||
    "Exploring the meaning of existence, freedom, and authenticity in the human condition";
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
          <Link to="/categories">
            <ButtonB title="Categories" />
          </Link>
          <Link to="/create">
            <ButtonR title="Write" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-[20px] justify-center items-center pt-[6%]">
        <Icon className="text-[rgb(255,0,0,0.7)] text-7xl h-16 w-16" />
        <div className="text-white font-bold text-5xl ">{category}</div>
        <div className="text-white/50">{Decription}</div>
      </div>
      <div>
        <div className="w-full flex justify-center gap-4">
          <div className="relative h-[60px] w-[40%] rounded-2xl space-x-2 bg-white/10 flex justify-center items-center p-4 ">
            <div className="absolute rounded-2xl opacity-35 bg-black h-full w-full z-5" />
            <Search className="bg-transperent text-white h-full z-10" />
            <input
              className="w-full h-full p-2 bg-transparent text-white outline-0 z-10"
              placeholder="Search within Philosophy"
            />
          </div>
          <div className="relative w-[100px] flex justify-center items-center text-white font-semibold rounded-3xl bg-gradient-to-b from-[#1a1a1a] to-black shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)] overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-white/10 rounded-t-3xl blur-sm" />
            {/* <div className="absolute inset-0 rounded-3xl border border-white/5" /> */}
            <div className="relative z-10">Filter</div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-10 justify-center">
        {loading ? (
          Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="w-[40%]">
              <Skeleton2 />
            </div>
          ))
        ) : (
          <div className="flex flex-wrap gap-8 justify-center">
            {blogs.map((blog, value) => (
              <Link
                to={`/blog/${encodeURIComponent(blog.id)}`}
                key={blog.id}
                className="w-[85%] md:w-[40%]"
              >
                <BCard
                  key={value}
                  title={blog.title}
                  tags={blog.tags}
                  content={blog.content}
                  authorId={blog.author?.name}
                  likes={blog.like}
                  hw="h-[280px] w-full shadow-[rgb(0,0,0,0.1)] hover:bg-[rgb(0,40,80,0.3)]"
                />
              </Link>
            ))}
            {/* </div> */}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-10 px-[8%]">
        <div className="text-white flex gap-2 text-2xl justify-center ">
          <div className="font-bold">Related</div>
          <div className="font-bold text-[rgb(255,0,0,0.8)]">Categories</div>
        </div>
        <div className="flex flex-wrap gap-6 mb-[50px]">
          {["Existentialism", "Philosophy"].map((category, value) => (
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
          ))}
        </div>
      </div>
    </div>
  );
}
