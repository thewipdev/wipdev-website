import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Phone } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [state, handleSubmit] = useForm("xldkndkl");

  if (state.succeeded) {
    return (
      <section id="contact" className="section contact-section">
        <div className="container">
          <h2 className="section-title">{t.contact.title}</h2>
          <div className="contact-content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '300px' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="success-message"
              style={{ textAlign: 'center', padding: '2rem', background: 'var(--bg-primary)', borderRadius: '1rem', border: '1px solid var(--accent)' }}
            >
              <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>{t.contact.form.success}</h3>
              <button onClick={() => window.location.reload()} className="btn btn-outline">
                {t.contact.form.send}
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">{t.contact.title}</h2>

        <div className="contact-content">
          <div className="contact-info">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="info-item">
                <div className="icon-box">
                  <Mail size={24} />
                </div>
                <motion.div whileHover={{ x: 10 }}>
                  <h4>{t.contact.email}</h4>
                  <p>muhammedhasanbasoglu@gmail.com</p>
                </motion.div>
              </div>

              <div className="info-item">
                <div className="icon-box">
                  <Send size={24} />
                </div>
                <motion.div whileHover={{ x: 10 }}>
                  <h4>{t.contact.telegram}</h4>
                  <p>@thewipdev</p>
                </motion.div>
              </div>

              <div className="info-item">
                <div className="icon-box">
                  <MapPin size={24} />
                </div>
                <motion.div whileHover={{ x: 10 }}>
                  <h4>{t.contact.location}</h4>
                  <p>{t.contact.locationValue}</p>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="contact-form"
          >
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>{t.contact.form.name}</label>
                <input type="text" name="name" placeholder={t.contact.form.name} required />
              </div>
              <div className="form-group">
                <label>{t.contact.form.email}</label>
                <input type="email" name="email" placeholder={t.contact.form.email} required />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
              <div className="form-group">
                <label>{t.contact.form.message}</label>
                <textarea name="message" rows="5" placeholder={t.contact.form.message} required></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
              <button type="submit" className="btn btn-primary" disabled={state.submitting}>
                {state.submitting ? t.contact.form.sending : t.contact.form.send}
                <Send size={18} />
              </button>
              {state.errors && <p style={{ color: 'red', marginTop: '1rem' }}>{t.contact.form.error}</p>}
            </form>
          </motion.div>
        </div>

        {/* Google Calendar Appointment Scheduling - Separate Section */}
        <div className="calendar-section" style={{ marginTop: '4rem', textAlign: 'center' }}>
          <h2 className="section-title" style={{ marginBottom: '2rem', fontSize: '2.5rem', color: '#4a90e2' }}>
            {t.hero.schedule || "Schedule a Meeting"}
          </h2>
          <div
            id="schedule-meeting"
            className="calendar-container"
            style={{
              width: '100%',
              height: '700px',
              overflow: 'hidden',
              borderRadius: '1rem',
              background: 'white',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
            }}
          >
            <iframe
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2I9cZrGnhzt9zSC64xG6Y-xi5RL8UerTFYKdYroMZoTqdpyTWYW2HlQSbUU1675B897cZt9jxO?gv=true"
              style={{ border: 0, width: '100%', height: '100%' }}
              frameBorder="0"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
