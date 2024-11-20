// About.js
import React from 'react';

const About = () => {
  const styles = {
    container: {
      padding: '2rem',
      backgroundColor: '#f0f8ff',
    },
    header: {
      color: '#2c3e50',
    },
    paragraph: {
      fontSize: '1.1rem',
      lineHeight: '1.6',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>About Us</h2>
      <p style={styles.paragraph}>
        Welcome to Isaac's Therapy App! We are dedicated to providing personalized therapy sessions to help you navigate life's challenges. Our team of experienced therapists is here to support you every step of the way.
      </p>
    </div>
  );
};

export default About;
