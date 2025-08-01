import { Link } from "react-router-dom";
import RCard from "../components/RCard";
import Write from "../components/Write";
import { Feather } from "lucide-react";
import ButtonB from "../components/ButtonB";

export default function Create() {
  return (
    <div className="bg-[rgb(0,1,2)] h-full w-full">
      {/* Header */}
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
          <Link to="/tags">
            <ButtonB title="Tags" />
          </Link>
        </div>
      </div>
      <div className=" text-center">
        <div className="flex justify-center pt-[6%] font-bold gap-4">
          <div className="text-6xl pt-8 pb-2 text-text">Craft Your</div>
          <div className="text-6xl pt-8 pb-2 text-[rgba(255,0,0,0.5)]">
            Truth
          </div>
        </div>
        <div className="text-2xl font-semibold text-[#666666]">
          Let your thoughts flow like Dostoevsky's confessions
        </div>
      </div>
      <div className="flex flex-wrap justify-between p-[100px] gap-10">
        <Write />
        <div className="flex flex-col gap-10 ">
          <RCard
            hw="w-[278px] "
            title="Word Count:"
            data={["Est. Read Time:", "Characters:"]}
          />
          <RCard
            hw="w-[278px] "
            title="Writing Tips"
            data={[
              "Start with a compelling hook that draws readers into the existential depths",
              "Use concrete examples to illustrate abstract philosophical concepts",
              "Connect literary themes to contemporary issues and experiences",
              "End with thought-provoking questions or insights",
            ]}
          />
          <RCard
            hw="w-[278px] "
            title="Markdown Guide"
            data={[
              "**Bold**",
              "*Italic*",
              "## Heading",
              "> Quote",
              "[Link](URL)",
            ]}
          />
          <RCard
            hw="w-[278px] "
            title="Recent Drafts"
            data={["The Absurd in Digital Life Draft • 2 hours ago"]}
          />
        </div>
      </div>
    </div>
  );
}
