import { useEffect, useState } from "react";
import BkCard from "./BkCard";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import { BACKEND_URL } from "../config";
export default function () {
  const [loading, setLoading] = useState(true);
  const [featured, setFeatured] = useState<any[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${BACKEND_URL}/api/v1/blog/bulk`
        );
        const blogData = response.data.result || [];
        const sortedByLikes = [...blogData].sort((a, b) => b.like - a.like);
        setFeatured(sortedByLikes.slice(0, 4));
      } catch (error) {
        alert("Error in fetching blogs");
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="p-4">
      <div className="p-4 pt-16 flex gap-2 flex-row ">
        <h1 className="text-7xl text-onwghite font-bold pr-[5px] ">Featured</h1>
        <h1 className="text-7xl text-[rgba(255,0,0,0.5)] font-bold pl-[5px] ">
          Writings
        </h1>
        <h1 className="text-7xl text-[rgba(255,0,0,0.5)] font-bold animate-blink">
          _
        </h1>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-wrap gap-[50px] justify-between m-[50px]">
          {featured.map((blog, value) => (
            <Link to={`/blog/${encodeURIComponent(blog.id)}`} key={blog.id}>
              <BkCard
                key={value}
                tags={blog.tags}
                title={blog.title}
                subtitle={blog.content}
                author={blog.author?.name}
                likes={blog.like}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
