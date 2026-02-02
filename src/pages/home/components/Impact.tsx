
export default function Impact() {
  const stats = [
    { number: '40%', label: 'Faster Development', icon: 'ri-speed-up-line' },
    { number: '99.9%', label: 'System Uptime', icon: 'ri-shield-check-line' },
    { number: '15+', label: 'AI Projects Delivered', icon: 'ri-rocket-line' }
  ];

  return (
    <section className="py-12 md:py-24 bg-gray-900 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 md:space-y-8">
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-gray-800 text-cyan-400 rounded-full text-xs md:text-sm font-semibold whitespace-nowrap border border-gray-700">
              MEASURABLE RESULTS
            </div>
            
            <div className="relative">
              <i className="ri-double-quotes-l text-4xl md:text-8xl text-cyan-500/20 absolute -top-2 md:-top-4 -left-2 md:-left-4"></i>
              <blockquote className="text-xl md:text-4xl font-serif text-white leading-relaxed pl-4 md:pl-8">
                Reduced development time by 40% through strategic AI integration
              </blockquote>
            </div>

            <div className="flex items-center gap-3 md:gap-4 pl-4 md:pl-8">
              <img 
                src="https://static.readdy.ai/image/5b91dc56620e006440478c6bdc15e55f/5ea7ae4ce972f9f2bd06800f312defae" 
                alt="Sai Kiran"
                className="w-10 h-10 md:w-16 md:h-16 rounded-full object-cover border-2 md:border-4 border-gray-800 shadow-lg"
              />
              <div>
                <p className="font-bold text-white text-sm md:text-base">Sai Kiran</p>
                <div className="flex items-center gap-1 md:gap-2">
                  <span className="text-xs md:text-sm text-gray-400">AI Specialist</span>
                  <i className="ri-sparkling-fill text-cyan-500 text-xs md:text-base"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 md:gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-gray-800 border border-gray-700 rounded-xl md:rounded-2xl p-4 md:p-8 hover:border-cyan-500 transition-all duration-300"
              >
                <div className="flex items-center gap-4 md:gap-6">
                  <div className="w-10 h-10 md:w-16 md:h-16 bg-cyan-500 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0">
                    <i className={`${stat.icon} text-xl md:text-3xl text-gray-950`}></i>
                  </div>
                  <div>
                    <div className="text-2xl md:text-5xl font-bold text-cyan-400">
                      {stat.number}
                    </div>
                    <p className="text-xs md:text-sm text-gray-400 mt-0.5 md:mt-1">{stat.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
