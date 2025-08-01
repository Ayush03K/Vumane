import { useState } from "react";
import ButtonB from "../components/ButtonB";
import ButtonR from "../components/ButtonR";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import axios from "axios";
import toast from "react-hot-toast";

export default function () {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const token = localStorage.getItem("token");
  const handleTruth = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8787/api/v1/blog",
        {
          title,
          category,
          content,
          tags,
          like: 0,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200 || response.status === 201) {
        toast.success("Blog posted!");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 409) {
          toast.error("⚠️ You already posted a blog with this title!");
        } else {
          toast.error("❌ Error in posting blog.");
          console.error("Axios error:", error);
        }
      } else {
        toast.error("❌ Unknown error occurred.");
        console.error("Unknown error:", error);
      }
    }
  };
  return (
    <div className="h-full w-[81%] text-text flex flex-col justify-center gap-10">
      <div className="relative z-10">
        <div
          className="relative px-6 py-6 text-white rounded-2xl
          bg-[rgba(255,0,0,0.15)] backdrop-blur-xl border border-white/10
          hover:shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.15),0_0_15px_rgba(255,0,0,0.3)]
          transition duration-300 ease-in-out overflow-hidden space-y-6"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black blur-2xl opacity-90 pointer-events-none rounded-t-2xl z-0" />

          <div className="space-y-6 relative z-10">
            <div>
              <div className="text-2xl text-left py-4 font-semibold text-onwghite ">
                Title
              </div>
              <Input
                hw="h-16 w-full bg-[rgb(225,0,0,0.1)] shadow-[inset_0_0_10px_rgba(225,0,0,0.1)]"
                placehold="Enter your title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <div className="text-2xl text-left py-4 font-semibold text-onwghite">
                Category
              </div>
              <Input
                hw="h-16 w-full bg-[rgb(225,0,0,0.1)] shadow-[inset_0_0_10px_rgba(225,0,0,0.1)]"
                placehold="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div>
              <div className="text-2xl text-left py-4 font-semibold text-onwghite">
                Cover Image
              </div>
              <input
                type="file"
                className="text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#ff4d4d]/20 file:text-white hover:file:bg-[#ff4d4d]/40 transition"
              />
            </div>
            <div>
              <div className="text-2xl text-left py-4 font-semibold text-onwghite">
                Content
              </div>
              <TextArea
                hw="w-full"
                placehold="Begin your narrative here..."
                value={content}
                onChange={(e) => {
                  setContent(e.target.value);
                }}
              />
            </div>
            <div>
              <div className="text-2xl text-left py-4 font-semibold text-onwghite">
                Tags
              </div>
              <Input
                hw="h-16 w-full bg-[rgb(225,0,0,0.1)] shadow-[inset_0_0_10px_rgba(225,0,0,0.1)]"
                placehold="#philosophy, #psychology, #art..."
                value={tags}
                onChange={(e) => {
                  setTags(e.target.value);
                }}
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-row gap-4 mt-8">
          <ButtonR title="Publish" onClick={handleTruth} />
          <ButtonB title="Save Draft" hw="hover:scale-105" onClick={() => toast.success("Draft Saved!")}/>
        </div>
      </div>
    </div>
  );
}
