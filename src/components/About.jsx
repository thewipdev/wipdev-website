import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="about-image"
          >
            <img src="/about-me.jpg" alt="About Me" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="about-text"
          >
            <h3>{t.about.title}</h3>
            <p>
              {t.about.bio}
            </p>

            <div className="stats">
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">{t.about.projects}</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">30+</span>
                <span className="stat-label">{t.about.courses}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
