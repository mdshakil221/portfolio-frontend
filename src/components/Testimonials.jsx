const testimonials = [
  {
    name: 'John Doe',
    role: 'CEO, Company Name',
    message: 'Shakil is an excellent developer. He delivered our project on time with great quality.',
    avatar: 'https://via.placeholder.com/60',
  },
  {
    name: 'Jane Smith',
    role: 'Project Manager, Company Name',
    message: 'Working with Shakil was a great experience. Very professional and skilled developer.',
    avatar: 'https://via.placeholder.com/60',
  },
  {
    name: 'Robert Johnson',
    role: 'CTO, Startup Name',
    message: 'Shakil built our entire web application from scratch. Highly recommended!',
    avatar: 'https://via.placeholder.com/60',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-gray-800 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-cyan-400">Testimonials</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-2xl shadow-lg">
              <p className="text-gray-300 mb-6 italic">"{t.message}"</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-semibold text-cyan-400">{t.name}</h4>
                  <p className="text-gray-400 text-sm">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;