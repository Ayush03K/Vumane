interface ipProps{
    hw?:string;
    placehold?:string;
    value?:string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
function Input({hw,placehold,value,onChange}:ipProps) {
  return (
    <div>
      <input
        type="text"
        placeholder={placehold}
        className={`${hw} px-4 placeholder-[#ffccccaa] text-onwghite text-sm font-medium rounded-xl border border-white/10 backdrop-blur-lg shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] focus:outline-none focus:ring-2 focus:ring-[#ff4d4d]/50 transition duration-300`}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
