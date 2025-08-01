import { Heart } from "lucide-react";

interface ipCard {
  tags?: string;
  title: string;
  subtitle?: string;
  author: string;
  likes?: string;
}

function BkCard({ tags, title, subtitle, author, likes }: ipCard) {
  return (
    <div
      className="relative h-[600px] w-[400px] px-6 py-4 text-white font-medium rounded-2xl
      bg-[rgba(255,0,0,0.15)] backdrop-blur-xl border border-white/10
      hover:shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.15),0_0_15px_rgba(255,0,0,0.3)]
      transition duration-300 ease-in-out overflow-hidden flex flex-col"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black blur-2xl opacity-90 pointer-events-none rounded-2xl z-0" />

      <div className="relative z-10 flex flex-col gap-8">
        <img
          src="https://images.unsplash.com/photo-1726944350425-9109d1c0806d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D"
          className="h-[240px] w-full object-cover rounded-xl"
        />

        <div className="flex flex-wrap gap-2">
          {tags?.split(" ").map((tag, index) => (
            <span
              key={index}
              className="bg-[rgb(0,40,80,0.4)] text-[rgb(110,180,250)] px-3 py-1 rounded-full text-sm border border-[rgb(110,180,250,0.2)] hover:shadow-[inset_0_0_15px_rgba(0,80,255,0.2)]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="text-lg font-semibold text-white line-clamp-2">
          {title}
        </div>

        <div className="text-[#cccccc] text-sm font-normal line-clamp-3">
          {subtitle?.substring(0, 150)}...
        </div>

        <div className="flex justify-between items-center pt-2 mt-auto">
          <div className="text-sm text-white/70">{author}</div>
          <div className="flex items-center gap-2 text-white/50">
            <Heart className="w-4 h-4 text-red-400" />
            <span className="text-sm">{likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BkCard;
