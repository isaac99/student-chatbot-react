// Services.js
import React from 'react';

const Services = () => {
  const styles = {
    container: {
      padding: '2rem',
      backgroundColor: '#fffaf0',
    },
    header: {
      color: '#8e44ad',
    },
    list: {
      listStyleType: 'circle',
      marginLeft: '1rem',
    },
    listItem: {
      margin: '0.5rem 0',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Our Services</h2>
      <ul style={styles.list}>
        <li style={styles.listItem}>Individual Therapy Sessions</li>
        <li style={styles.listItem}>Couples Counseling</li>
        <li style={styles.listItem}>Group Therapy</li>
        <li style={styles.listItem}>Online Consultations</li>
      </ul>
    </div>
  );
};

export default Services;
