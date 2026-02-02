
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-12 md:py-24 bg-gray-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-4 md:space-y-8">
            <h2 className="text-3xl md:text-6xl font-bold text-white leading-tight">
              Ready to Build the Future?
            </h2>
            <p className="text-base md:text-2xl text-gray-400 leading-relaxed">
              Let's discuss how AI can transform your next project
            </p>

            <div className="space-y-4 md:space-y-6 pt-4 md:pt-8">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-14 md:h-14 bg-gray-900 border border-gray-800 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-mail-line text-lg md:text-2xl text-cyan-400"></i>
                </div>
                <div>
                  <p className="text-[10px] md:text-sm text-gray-500">Email</p>
                  <a href="mailto:contact@example.com" className="text-white hover:text-cyan-400 transition-colors cursor-pointer text-xs md:text-base">
                    contact@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-14 md:h-14 bg-gray-900 border border-gray-800 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-linkedin-fill text-lg md:text-2xl text-cyan-400"></i>
                </div>
                <div>
                  <p className="text-[10px] md:text-sm text-gray-500">LinkedIn</p>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition-colors cursor-pointer text-xs md:text-base">
                    Connect with me
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-14 md:h-14 bg-gray-900 border border-gray-800 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0">
                  <i className="ri-github-fill text-lg md:text-2xl text-cyan-400"></i>
                </div>
                <div>
                  <p className="text-[10px] md:text-sm text-gray-500">GitHub</p>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition-colors cursor-pointer text-xs md:text-base">
                    View my repositories
                  </a>
                </div>
              </div>
            </div>

            <div className="flex gap-3 md:gap-4 pt-4 md:pt-8">
              <button className="px-4 md:px-8 py-2.5 md:py-4 bg-cyan-500 text-gray-950 text-xs md:text-base font-semibold rounded-lg hover:bg-cyan-400 transition-all inline-flex items-center gap-2 md:gap-3 whitespace-nowrap cursor-pointer">
                <i className="ri-calendar-line text-base md:text-xl"></i>
                Schedule a Call
              </button>
              <a 
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 md:px-8 py-2.5 md:py-4 border-2 border-gray-700 text-white text-xs md:text-base font-semibold rounded-lg hover:bg-gray-900 transition-all inline-flex items-center gap-2 md:gap-3 whitespace-nowrap cursor-pointer"
              >
                <i className="ri-github-fill text-base md:text-xl"></i>
                View GitHub
              </a>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl md:rounded-2xl p-4 md:p-8">
            <h3 className="text-lg md:text-2xl font-bold text-white mb-4 md:mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="name" className="block text-[10px] md:text-sm font-medium text-gray-400 mb-1 md:mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors text-xs md:text-sm"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[10px] md:text-sm font-medium text-gray-400 mb-1 md:mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors text-xs md:text-sm"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-[10px] md:text-sm font-medium text-gray-400 mb-1 md:mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors text-xs md:text-sm"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[10px] md:text-sm font-medium text-gray-400 mb-1 md:mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  maxLength={500}
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none text-xs md:text-sm"
                  placeholder="Tell me about your project..."
                />
                <p className="text-[8px] md:text-xs text-gray-500 mt-1 md:mt-2">Maximum 500 characters</p>
              </div>

              <button
                type="submit"
                className="w-full px-4 md:px-8 py-3 md:py-4 bg-cyan-500 text-gray-950 text-xs md:text-base font-semibold rounded-lg hover:bg-cyan-400 transition-all whitespace-nowrap cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
