// Contact.js
import React from 'react';

const Contact = () => {
  const styles = {
    container: {
      padding: '2rem',
      backgroundColor: '#f5f5f5',
    },
    header: {
      color: '#27ae60',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '400px',
    },
    input: {
      margin: '0.5rem 0',
      padding: '0.5rem',
      fontSize: '1rem',
    },
    textarea: {
      margin: '0.5rem 0',
      padding: '0.5rem',
      fontSize: '1rem',
      height: '100px',
    },
    button: {
      padding: '0.7rem',
      backgroundColor: '#27ae60',
      color: '#fff',
      border: 'none',
      cursor: 'pointer',
      fontSize: '1rem',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Contact Us</h2>
      <form style={styles.form}>
        <input style={styles.input} type="text" placeholder="Your Name" />
        <input style={styles.input} type="email" placeholder="Your Email" />
        <textarea style={styles.textarea} placeholder="Your Message"></textarea>
        <button style={styles.button} type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
