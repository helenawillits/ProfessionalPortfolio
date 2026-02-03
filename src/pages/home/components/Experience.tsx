

export default function Experience() {
  const timeline = [
    {
      period: 'Summer 2021',
      role: 'SDE Intern',
      company: 'Amazon Lex',
      highlight: 'NLP Model Diagnostics',
      // description: 'Built regression analysis tool for NLP model performance, saving 200+ dev hours/week. Awarded Summa Cum Laude.',
      icon: 'ri-brain-line'
    },
    {
      period: 'Summer 2022',
      role: 'SDE Intern',
      company: 'CodeCatalyst',
      highlight: 'Developer Tools',
      // description: 'Designed code coverage feature using CDK, TypeScript, Lambda, S3, and EC2 for 10,000+ developers.',
      icon: 'ri-code-box-line'
    },
    {
      period: 'June 2024 - Jan 2025',
      role: 'SDE 1',
      company: 'Amazon Q (AWS)',
      highlight: 'Enterprise AI Assistant',
      // description: 'Delivered major frontend components for Q Code Transformation launch at Re:Invent. Saves enterprises $50k-$200k/year.',
      icon: 'ri-robot-line'
    },
    {
      period: 'Jan 2025 - Jan 2026',
      role: 'SDE 1',
      company: 'Alexa Plus',
      highlight: 'Next-Gen Ambient AI',
      // description: 'Pioneered agentic capabilities with model-agnostic LLM orchestration. Shipped to 3M+ users.',
      icon: 'ri-voice-recognition-line'
    }
  ];

  return (
    <section id="experience" className="py-12 md:py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-16 space-y-2 md:space-y-4">
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-gray-800 text-cyan-400 rounded-full text-xs md:text-sm font-semibold whitespace-nowrap border border-gray-700">
            CAREER TIMELINE
          </div>
          <h2 className="text-2xl md:text-5xl font-bold text-white">
            My Journey at Amazon
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Horizontal Line */}
          <div className="absolute top-24 left-0 right-0 h-1 bg-gray-800 rounded-full hidden md:block"></div>
          
          {/* Progress Line */}
          <div className="absolute top-24 left-0 h-1 bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full hidden md:block" style={{ width: '100%' }}></div>

          {/* Timeline Items */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {timeline.map((item, index) => (
              <div key={index} className="relative flex flex-col items-center">
                {/* Node */}
                <div className="relative z-10 mb-2 md:mb-4">
                  <div className="w-10 h-10 md:w-16 md:h-16 bg-gray-800 border-2 border-cyan-500 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/20">
                    <i className={`${item.icon} text-base md:text-2xl text-cyan-400`}></i>
                  </div>
                </div>

                {/* Connector Dot */}
                <div className="w-2 h-2 md:w-4 md:h-4 bg-cyan-500 rounded-full mb-2 md:mb-4 hidden md:block shadow-lg shadow-cyan-500/50"></div>

                {/* Content Card */}
                <div className="bg-gray-800 border border-gray-700 rounded-lg md:rounded-xl p-3 md:p-5 w-full hover:border-cyan-500 transition-all duration-300 group">
                  <div className="text-center mb-1.5 md:mb-3">
                    <span className="text-[8px] md:text-xs font-semibold text-cyan-400 bg-cyan-500/10 px-2 md:px-3 py-0.5 md:py-1 rounded-full">
                      {item.period}
                    </span>
                  </div>
                  
                  <h3 className="text-xs md:text-lg font-bold text-white text-center mb-0.5 md:mb-1">
                    {item.role}
                  </h3>
                  <p className="text-[10px] md:text-sm text-cyan-400 font-medium text-center mb-1 md:mb-2">
                    {item.company}
                  </p>
                  <p className="text-[8px] md:text-xs text-gray-500 text-center mb-1.5 md:mb-3 font-medium uppercase tracking-wide">
                    {item.highlight}
                  </p>
                  
                  <p className="text-[10px] md:text-sm text-gray-400 text-center leading-relaxed hidden md:block">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Amazon Badge */}
        <div className="mt-8 md:mt-16 flex justify-center">
          <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 bg-gray-800 border border-gray-700 rounded-full">
            <i className="ri-amazon-fill text-lg md:text-2xl text-white"></i>
            <span className="text-xs md:text-sm text-gray-300 font-medium">4 Years of Building at Amazon Scale</span>
          </div>
        </div>
      </div>
    </section>
  );
}
