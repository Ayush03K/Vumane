interface ipProps {
  hw?: string;
  title?: string;
  data?: string | string[];
}
function RCard({ hw, title, data }: ipProps) {
  const isArray = Array.isArray(data);
  return (
    <div className="">
      <div
        className={`relative ${hw} px-6 py-4 text-white font-medium rounded-2xl bg-[rgba(255,0,0,0.1)] backdrop-blur-xl border border-white/10 hover:shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.15),0_0_15px_rgba(255,0,0,0.3)] transition duration-300 ease-in-out overflow-hidden`}
      >
        <div className="absolute top-0 left-0 w-full h-3/5 bg-white/10 blur-2xl opacity-20 pointer-events-none rounded-t-2xl z-0" />

        <div className="relative z-10 my-[8px]">
          <div className="font-bold mb-[8px]">{title}</div>
          {isArray ? (
            <ul className="list-disc list-inside space-y-1">
              {(data as string[]).map((item, index) => (
                <li key={index} className="text-[15px] font-normal">
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            data
          )}
        </div>
      </div>
    </div>
  );
}

export default RCard;
