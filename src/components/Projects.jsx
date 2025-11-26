import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'Spotify Clone',
            description: 'A fully functional Spotify clone with music playback, playlists, and user authentication.',
            tags: ['React', 'Tailwind', 'Spotify API'],
            image: 'https://images.unsplash.com/photo-1611339555312-e607c8352fd7?q=80&w=1000&auto=format&fit=crop',
            github: '#',
            demo: '#'
        },
        {
            title: 'E-Commerce Dashboard',
            description: 'Admin dashboard for an e-commerce platform with real-time analytics and inventory management.',
            tags: ['React', 'Chart.js', 'Node.js'],
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
            github: '#',
            demo: '#'
        },
        {
            title: 'Task Management App',
            description: 'Collaborative task manager with drag-and-drop interface and team features.',
            tags: ['React', 'Firebase', 'DnD'],
            image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=1000&auto=format&fit=crop',
            github: '#',
            demo: '#'
        }
    ];

    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="project-card"
                        >
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                                <div className="project-overlay">
                                    <div className="project-links">
                                        <a href={project.github} className="icon-link" title="View Code">
                                            <Github size={24} />
                                        </a>
                                        <a href={project.demo} className="icon-link" title="Live Demo">
                                            <ExternalLink size={24} />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2.5rem;
        }

        .project-card {
          background: var(--bg-secondary);
          border-radius: 1rem;
          overflow: hidden;
          transition: transform 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .project-card:hover {
          transform: translateY(-10px);
        }

        .project-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .project-card:hover .project-image img {
          transform: scale(1.1);
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(15, 23, 42, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .project-links {
          display: flex;
          gap: 1.5rem;
        }

        .icon-link {
          color: white;
          background: var(--accent);
          padding: 0.75rem;
          border-radius: 50%;
          transition: transform 0.2s ease;
        }

        .icon-link:hover {
          transform: scale(1.1);
          background: var(--accent-hover);
        }

        .project-content {
          padding: 1.5rem;
        }

        .project-title {
          font-size: 1.5rem;
          margin-bottom: 0.75rem;
          color: var(--text-primary);
        }

        .project-description {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tag {
          background: rgba(14, 165, 233, 0.1);
          color: var(--accent);
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.8rem;
          font-weight: 500;
        }
      `}</style>
        </section>
    );
};

export default Projects;
