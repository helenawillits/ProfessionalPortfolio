import myresume from "../../../../public/helena_willits_resume.pdf";

export default function Resume() {
  const experiences = [
    {
      title: 'Software Development Engineer 1',
      company: 'Amazon',
      team: 'Alexa Plus',
      period: 'Jan 2025 - Jan 2026',
      // location: 'Seattle, WA',
      achievements: [
        'Pioneered agentic capabilities and platform integrations for Alexa Plus, the next generation of ambient AI',
        'Shipped partner skill integration using Java, Lambda, and API Gateway, delivered E2E test skill, built calendar integrations',
        'Engineered local testing proxy solution using CDK, eliminating testing bottlenecks and saving ~60 developer hours/week',
        'Resolved critical bugs ensuring high availability for 300M users and partners representing $250K+ in revenue'
      ]
    },
    {
      title: 'Software Development Engineer 1',
      company: 'Amazon Web Services',
      team: 'Amazon Q',
      period: 'June 2024 - Jan 2025',
      // location: 'Seattle, WA',
      achievements: [
        'Delivered major frontend components for Q Code Transformation launch at Re:Invent using TypeScript, React, and REST APIs',
        'Estimated to save enterprises $50k–$200k per year in labor costs with 100+ customers including Fortune 500 companies',
        'Owned team\'s UI, disambiguating technical gaps and prioritizing features based on technical complexity'
      ]
    },
    {
      title: 'Software Development Engineer Intern',
      company: 'Amazon Web Services',
      team: 'CodeCatalyst',
      period: 'Summer 2022',
      // location: 'Seattle, WA',
      achievements: [
        'Designed and implemented code coverage feature for developer tools using CDK, TypeScript, Lambda, S3, and EC2',
        'Tool estimated to be available to about 10,000 developers',
        'Earned full-time return offer'
      ]
    },
    {
      title: 'Software Development Engineer Intern',
      company: 'Amazon Web Services',
      team: 'Amazon Lex',
      period: 'Summer 2021',
      // location: 'Seattle, WA',
      achievements: [
        'Designed and delivered regression analysis tool for NLP model performance diagnostics using Python and S3',
        'Delivered tool estimated to save 200+ developer hours/week across the team',
        'Awarded Summa Cum Laude, Magna Cum Laude, and return offer for exceptional delivery and initiative'
      ]
    }
  ];

  const education = {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'California Polytechnic State University, San Luis Obispo',
    period: '2018 - 2022',
    gpa: '3.5',
    honor1: 'Cum Laude',
    honor2: 'Dean\'s List 2018, 2019, 2020, 2021'
  };

  const skills = {
    'Languages': ['Python', 'JavaScript', 'TypeScript', 'Java', 'HTML/CSS'],
    'Frameworks & Libraries': ['Vite', 'React', 'Node.js', 'FastAPI', 'Express', 'TensorFlow', 'PyTorch'],
    'Tools & Technologies': ['AWS (Lambda, S3, EC2, CDK, API Gateway)', 'Git', 'Docker', 'REST APIs', 'CI/CD'],
    'AI & ML': ['OpenAI API', 'Anthropic Claude', 'Amazon Nova', 'NLP'],
  };

  return (
    <section id="resume" className="py-12 md:py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-16 space-y-2 md:space-y-4">
          <h2 className="text-2xl md:text-5xl font-bold text-white">Resume</h2>
          {/* <p className="text-sm md:text-xl text-gray-400">Professional Experience & Qualifications</p> */}
        </div>

        {/* Education Section */}
        <div className="mb-8 md:mb-16">
          <h3 className="text-xl md:text-3xl font-bold text-white mb-4 md:mb-8 flex items-center gap-2 md:gap-3">
            <i className="ri-graduation-cap-line text-cyan-400 text-lg md:text-3xl"></i>
            Education
          </h3>
          <div className="bg-gray-900 border border-gray-800 rounded-xl md:rounded-2xl p-4 md:p-8">
            <div className="flex flex-col md:flex-row justify-between items-start gap-2 md:gap-4">
              <div>
                <h4 className="text-sm md:text-xl font-bold text-white mb-1 md:mb-2">{education.degree}</h4>
                <p className="text-xs md:text-lg text-cyan-400 font-semibold mb-1 md:mb-2">{education.institution}</p>
                <div className="flex items-center gap-2 md:gap-4 text-[10px] md:text-sm text-gray-400">
                  <span className="flex items-center gap-1 md:gap-2">
                    <i className="ri-medal-line"></i>
                    {education.honor1}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 md:gap-2">
                    <i className="ri-medal-line"></i>
                    {education.honor2}
                  </span>
                  <span>•</span>
                  <span>GPA: {education.gpa}</span>
                </div>
              </div>
              <div className="md:text-right">
                <p className="text-gray-400 font-medium text-xs md:text-base">{education.period}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-8 md:mb-16">
          <h3 className="text-xl md:text-3xl font-bold text-white mb-4 md:mb-8 flex items-center gap-2 md:gap-3">
            <i className="ri-briefcase-line text-cyan-400 text-lg md:text-3xl"></i>
            Experience
          </h3>
          <div className="space-y-4 md:space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-900 border border-gray-800 rounded-xl md:rounded-2xl p-4 md:p-8 hover:border-gray-700 transition-colors">
                <div className="flex flex-col md:flex-row justify-between items-start mb-2 md:mb-4 gap-1 md:gap-2">
                  <div>
                    <h4 className="text-sm md:text-xl font-bold text-white mb-0.5 md:mb-1">{exp.title}</h4>
                    <p className="text-xs md:text-lg text-cyan-400 font-semibold">{exp.company} - {exp.team}</p>
                  </div>
                  <div className="md:text-right">
                    <p className="text-gray-400 font-medium text-xs md:text-base">{exp.period}</p>
                    {/* <p className="text-gray-500 text-[10px] md:text-sm">{exp.location}</p> */}
                  </div>
                </div>
                <ul className="space-y-1 md:space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-300 flex items-start gap-2 md:gap-3 text-xs md:text-base">
                      <span className="text-cyan-400 mt-1 md:mt-1.5 flex-shrink-0">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-8 md:mb-16">
          <h3 className="text-xl md:text-3xl font-bold text-white mb-4 md:mb-8 flex items-center gap-2 md:gap-3">
            <i className="ri-code-box-line text-cyan-400 text-lg md:text-3xl"></i>
            Skills
          </h3>
          <div className="bg-gray-900 border border-gray-800 rounded-xl md:rounded-2xl p-4 md:p-8">
            <div className="space-y-4 md:space-y-6">
              {Object.entries(skills).map(([category, items], index) => (
                <div key={index} className="flex flex-wrap items-center gap-2 md:gap-4">
                  <h4 className="text-xs md:text-base font-bold text-white mb-0">{category}</h4>
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {items.map((skill, i) => (
                      <span 
                        key={i}
                        className="px-2 md:px-3 py-1 md:py-1.5 bg-gray-800 border border-gray-700 rounded-md md:rounded-lg text-[10px] md:text-sm text-gray-300 hover:border-cyan-500 hover:text-cyan-400 transition-colors whitespace-nowrap cursor-pointer"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Download Button */}
        <div className="text-center">
          <button className="px-6 md:px-10 py-3 md:py-4 bg-cyan-500 text-gray-950 text-xs md:text-base font-semibold rounded-lg hover:bg-cyan-400 transition-all inline-flex items-center gap-2 md:gap-3 whitespace-nowrap cursor-pointer"
          onClick={() => {
            const link = document.createElement('a');
            link.href = myresume;
            link.download = 'helena_willits_resume.pdf';
            link.click();
          }}>
            <i className="ri-download-line text-base md:text-xl"></i>
            Download Full Resume (PDF)
          </button>
        </div>
      </div>
    </section>
  );
}
