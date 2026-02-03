
export default function About() {
  return (
    <section id="about" className="py-12 md:py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative w-full h-64 md:h-96 rounded-xl md:rounded-2xl overflow-hidden border border-gray-800">
              <img 
                src="https://static.readdy.ai/image/5b91dc56620e006440478c6bdc15e55f/5ea7ae4ce972f9f2bd06800f312defae"
                alt="Helena Willits"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 to-transparent"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4 md:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-gray-800 text-cyan-400 rounded-full text-xs md:text-sm font-semibold whitespace-nowrap border border-gray-700">
              ABOUT ME
            </div>
            
            <h2 className="text-2xl md:text-5xl font-bold text-white">
              Passionate About Innovation
            </h2>

            <div className="space-y-3 md:space-y-4 text-gray-300 leading-relaxed">
              <p className="text-xs md:text-lg">
                I'm a software developer with 2 years of experience at Amazon, 
                specializing in AI-powered solutions.
              </p>

              <p className="text-xs md:text-lg">
                From refining NLP models to using them to overhaul entrenched enterprise systems, 
                I thrive on pushing the boundaries of what's possible with AI. 
                I believe we're at the forefront of a technological revolution, and I'm excited to be 
                part of shaping that future.
              </p>

              <p className="text-xs md:text-lg hidden md:block">
                When I'm not coding, you'll find me catching waves on the California coast,
                travelling off the beaten path, giving back to my community, and writing my first book.
                I'm always eager to learn and build innovative solutions that make a difference.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 md:gap-4 pt-2 md:pt-4">
              <a 
                href="https://github.com/helenawillits" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 md:gap-2 px-4 md:px-6 py-2 md:py-3 bg-gray-800 border border-gray-700 text-white rounded-lg hover:border-cyan-500 transition-colors whitespace-nowrap cursor-pointer text-xs md:text-base"
              >
                <i className="ri-github-fill text-base md:text-xl"></i>
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/helena-willits-22101399" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 md:gap-2 px-4 md:px-6 py-2 md:py-3 bg-gray-800 border border-gray-700 text-white rounded-lg hover:border-cyan-500 transition-colors whitespace-nowrap cursor-pointer text-xs md:text-base"
              >
                <i className="ri-linkedin-fill text-base md:text-xl"></i>
                LinkedIn
              </a>
              <a 
                href="mailto:helena.willits@gmail.com"
                className="flex items-center gap-1.5 md:gap-2 px-4 md:px-6 py-2 md:py-3 bg-gray-800 border border-gray-700 text-white rounded-lg hover:border-cyan-500 transition-colors whitespace-nowrap cursor-pointer text-xs md:text-base"
              >
                <i className="ri-mail-line text-base md:text-xl"></i>
                Email Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
