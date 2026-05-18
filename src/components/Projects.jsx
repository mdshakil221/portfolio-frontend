import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from '../utils/axios';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [filters, setFilters] = useState(['All']);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/projects')
      .then(res => {
        setProjects(res.data);
        setFiltered(res.data);

        // সব unique tech collect করো
        const allTech = ['All', ...new Set(res.data.flatMap(p => p.tech))];
        setFilters(allTech);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleFilter = (tech) => {
    setActiveFilter(tech);
    if (tech === 'All') {
      setFiltered(projects);
    } else {
      setFiltered(projects.filter(p => p.tech.includes(tech)));
    }
  };

  return (
    <section id="projects" className="min-h-screen bg-gray-800 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">My <span className="text-cyan-400">Projects</span></h2>
          <div className="w-16 h-1 bg-cyan-400 mx-auto"></div>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((tech) => (
            <button
              key={tech}
              onClick={() => handleFilter(tech)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                activeFilter === tech
                  ? 'bg-cyan-400 text-gray-900'
                  : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        {loading ? (
          <p className="text-center text-gray-400">Loading...</p>
        ) : filtered.length === 0 ? (
          <p className="text-center text-gray-400">No projects found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, index) => (
              <motion.div
                key={project._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: false }}
                className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-400/20 transition"
              >
                {project.image && (
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="bg-gray-700 text-cyan-400 text-xs px-3 py-1 rounded-full">{t}</span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-sm text-cyan-400 hover:underline">GitHub</a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-sm text-green-400 hover:underline">Live Demo</a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;