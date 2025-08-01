function Skeleton2({ hw = "h-[280px] w-full" }: { hw?: string }) {
  return (
    <div
      className={`relative ${hw} px-6 py-4 text-white font-medium rounded-2xl
        bg-[rgba(0,40,80,0.15)] backdrop-blur-xl 
        shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.1),0_0_15px_rgba(0,80,255,0.2)]
        transition duration-300 ease-in-out overflow-hidden`}
    >
      <div className="absolute top-0 left-0 w-full h-1/2 bg-white/1 blur-2xl opacity-40 pointer-events-none rounded-t-2xl z-0" />

      <div className="relative z-10 flex gap-4">
        <div className="w-[40%] h-[250px] bg-white/10 rounded-xl" />

        <div className="flex flex-col justify-center gap-4 flex-1">
          <div className="h-5 w-3/4 bg-white/10 rounded-md" />

          <div className="flex flex-wrap gap-2">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-6 w-16 bg-white/10 rounded-full"></div>
            ))}
          </div>

          <div className="space-y-2">
            <div className="h-3 w-full bg-white/10 rounded-md"></div>
            <div className="h-3 w-[90%] bg-white/10 rounded-md"></div>
            <div className="h-3 w-[80%] bg-white/10 rounded-md"></div>
          </div>

          <div className="flex justify-between mt-2">
            <div className="h-3 w-1/3 bg-white/10 rounded-md"></div>
            <div className="h-3 w-10 bg-white/10 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skeleton2;
