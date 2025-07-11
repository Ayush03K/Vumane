
export default function Create() {
  return (
    <div className="bg-moong h-full w-full text-text px-56 py-6 flex flex-col justify-center gap-10 ">
        <div className="">
            <div className="text-6xl font-serif py-2">Create Your Narrative</div>
            <div className="text-2xl font-serif">Channel the spirit of Kafka and Dostoevsky</div>
        </div>
        <div className="">
            <div className="text-2xl text-left font-serif py-2">Title</div>
            <input className="h-16 w-full bg-lightgray rounded-md text-xl" placeholder="    Enter your title"></input>
        </div>
        <div>
            <div className="text-2xl font-serif py-2">Category</div>
            <input className="h-16 w-full bg-lightgray rounded-md font-serif text-xl" placeholder="    category"></input>
        </div>
        <div>
            <div className="text-2xl font-serif py-2">Cover Image</div>
            <input type="file" ></input>
        </div>
        <div>
            <div className="text-2xl font-serif py-2">Content</div>
            <input className="h-80 w-full bg-lightgray  rounded-md font-serif text-xl" placeholder="    Begin your narrative here..."></input>
        </div>
        <div>
            <div className="text-2xl font-serif py-2">Tags</div>
            <input className="h-16 w-full bg-lightgray rounded-md font-serif text-xl" placeholder="    Add tags separated by commas..."></input>
        </div>
        <div className="flex flex-row gap-5 font-serif">
            <div className="bg-slate-700 p-5 h-16 w-28 text-center rounded-md">Publish</div>
            <div className="p-5 h-16 w-32 text-center border-2 stone-300 rounded-md">Save Draft</div>
        </div>
    </div>
  )
}
