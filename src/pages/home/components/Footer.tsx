import logo from "../../../assets/logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Resume', href: '#resume' },
    { name: 'About', href: '#about' }
  ];

  const aiResources = [
    { name: 'AI Tools', href: '#' },
    { name: 'Case Studies', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Tutorials', href: '#' }
  ];

  const socialLinks = [
    { icon: 'ri-linkedin-fill', href: 'https://www.linkedin.com/in/helena-willits-22101399', label: 'LinkedIn' },
    { icon: 'ri-github-fill', href: 'https://github.com/helenawillits', label: 'GitHub' },
    { icon: 'ri-mail-line', href: 'mailto:helena.willits@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="bg-gray-950 text-white relative overflow-hidden border-t border-gray-800">
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-16">
        {/* Upper Section */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 mb-8 md:mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1 space-y-3 md:space-y-4">
            <div className="flex items-center gap-2 md:gap-3">
              <img 
                src={logo}
                alt="Logo" 
                className="w-8 h-8 md:w-12 md:h-12 rounded-full object-cover"
              />
              <span className="text-sm md:text-xl font-bold text-white">
                Helena Willits
              </span>
            </div>
            <p className="text-[10px] md:text-sm text-gray-400 leading-relaxed">
              AI-powered software developer building innovative solutions for tomorrow's challenges.
            </p>
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Subscribe to updates"
                className="flex-1 px-3 md:px-4 py-1.5 md:py-2 bg-gray-800 border border-gray-700 rounded-lg text-[10px] md:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
              />
              <button className="w-8 h-8 md:w-10 md:h-10 bg-cyan-500 rounded-lg flex items-center justify-center hover:bg-cyan-400 transition-all flex-shrink-0 cursor-pointer">
                <i className="ri-send-plane-fill text-gray-900 text-sm md:text-base"></i>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm md:text-lg font-bold mb-2 md:mb-4">Quick Links</h4>
            <ul className="space-y-1.5 md:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-[10px] md:text-sm text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Resources */}
          <div>
            <h4 className="text-sm md:text-lg font-bold mb-2 md:mb-4">AI Resources</h4>
            <ul className="space-y-1.5 md:space-y-3">
              {aiResources.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-[10px] md:text-sm text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm md:text-lg font-bold mb-2 md:mb-4">Connect</h4>
            <ul className="space-y-1.5 md:space-y-3">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] md:text-sm text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-1.5 md:gap-2 cursor-pointer"
                  >
                    <i className={link.icon}></i>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-800 mb-4 md:mb-8"></div>

        {/* Lower Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          <p className="text-[10px] md:text-sm text-gray-400">
            © {currentYear} Helena Willits. All rights reserved.
          </p>

          <div className="flex items-center gap-3 md:gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 md:w-10 md:h-10 border border-gray-800 rounded-lg flex items-center justify-center hover:border-cyan-500 hover:text-cyan-400 transition-all cursor-pointer text-sm md:text-base"
                aria-label={link.label}
              >
                <i className={link.icon}></i>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-1.5 md:gap-2 text-[10px] md:text-sm text-gray-400">
            <i className="ri-sparkling-fill text-cyan-400"></i>
            <span>Built with AI • Designed for Impact</span>
          </div>
        </div>

        {/* Readdy Link */}
        <div className="text-center mt-4 md:mt-8">
          <a 
            href="https://readdy.ai/?ref=logo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[8px] md:text-xs text-gray-600 hover:text-cyan-400 transition-colors cursor-pointer"
          >
            Powered by Readdy
          </a>
        </div>
      </div>
    </footer>
  );
}
