interface ipCard {
  hw?: string;
  content?: string;
  tags?: string;
  title?: string;
  subtitle?: string;
  authorId?: string;
  likes?: string;
}

function BCard({
  hw,
  content,
  tags,
  title,
  authorId,
  likes,
}: ipCard) {
  return (
    <div
      className={`relative ${hw} px-6 py-4 text-white font-medium rounded-2xl
        bg-[rgba(0,40,80,0.15)] backdrop-blur-xl 
        shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.1)]
        transition duration-300 ease-in-out overflow-hidden`}
    >
      <div className="absolute top-0 left-0 w-full h-1/2 bg-white/1 blur-2xl opacity-40 pointer-events-none rounded-t-2xl z-0 " />

      <div className="relative z-10 flex gap-5">
        {title && (
          <img
            src="https://images.pexels.com/photos/128428/pexels-photo-128428.jpeg"
            className="w-[40%] h-[250px] object-cover rounded-xl"
            alt={title}
          />
        )}
        <div className="flex flex-col justify-center gap-3">
        {title && <div className="text-xl font-semibold">{title}</div>}

        {/* Tags */}
        {tags && (
          <div className="flex flex-wrap gap-2 text-sm text-white/60">
            {tags.split(" ").map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-white/10 rounded-full border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Content */}
        {content && (
          <p className="text-sm text-white/70">
            {content.substring(0, 160)}...
          </p>
        )}

        <div className="flex justify-between text-sm text-white/40 mt-2">
          <span>By {authorId || "Anonymous"}</span>
          {likes && <span>❤️ {likes}</span>}
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default BCard;
