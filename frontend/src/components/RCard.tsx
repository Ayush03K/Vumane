function RCard() {
  return (
    <div className="bg-black h-[600px] w-[400px] rounded-2xl">
      <div className="relative h-[600px] w-[400px] px-6 py-4 text-white font-medium rounded-2xl
      bg-[rgba(255,0,0,0.10)] backdrop-blur-xl border border-white/10
      shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.15),0_0_15px_rgba(255,0,0,0.3)]
      transition duration-300 ease-in-out overflow-hidden">
      
      {/* Optional highlight to simulate light hitting glass */}
      <div className="absolute top-0 left-0 w-full h-3/5 bg-white/10 blur-2xl opacity-20 pointer-events-none rounded-t-2xl z-0" />

      {/* Card content */}
      <div className="relative z-10">
        Request Access
      </div>
    </div>
    </div>
    
  )
}

export default RCard
