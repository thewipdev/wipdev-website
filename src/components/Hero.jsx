import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Twitter, Instagram, BookOpen, Code2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t, language } = useLanguage();
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Use words from translation
  const words = t.hero.roles;

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 200);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  const [currentImage, setCurrentImage] = useState('/hero-profile.png');
  const [rotation, setRotation] = useState(0);
  const [imgRotation, setImgRotation] = useState(0);

  useEffect(() => {
    let intervalId;
    let timeoutId;

    // Function to perform the flip animation
    const triggerFlip = () => {
      setRotation(prev => prev + 180);

      // Swap image and orientation halfway through (750ms)
      setTimeout(() => {
        setCurrentImage(prev =>
          prev === '/hero-profile.png' ? '/hero-flip.jpg' : '/hero-profile.png'
        );
        setImgRotation(prev => prev === 0 ? 180 : 0);
      }, 750);
    };

    // Start the loop: Run once after delay, then every 8 seconds
    timeoutId = setTimeout(() => {
      triggerFlip(); // Run first flip immediately after start delay
      intervalId = setInterval(triggerFlip, 8000); // Then repeat every 8s
    }, 8000); // Wait 8s initially before starting

    // Cleanup function to clear both timeout and interval
    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  // Helper to determine article (A/An for English, Bir for Turkish)
  const getArticle = (word) => {
    if (language === 'tr') return "Bir";
    return word.match(/^[AEIOU]/) ? "An" : "A";
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hero-text"
        >
          <h1>
            <div className="greeting">{t.hero.greeting}</div>
            <div className="name">
              {getArticle(words[loopNum % words.length])} <span className="typing-text">{text}</span>
              <span className="cursor">|</span>
            </div>
          </h1>
          <p className="description">
            {t.hero.description}
          </p>

          <div className="cta-buttons">
            <a href="#schedule-meeting" className="btn btn-primary">
              {t.hero.schedule}
            </a>
            <a href="#contact" className="btn btn-outline">
              {t.hero.contact}
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://www.linkedin.com/in/wipdev" target="_blank" rel="noopener noreferrer" className="social-link">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/thewipdev" target="_blank" rel="noopener noreferrer" className="social-link">
              <Github size={24} />
            </a>
            <a href="https://www.instagram.com/wipdev" target="_blank" rel="noopener noreferrer" className="social-link">
              <Instagram size={24} />
            </a>
            <a href="https://gdg.community.dev/u/mryaea/#/about" target="_blank" rel="noopener noreferrer" className="social-link" title="GDG Community">
              <Code2 size={24} />
            </a>
            <a href="https://medium.com/@muhammedhasanbasoglu" target="_blank" rel="noopener noreferrer" className="social-link" title="Medium">
              <BookOpen size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hero-image"
          style={{ perspective: "1000px" }}
        >
          <motion.div
            className="profile-frame"
            animate={{ rotateY: rotation }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="profile-image-container">
              <img
                src={currentImage}
                alt="Muhammed Hasanbaşoğlu"
                style={{ transform: `rotateY(${imgRotation}deg)` }}
              />
            </div>
            {/* Re-trigger stroke animation by changing key when image changes */}
            <svg key={currentImage} className="profile-stroke" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="49" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
