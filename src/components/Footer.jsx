import React from 'react';
import { Github, Linkedin, Twitter, Instagram, BookOpen, Code2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo">
          wip<span className="highlight">dev</span>
        </div>

        <div className="copyright">
          © {new Date().getFullYear()} Muhammed Hasanbaşoğlu. {t.footer.rights}
        </div>

        <div className="footer-social">
          <a href="https://github.com/thewipdev" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/wipdev" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="https://twitter.com/thewipdev" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter">
            <Twitter size={20} />
          </a>
          <a href="https://www.instagram.com/wipdev" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
            <Instagram size={20} />
          </a>
          <a href="https://gdg.community.dev/u/mryaea/#/about" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GDG Community" title="GDG Community">
            <Code2 size={20} />
          </a>
          <a href="https://medium.com/@muhammedhasanbasoglu" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Medium" title="Medium">
            <BookOpen size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
