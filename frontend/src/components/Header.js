import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>Isaac's Therapy App</h1>
      <nav>
        <NavLink
          exact
          to="/"
          style={styles.link}
          activeStyle={{ fontWeight: 'bold' }}
        >
          Home
        </NavLink>
        <NavLink
          exact
          to="/message-history"
          style={styles.link}
          activeStyle={{ fontWeight: 'bold' }}
        >
          Message History
        </NavLink>
        <NavLink
          exact
          to="/about"
          style={styles.link}
          activeStyle={{ fontWeight: 'bold' }}
        >
          About
        </NavLink>
        <NavLink
          exact
          to="/services"
          style={styles.link}
          activeStyle={{ fontWeight: 'bold' }}
        > 
          Services
        </NavLink>
        <NavLink
          exact
          to="/contact"
          style={styles.link}
          activeStyle={{ fontWeight: 'bold' }}
        >
          Contact
        </NavLink>
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
