export default function BlogDetails() {
    return (
      <article className="bg-moong h-screen w-full text-text px-4 py-12 sm:px-16 lg:px-60 flex flex-col gap-12">
        {/* Author and Publication Info */}
        <div className="flex items-center gap-5">
          <div className="bg-white h-20 w-20 rounded-full"></div>
          <div>
            <div className="text-xl font-serif">Freak</div>
            <div className="text-lg">Published on October 15, 2023</div>
          </div>
        </div>
  
        {/* Blog Title and Tags */}
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif py-4 leading-tight">
            The Metamorphosis of Modern Consciousness
          </h1>
          <div className="flex gap-4 mt-4">
            {["Existentialism", "Psychology", "Philosophy"].map((tag, index) => (
              <div key={index} className="p-2 bg-lightgray text-lg rounded-sm">
                {tag}
              </div>
            ))}
          </div>
        </div>
  
        {/* Blog Image */}
        <div className="overflow-hidden">
          <img
            src="https://plus.unsplash.com/premium_photo-1681488240099-f1f8585ef3e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D"
            alt="Abstract representation of modern consciousness transformation"
            className="h-96 w-full object-cover px-16"
          />
        </div>
  
        {/* Blog Content */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-serif mb-4">
            The Nature of Transformation
          </h2>
          <p className="text-lg leading-relaxed">
            The bedding was hardly able to cover it and seemed ready to slide off
            any moment. His many legs, pitifully thin compared with the size of
            the rest of him, waved about helplessly as he looked. "What's happened
            to me?" he thought. It wasn't a dream.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            "In a world that demands conformity, the act of transformation becomes
            both a curse and a liberation."
          </p>
          <h3 className="text-xl font-semibold mt-6">Society's Response</h3>
          <p className="text-lg leading-relaxed">
            His room, a proper human room although a little too small, lay
            peacefully between its four familiar walls. A collection of textile
            samples lay spread out on the table - Samsa was a travelling salesman
            - and above it there hung a picture that he had recently cut out of an
            illustrated magazine and housed in a nice, gilded frame.
          </p>
        </div>
      </article>
    );
  }
  