import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="about-image"
          >
            <img src="/about-me.jpg" alt="Muhammed Hasanbaşoğlu" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="about-text"
          >
            <h3>Forever Work In Progress</h3>
            <p>
              Hello! I'm Muhammed Hasanbaşoğlu, known online as @wipdev. I am a creator at heart, using code to bring ideas to life.
            </p>
            <p>
              My passion lies in exploring the creative potential of Artificial Intelligence and Game Development. I believe that nothing is ever truly finished. That is why I embrace the 'Work In Progress' philosophy. I am always learning, building, and looking for the next challenge while connecting with like-minded people along the way.
            </p>

            <div className="stats">
              <div>
                <span className="stat-number">10+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div>
                <span className="stat-number">30+</span>
                <span className="stat-label">Completed Courses</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
