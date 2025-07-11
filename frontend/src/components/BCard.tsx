function BCard() {
  return (
    <div className="relative h-[600px] w-[400px] px-6 py-4 text-white font-medium rounded-2xl
      bg-[rgba(0,40,80,0.15)] backdrop-blur-xl border border-white/10
      shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.1),0_0_15px_rgba(0,80,255,0.2)]
      transition duration-300 ease-in-out overflow-hidden">
      
      {/* Top light reflection */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-white/1 blur-2xl opacity-40 pointer-events-none rounded-t-2xl z-0" />

      {/* Your content */}
      <div className="relative z-10">
        Sign Up
      </div>
    </div>
  )
}

export default BCard;
