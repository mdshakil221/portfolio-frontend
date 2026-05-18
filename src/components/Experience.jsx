const experiences = [
  {
    title: 'Junior MERN Stack Developer',
    company: 'Company Name',
    duration: '2024 - Present',
    description: 'Developed full-stack web applications using React, Node.js, Express and MongoDB.',
  },
  {
    title: 'Frontend Developer Intern',
    company: 'Company Name',
    duration: '2023 - 2024',
    description: 'Built responsive UI components using React and Tailwind CSS.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen bg-gray-800 text-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">My <span className="text-cyan-400">Experience</span></h2>
          <div className="w-16 h-1 bg-cyan-400 mx-auto"></div>
        </div>

        <div className="relative border-l-2 border-cyan-400 ml-4">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-10 ml-8">
              <div className="absolute -left-3 w-6 h-6 bg-cyan-400 rounded-full"></div>
              <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-cyan-400">{exp.title}</h3>
                <p className="text-gray-400 text-sm mb-2">{exp.company} | {exp.duration}</p>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;