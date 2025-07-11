
export default function About() {
  return (
    <div className="p-56 flex flex-col md:flex-row md:items-start space-y-8 md:space-y-0 md:space-x-8 justify-center items-center">
      <div className="flex-shrink-0 px-6">
        <img
          src="https://images.unsplash.com/photo-1422207258071-70754198c4a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29mZmVlJTIwY3VwfGVufDB8MHwwfHx8MA%3D%3D"
          alt="about"
          className="h-96 w-auto object-cover rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-[0_0_30px_10px_rgba(16,16,16,0.8)]"
        />
      </div>
        <div className="border-l-2 border-onwghite h-96 mx-5 "></div>
      <div className="flex flex-col items-start">
        <div className="border-l-2 border-gray-300 h-full"></div>
        <div className="text-onwghite text-lg leading-relaxed px-6">
          <h2 className="text-3xl font-bold mb-4 text-onwghite">About Us</h2>
          <p>
            I am a web developer. I created this project for the betterment of
            people. However, I believe humanity sometimes fails to appreciate
            such creations due to selfishness. Despite that, I wish everyone the
            best of luck in their journey. Let’s work together to create a
            better future.
          </p>
        </div>
      </div>
    </div>
  );
}
