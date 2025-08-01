interface butTile {
  title?: string;
  hw?: string;
  onClick?:(e: React.MouseEvent<HTMLButtonElement>) => void;
}
function ButtonR({ title, hw ,onClick}: butTile) {
  return (
    <button onClick={onClick}
      className={`relative overflow-hidden px-6 py-3 ${hw} text-white font-medium rounded-full 
        bg-[rgba(225,0,0,0.4)] backdrop-blur-sm border border-[rgb(225,0,0,0.2)] hover:scale-105 shadow-[inset_0_0_40px_rgba(0,0,0,0.3)]
        transition duration-300 ease-in-out hover:shadow-[0_0_15px_rgba(255,0,0,0.05)]`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.75)_0%,_transparent_100%)] z-0" />
      <span className="relative z-10">{title}</span>
    </button>
  );
}

export default ButtonR;
