import { motion } from 'framer-motion';

const skills = [
  { name: 'React.js', level: 90, color: 'bg-cyan-400' },
  { name: 'Node.js', level: 85, color: 'bg-green-400' },
  { name: 'Express.js', level: 85, color: 'bg-yellow-400' },
  { name: 'MongoDB', level: 80, color: 'bg-emerald-400' },
  { name: 'JavaScript', level: 90, color: 'bg-yellow-300' },
  { name: 'HTML & CSS', level: 95, color: 'bg-orange-400' },
  { name: 'Tailwind CSS', level: 85, color: 'bg-sky-400' },
  { name: 'Git & GitHub', level: 80, color: 'bg-purple-400' },
];

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen bg-gray-900 flex items-center justify-center text-white py-20">
      <div className="max-w-4xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">My <span className="text-cyan-400">Skills</span></h2>
          <div className="w-16 h-1 bg-cyan-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between mb-1">
                <span className="font-medium">{skill.name}</span>
                <span className="text-gray-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <motion.div
                  className={`${skill.color} h-3 rounded-full`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;