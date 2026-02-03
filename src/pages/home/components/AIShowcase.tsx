export default function AIShowcase() {
  const features = [
    {
      icon: 'ri-line-chart-line',
      title: 'Model Improvement',
      description: 'Experience improving model performance through data analysis.',
      iconColor: 'text-cyan-400'
    },
    {
      icon: 'ri-brain-line',
      title: 'Machine Learning Integration',
      description: 'Experience leveraging ML models for compelling business use cases, from NLP assistants to AI-driven code migration tools.',
      iconColor: 'text-cyan-400'
    },
    {
      icon: 'ri-robot-2-line',
      title: 'AI-Assisted Coding',
      description: 'Leveraging Cursor, ChatGPT, and Q to accelerate development and learn faster.',
      iconColor: 'text-cyan-400'
    }
  ];

  return (
    <section className="py-12 md:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-16 space-y-2 md:space-y-4">
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-gray-800 text-cyan-400 rounded-full text-xs md:text-sm font-semibold whitespace-nowrap border border-gray-700">
            <i className="ri-sparkling-line"></i>
            POWERED BY AI
          </div>
          <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold text-white">
            This Portfolio Was Built Using AI
          </h2>
          <p className="text-sm md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Embracing an AI-first approach to development, I use cutting-edge tools to build faster, 
            smarter, and more innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-800 border border-gray-700 rounded-xl md:rounded-2xl p-4 md:p-8 hover:border-cyan-500 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <div className={`w-10 h-10 md:w-16 md:h-16 ${feature.iconColor} flex items-center justify-center mb-3 md:mb-6`}>
                <i className={`${feature.icon} text-3xl md:text-5xl`}></i>
              </div>
              <h3 className="text-sm md:text-xl font-bold text-white mb-1.5 md:mb-3">{feature.title}</h3>
              <p className="text-xs md:text-sm text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}