export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-950">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left Content */}
        <div className="space-y-4 md:space-y-8">
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-gray-900 border border-gray-800 rounded-full">
            <span className="text-gray-300 text-xs md:text-sm font-medium whitespace-nowrap">AI-Enhanced Developer • 1.5 Years Experience</span>
          </div>

          <div className="space-y-2 md:space-y-4">
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-white">Building Tomorrow's</span>
              <br />
              <span className="text-cyan-400">Software With AI</span>
              <br />
              <span className="text-white">Innovation Today</span>
            </h1>
            <p className="text-sm md:text-xl text-gray-400 leading-relaxed max-w-xl">
              Leveraging cutting-edge AI tools and machine learning to solve complex problems, 
              accelerate development cycles, and build intelligent solutions that drive real business impact.
            </p>
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <a 
              href="#projects" 
              className="px-4 md:px-8 py-2.5 md:py-4 bg-cyan-500 text-gray-950 text-xs md:text-base font-semibold rounded-lg hover:bg-cyan-400 transition-all whitespace-nowrap cursor-pointer"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-4 md:px-8 py-2.5 md:py-4 border-2 border-gray-700 text-white text-xs md:text-base font-semibold rounded-lg hover:bg-gray-900 transition-all whitespace-nowrap cursor-pointer"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Right Visual - AI Brain & Cloud */}
        <div className="relative hidden lg:block">
          <div className="relative w-full h-96 flex items-center justify-center">
            {/* Glowing Background Circle */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
            </div>
            
            {/* Main AI Brain Icon */}
            <div className="relative z-10 flex flex-col items-center gap-8">
              <div className="relative">
                {/* Brain Icon Container */}
                <div className="w-48 h-48 flex items-center justify-center bg-gray-900 border-2 border-cyan-500/30 rounded-full">
                  <i className="ri-brain-line text-8xl text-cyan-400"></i>
                </div>
                
                {/* Orbiting Cloud Icons */}
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-gray-800 border border-gray-700 rounded-full">
                    <i className="ri-cloud-line text-2xl text-cyan-400"></i>
                  </div>
                </div>
                
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-12 flex items-center justify-center bg-gray-800 border border-gray-700 rounded-full">
                    <i className="ri-sparkling-2-line text-2xl text-cyan-400"></i>
                  </div>
                </div>
                
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '18s' }}>
                  <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-gray-800 border border-gray-700 rounded-full">
                    <i className="ri-cpu-line text-2xl text-cyan-400"></i>
                  </div>
                </div>
                
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '16s', animationDirection: 'reverse' }}>
                  <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-gray-800 border border-gray-700 rounded-full">
                    <i className="ri-robot-2-line text-2xl text-cyan-400"></i>
                  </div>
                </div>
              </div>
              
              {/* AI Label */}
              <div className="px-6 py-3 bg-gray-900 border border-gray-800 rounded-full">
                <span className="text-sm font-semibold text-cyan-400 whitespace-nowrap">Powered by AI</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-700 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-gray-600 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}