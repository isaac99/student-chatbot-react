import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>Isaac's Therapy App</h1>
      <nav>
        <a style={styles.link} href="#about">About</a>
        <a style={styles.link} href="#services">Services</a>
        <a style={styles.link} href="#contact">Contact</a>
      </nav>
    </header>
  );
};

const styles = {
  header: { display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#282c34', color: '#fff' },
  logo: { margin: 0 },
  link: { margin: '0 1rem', color: '#61dafb', textDecoration: 'none' }
};

export default Header;
