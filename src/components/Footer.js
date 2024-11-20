import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2024 MyApp. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: { padding: '1rem', textAlign: 'center', background: '#282c34', color: '#fff' }
};

export default Footer;
