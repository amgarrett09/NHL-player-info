import React from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';
import '../css/layout.css';

const Layout = ({ children }) => (
  <React.Fragment>
    <Nav />
    {children}
    <footer className="footer" style={{ color: 'white', backgroundColor: '#6a1b9a' }}>
        &copy; 2019 Alex Garrett
    </footer>
  </React.Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
