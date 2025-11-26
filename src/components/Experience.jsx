import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Founder & Lead Developer',
      company: 'İleriOkul',
      period: 'September 2025 - Current',
      description: 'Leading the end-to-end development of the platform architecture while overseeing strategic marketing and advertising operations. Designed and implemented a proprietary AI-powered analysis system to deliver personalized student insights, bridging the gap between technical execution and business growth.',
    },
    {
      id: 2,
      role: 'Organizer',
      company: 'Google Developer Groups (GDG) Samsun',
      period: 'April 2024 - Current',
      description: 'Organizing meetups, hackathons, and conferences regarding the latest Google technologies. As a key organizer of DevFest Samsun, the largest tech festival in the Black Sea region, I support a community of over 1,000+ developers by connecting innovators through impactful events.',
    },
    {
      id: 3,
      role: 'Technology & Game Editor',
      company: 'Siyah Dergi',
      period: 'November 2025 - Current',
      description: 'Producing in-depth content on game technologies, hardware trends, and digital culture. Moving beyond fast-consumption media, I focus on objective, data-driven research and technical analysis. My work adheres to strict editorial neutrality, prioritizing deep knowledge and impartial insight over popular trends.',
    },
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>

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
