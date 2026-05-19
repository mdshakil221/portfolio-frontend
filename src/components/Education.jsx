const educations = [
  {
    degree: 'BSc in Computer Science',
    institution: 'CIty University',
    duration: '2023 - 2026',
    description: 'Studied software engineering, data structures, algorithms and web development.',
  },
  {
    degree: 'HSC',
    institution: 'Monohardi College',
    duration: '2018 - 2020',
    description: 'Science group with GPA 4.25.',
  },
];

const Education = () => {
  return (
    <section id="education" className="min-h-screen bg-gray-900 text-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">My <span className="text-cyan-400">Education</span></h2>
          <div className="w-16 h-1 bg-cyan-400 mx-auto"></div>
        </div>

        <div className="relative border-l-2 border-cyan-400 ml-4">
          {educations.map((edu, index) => (
            <div key={index} className="mb-10 ml-8">
              <div className="absolute -left-3 w-6 h-6 bg-cyan-400 rounded-full"></div>
              <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-cyan-400">{edu.degree}</h3>
                <p className="text-gray-400 text-sm mb-2">{edu.institution} | {edu.duration}</p>
                <p className="text-gray-300">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;