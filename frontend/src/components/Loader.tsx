import { Loader2 } from "lucide-react";

export default function Loader() {
  return (
  <div className="flex flex-col items-center justify-center h-[300px] text-white text-lg gap-2">
    <Loader2 className="h-8 w-8 animate-spin text-[rgb(225,0,0,0.7)]" />
    <span>Loading...</span>
  </div>
  )
}


