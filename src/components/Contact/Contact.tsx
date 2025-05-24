// src/components/Contact/Contact.tsx
import React, { useState } from 'react';
import styles from './Contact.module.css';
import { socialLinks } from '../../data'; // For social contact options
import { type ContactFormData } from '../../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    // Basic client-side validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitMessage('Please fill in all fields.');
      setIsSubmitting(false);
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setSubmitMessage('Please enter a valid email address.');
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission (replace with actual API call)
    // For Netlify forms, you'd add `data-netlify="true"` to the form and a hidden input.
    // For other backends, use fetch or axios.
    try {
      // Example: const response = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
      // if (!response.ok) throw new Error('Submission failed');
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay

      setSubmitMessage('Thanks for your message! I’ll get back to you shortly.');
      setFormData({ name: '', email: '', message: '' }); // Clear form
    } catch (error) {
      setSubmitMessage('Sorry, there was an error sending your message. Please try again later.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={`${styles.contactSection} section`}>
      <div className="container">
        <h2 className={`${styles.sectionTitle} section-title`}>Get In Touch</h2>
        <div className={`${styles.contactWrapper} glass-effect`}>
          <div className={styles.contactInfo}>
            <h3 className={styles.contactInfoTitle}>Let's Connect</h3>
            <p className={styles.contactInfoText}>
              Have a project in mind, a question, or just want to say hi? Feel free to reach out.
              I'm always open to discussing new creative ideas or opportunities to be part of your vision.
            </p>
            <div className={styles.socialLinksContainer}>
              {socialLinks.map(link => (
                <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer" className={`${styles.socialLink} btn btn-glass`}>
                  {/* Placeholder for icon, replace with actual SVG or <img> */}
                  {link.icon && <img src={link.icon} alt={link.name} className={styles.socialIcon} />}
                  {!link.icon && link.name}
                </a>
              ))}
            </div>
            <p className={styles.directEmail}>
              Or email me directly at: <a href="mailto:naveen.yohannan@example.com">naveen.yohannan@example.com</a> {/* Replace with actual email */}
            </p>
          </div>

          <form
            className={`${styles.contactForm} glass-effect`}
            onSubmit={handleSubmit}
            name="contact"
            method="POST" // Required for Netlify if data-netlify is true
            data-netlify="true" // For Netlify forms
            data-netlify-honeypot="bot-field" // For Netlify spam protection
          >
            {/* Hidden input for Netlify */}
            <input type="hidden" name="form-name" value="contact" />
            <p className={styles.hiddenHoneypot}>
              <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
            </p>

            <h3 className={styles.formTitle}>Send Me a Message</h3>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.formLabel}>Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className={styles.formInput}
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="What should I call you?"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.formLabel}>Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className={styles.formInput}
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="So I can reply back"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.formLabel}>Your Message</label>
              <textarea
                id="message"
                name="message"
                className={styles.formTextarea}
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="What's on your mind?"
              ></textarea>
            </div>
            <button type="submit" className={`${styles.submitButton} btn btn-primary btn-glass`} disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {submitMessage && (
              <p className={`${styles.submitMessage} ${submitMessage.includes('error') || submitMessage.includes('Please') ? styles.error : styles.success}`}>
                {submitMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;