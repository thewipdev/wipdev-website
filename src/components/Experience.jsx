import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Experience = () => {
  const { t } = useLanguage();
  const experiences = t.experience.jobs;

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <h2 className="section-title">{t.experience.title}</h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="timeline-item"
            >
              <div className="timeline-dot"></div>
              <motion.div
                className="timeline-content"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="exp-header">
                  <h3>{exp.role}</h3>
                  <span className="company">@ {exp.company}</span>
                </div>
                <div className="exp-meta">
                  <Calendar size={16} />
                  <span>{exp.period}</span>
                </div>
                <p className="exp-description">{exp.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
