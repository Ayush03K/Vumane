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
import React from "react";
interface ipCard {
  hw?: string;
  featuredTags?: string;
  tags?: string;
  featuredCategory?: string;
  categories?: string;
}
const categoryIcons: Record<string, JSX.Element> = {
  Modernism: <Layers className="h-[60%] w-[60%] text-[rgb(255,0,0,0.7)]" />,
  Anonymous: <Ghost className="h-[60%] w-[60%] text-[rgb(255,0,0,0.7)]" />,
  Absurdism: <HelpCircle className="h-[60%] w-[60%] text-[rgb(255,0,0,0.7)]" />,
  Existentialism: <Eye className="h-[60%] w-[60%] text-[rgb(255,0,0,0.7)]" />,
  Society: <Users className="h-[60%] w-[60%] text-[rgb(255,0,0,0.7)]" />,
  Philosophy: <BookOpen className="h-[60%] w-[60%] text-[rgb(255,0,0,0.7)]" />,
  Surrealism: <Flame className="h-[60%] w-[60%] text-[rgb(255,0,0,0.7)]" />,
  Psychology: <Brain className="h-[60%] w-[60%] text-[rgb(255,0,0,0.7)]" />,
  Nihilism: <Infinity className="h-[60%] w-[60%] text-[rgb(255,0,0,0.7)]" />,
  Writing: <PenLine className="h-[60%] w-[60%] text-[rgb(255,0,0,0.7)]" />,
  Dreaming: <Moon className="h-[60%] w-[60%] text-[rgb(255,0,0,0.7)]" />,
  Magic: <Sparkles className="h-[60%] w-[60%] text-[rgb(255,0,0,0.7)]" />,
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

function MCard({
  hw,
  featuredTags,
  tags,
  featuredCategory,
  categories,
}: ipCard) {
  return (
    <div
      className={`relative ${hw} px-6 py-4 text-white font-medium rounded-2xl
        bg-[rgba(0,40,80,0.15)] backdrop-blur-xl 
        shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.1)]
        transition duration-300 ease-in-out overflow-hidden`}
    >
      <div className="absolute top-0 left-0 w-full h-1/2 bg-white/1 blur-2xl opacity-40 pointer-events-none rounded-t-2xl z-0 " />

      {/* Tags */}
      {featuredTags && (
        <div className="flex flex-col h-full w-full text-sm text-white/60 justify-center gap-4">
          {featuredTags.split(" ").map((tag, index) => (
            <div key={tag} className="h-[50%] pb-6">
              <Hash className="bg-transperent h-[80%] w-full text-[rgb(255,0,0,0.7)] p-3" />
              <div key={index} className="text-xl text-onwghite">
                {tag}
              </div>
              <div className="text-white/40 pb-4">
                Trending topic on existential discourse
              </div>
            </div>
          ))}
        </div>
      )}
      {tags && (
        <div className="flex gap-2 h-full w-full text-lg text-white/60 justify-center items-center">
          {tags.split(" ").map((tag) => (
            <div key={tag} className="flex items-center gap-1 justify-center">
              <Hash className="h-5 w-5 text-[rgb(255,0,0,0.7)]" />
              <span>{tag}</span>
            </div>
          ))}
        </div>
      )}
      {/* categories */}
      {featuredCategory && (
        <div className="flex gap-2 h-full w-full text-lg text-white/60 justify-center items-center">
          <div className="flex flex-col  h-[60%] items-center gap-4 justify-center">
            {categoryIcons[featuredCategory] || (
              <Hash className="h-[60%] w-[60%] text-[rgb(255,0,0,0.7)]" />
            )}
            <span>{featuredCategory}</span>
            <span className="text-xs text-white/40 text-center px-2">
              {categoryDescriptions[featuredCategory] ||
                "A deep and thoughtful theme."}
            </span>
          </div>
        </div>
      )}

      {categories && (
        <div className="flex flex-col gap-2 h-full w-full text-base text-white/60 justify-center items-center">
          <div className="flex flex-col items-center gap-2 justify-center">
            <div className="h-[40%] w-[40%]">
              {categoryIcons[categories] ? (
                React.cloneElement(categoryIcons[categories], {
                  className: "h-full w-full text-[rgb(255,0,0,0.7)]",
                })
              ) : (
                <Hash className="h-full w-full text-[rgb(255,0,0,0.7)]" />
              )}
            </div>
            <span className="text-sm">{categories}</span>
            <span className="text-xs text-white/40 text-center px-2">
              {categoryDescriptions[categories] ||
                "Explore unique perspectives."}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default MCard;
