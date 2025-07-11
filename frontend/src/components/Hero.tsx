import { CiSearch } from "react-icons/ci"; // Importing the search icon

export default function () {
  return (
    <div>
      <img
        src="/src/assets/images/pexels-meet411-34435.jpg"
        alt="logo"
        className="h-screen w-screen object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-screen flex justify-center items-start p-8 flex-col gap-6">
        <h1 className="text-primary text-7xl font-bold">Welcome to Vumane! <hr className="pt-1 bg-primary" /></h1>
        
        <div>
            <h3 className="text-primary text-2xl">A space where your thoughts, ideas, and creativity come to life.</h3>
            <h4 className="text-primary text-xl">Whether you're a seasoned blogger or a passionate journal keeper, Vumane is your home to write, share, and express anything on your mind. <br />
            Here, every word counts, and every story matters. Let your voice be heard, connect with others, and inspire the world—one post at a time. <br />
            Start writing today, and join our vibrant community of bloggers and journalers. Your story begins here.
            </h4>
        </div>
        <div className="flex items-center bg-opacity-30 bg-primary text-onwghite rounded-md backdrop-blur-sm w-3/12">
          <CiSearch className="text-onwghite text-4xl ml-5" />
          <input
            type="text"
            placeholder="Search for Bloggers"
            className="bg-transparent text-onwghite placeholder-onwghite px-6 py-2 w-full h-16 focus:outline-none focus:ring-0"
          />
          <button className="bg-primary text-onwghite px-4 py-2 rounded-md mr-3 ">Search</button>
        </div>
      </div>
    </div>
  );
}
