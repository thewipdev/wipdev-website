import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  const [formStatus, setFormStatus] = React.useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    setFormStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/xldkndkl', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('success');
        form.reset();
        setTimeout(() => setFormStatus(''), 3000);
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-content">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="contact-info"
          >
            <h3>Let's Talk</h3>
            <p>
              I'm currently open to new opportunities and collaborations.
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <motion.div
              className="info-item"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="icon-box"><Mail size={20} /></div>
              <div>
                <h4>Email</h4>
                <p>muhammedhasanbasoglu@gmail.com</p>
              </div>
            </motion.div>

            <motion.div
              className="info-item"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="icon-box"><MessageCircle size={20} /></div>
              <div>
                <h4>Telegram</h4>
                <p>@thewipdev</p>
              </div>
            </motion.div>

            <motion.div
              className="info-item"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="icon-box"><MapPin size={20} /></div>
              <div>
                <h4>Location</h4>
                <p>Samsun, Turkey</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ type: "spring", stiffness: 50, delay: 0.2 }}
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Your Email" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
            </div>

            {formStatus === 'success' && (
              <div style={{ padding: '1rem', backgroundColor: '#10b981', color: 'white', borderRadius: '0.5rem', marginBottom: '1rem' }}>
                ✓ Message sent successfully!
              </div>
            )}

            {formStatus === 'error' && (
              <div style={{ padding: '1rem', backgroundColor: '#ef4444', color: 'white', borderRadius: '0.5rem', marginBottom: '1rem' }}>
                ✗ Failed to send message. Please try again.
              </div>
            )}

            <button type="submit" className="btn btn-primary" disabled={formStatus === 'sending'}>
              {formStatus === 'sending' ? 'Sending...' : 'Send Message'} <Send size={18} />
            </button>
          </motion.form>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="calendar-container"
          id="schedule-meeting"
          style={{ marginTop: '4rem', backgroundColor: 'white', padding: '2rem', borderRadius: '1rem', scrollMarginTop: '100px' }}
        >
          <h3 className="section-title" style={{ fontSize: '1.8rem', marginBottom: '2rem', color: '#0f172a' }}>Schedule a Meeting</h3>
          {/* Google Calendar Appointment Scheduling begin */}
          <iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2I9cZrGnhzt9zSC64xG6Y-xi5RL8UerTFYKdYroMZoTqdpyTWYW2HlQSbUU1675B897cZt9jxO?gv=true" style={{ border: 0 }} width="100%" height="600" frameBorder="0"></iframe>
          {/* end Google Calendar Appointment Scheduling */}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
