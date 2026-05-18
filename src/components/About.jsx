import { motion } from 'framer-motion';
import shakilPicture from '../assets/shakilpicture.jpg';

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-gray-800 flex items-center justify-center text-white py-20">
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-64 h-64 rounded-full overflow-hidden border-4 border-cyan-400 flex-shrink-0"
        >
          <img src={shakilPicture} alt="MD Shakil" className="w-full h-full object-cover" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 className="text-3xl font-bold mb-2">About <span className="text-cyan-400">Me</span></h2>
          <div className="w-16 h-1 bg-cyan-400 mb-6"></div>
          <p className="text-gray-300 mb-4">
            I'm a passionate MERN Stack Developer from Bangladesh. I love building
            full-stack web applications that are fast, scalable, and user-friendly.
          </p>
          <p className="text-gray-300 mb-6">
            I have experience working with MongoDB, Express.js, React.js, and Node.js.
            I'm always eager to learn new technologies and improve my skills.
          </p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div><span className="text-cyan-400 font-semibold">Name: </span><span className="text-gray-300">MD Shakil</span></div>
            <div><span className="text-cyan-400 font-semibold">Location: </span><span className="text-gray-300">Bangladesh</span></div>
            <div><span className="text-cyan-400 font-semibold">Email: </span><span className="text-gray-300">mdshakil6539@gmail.com</span></div>
            <div><span className="text-cyan-400 font-semibold">Available: </span><span className="text-green-400">Yes</span></div>
          </div>
          <a href="/resume.pdf" className="inline-block mt-6 bg-cyan-400 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-cyan-300 transition">
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;