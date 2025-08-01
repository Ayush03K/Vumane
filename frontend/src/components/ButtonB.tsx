interface ButTile {
  title?: string;
  hw?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function ButtonB({ title, hw, onClick }: ButTile) {
  return (
    <button
      onClick={onClick}
      className={`relative overflow-hidden px-6 py-3 ${hw} text-white font-medium rounded-full 
        bg-[rgba(0,0,0,0.5)] backdrop-blur-sm border border-[rgb(0,40,80,0.5)] 
        hover:shadow-[inset_0_0_40px_rgba(0,40,80,0.5)] hover:scale-[104%] transition duration-300 ease-in-out`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,40,80,0.8)_0%,_transparent_100%)] z-0" />

      <span className="relative z-10">{title}</span>
    </button>
  );
}

export default ButtonB;
