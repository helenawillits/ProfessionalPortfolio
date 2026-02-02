
export default function Technologies() {
  const technologies = [
    { name: 'Python', icon: 'ri-code-s-slash-line', proficiency: 90 },
    { name: 'React', icon: 'ri-reactjs-line', proficiency: 85 },
    { name: 'TensorFlow', icon: 'ri-brain-line', proficiency: 75 },
    { name: 'OpenAI API', icon: 'ri-robot-2-line', proficiency: 88 },
    { name: 'LangChain', icon: 'ri-links-line', proficiency: 80 },
    { name: 'GitHub Copilot', icon: 'ri-github-fill', proficiency: 95 },
    { name: 'AWS', icon: 'ri-cloud-line', proficiency: 78 },
    { name: 'PostgreSQL', icon: 'ri-database-2-line', proficiency: 82 },
    { name: 'Docker', icon: 'ri-ship-line', proficiency: 80 },
    { name: 'FastAPI', icon: 'ri-flashlight-line', proficiency: 85 },
    { name: 'Scikit-learn', icon: 'ri-line-chart-line', proficiency: 75 },
    { name: 'Node.js', icon: 'ri-nodejs-line', proficiency: 80 }
  ];

  return (
    <section className="py-12 md:py-24 bg-gray-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-16 space-y-2 md:space-y-4">
          <h2 className="text-2xl md:text-5xl font-bold text-white">AI Arsenal</h2>
          <p className="text-sm md:text-xl text-gray-400">Tools Powering Next-Generation Development</p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 md:gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group bg-gray-900 border border-gray-800 rounded-xl md:rounded-2xl p-3 md:p-6 hover:border-cyan-500 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <div className="text-center space-y-2 md:space-y-4">
                <div className="w-8 h-8 md:w-16 md:h-16 mx-auto flex items-center justify-center">
                  <i className={`${tech.icon} text-2xl md:text-5xl text-cyan-400 group-hover:text-cyan-300 transition-colors`}></i>
                </div>
                <h3 className="text-white font-semibold text-[10px] md:text-sm">{tech.name}</h3>
                
                {/* Proficiency Bar */}
                <div className="space-y-1 md:space-y-2">
                  <div className="w-full h-1 md:h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-cyan-500 rounded-full transition-all duration-1000"
                      style={{ width: `${tech.proficiency}%` }}
                    ></div>
                  </div>
                  <span className="text-[8px] md:text-xs text-gray-500">{tech.proficiency}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
